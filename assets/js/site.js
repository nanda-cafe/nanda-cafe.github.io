/* Monta as páginas a partir dos arquivos em dados/. Não precisa editar este arquivo. */
(function () {
  var S = window.SITE || {};
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var $ = function (sel) { return document.querySelector(sel); };
  var sprite = function (n, cls, alt) {
    return '<img class="pixel ' + (cls || "") + '" src="assets/img/sprites/' + n + '.png" alt="' + esc(alt || "") + '">';
  };
  var COR = { rosa: "rosa", roxo: "roxo", verde: "verde", amarelo: "amarelo", azul: "azul" };
  var TIPO_COR = { "Trabalho": "var(--c-rosa)", "Educação": "var(--c-roxo)", "Cursos": "var(--c-amarelo)", "Palcos": "var(--c-verde)", "Prêmios": "var(--c-laranja)", "Organização": "var(--c-azul)" };

  /* ---------- menu e rodapé ---------- */
  function menu(atual) {
    var links = [
      ["index.html#sobre", "Sobre", "sobre"],
      ["imprensa.html", "Na imprensa", "imprensa"],
      ["index.html#projetos", "Projetos", "projetos"],
      ["trajetoria.html", "Trajetória", "trajetoria"],
      ["textos.html", "Textos publicados", "textos"],
      ["#contato", "Contato", "contato"]
    ];
    var el = $("#menu");
    if (!el) return;
    el.className = "menu";
    el.setAttribute("aria-label", "Menu principal");
    el.innerHTML = '<div class="wrap"><a class="marca" href="index.html"><img class="pixel" src="assets/img/avatar.png" alt="">' + esc(S.nome) + '</a>' +
      '<button class="menu-botao" type="button" aria-expanded="false" aria-controls="menu-links" aria-label="Abrir menu"><span></span><span></span><span></span></button>' +
      '<div class="menu-links" id="menu-links">' + links.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[2] === atual ? ' aria-current="page"' : "") + ">" + l[1] + "</a>";
      }).join("") + "</div></div>";
    var b = el.querySelector(".menu-botao");
    b.addEventListener("click", function () {
      var aberto = el.classList.toggle("aberto");
      b.setAttribute("aria-expanded", aberto);
      b.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
    el.querySelectorAll(".menu-links a").forEach(function (a) {
      a.addEventListener("click", function () { el.classList.remove("aberto"); b.setAttribute("aria-expanded", "false"); });
    });
  }
  function rodape() {
    var el = $("#contato");
    if (!el) return;
    var c = S.contato || {};
    el.className = "rodape";
    el.innerHTML = '<div class="wrap"><div class="rodape-ola">' + sprite("gatinha", "", "") +
      '<div><h2>Vamos construir junto?</h2><p>' +
      (c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : "") +
      (c.linkedin ? '<a href="' + esc(c.linkedin) + '" rel="noopener">LinkedIn</a>' : "") +
      (c.github ? '<a href="' + esc(c.github) + '" rel="noopener">GitHub</a>' : "") +
      "</p></div></div>" +
      (c.curriculo ? '<a class="botao" href="' + esc(c.curriculo) + '" download>Baixar currículo (PDF)</a>' : "") +
      "</div>";
  }

  /* ---------- embeds ---------- */
  function embed(e) {
    var t = e.tipo, src = "", cls = t;
    if (t === "instagram") src = "https://www.instagram.com/p/" + encodeURIComponent(e.codigo) + "/embed/";
    else if (t === "tiktok") src = "https://www.tiktok.com/embed/v2/" + encodeURIComponent(e.codigo);
    else if (t === "linkedin") src = "https://www.linkedin.com/embed/feed/update/urn:li:activity:" + encodeURIComponent(e.codigo);
    else if (t === "spotify") src = "https://open.spotify.com/embed/playlist/" + encodeURIComponent(e.codigo);
    else if (t === "youtube") src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(e.codigo);
    else if (t === "facebook") {
      var video = /\/videos\//.test(e.url);
      src = "https://www.facebook.com/plugins/" + (video ? "video" : "post") + ".php?href=" + encodeURIComponent(e.url) + "&width=500&show_text=true";
    }
    else if (t === "imagem") return '<figure><img loading="lazy" src="' + esc(e.src) + '" alt="' + esc(e.legenda || "") + '">' + (e.legenda ? "<figcaption>" + esc(e.legenda) + "</figcaption>" : "") + "</figure>";
    else if (t === "link") return '<a class="cartao-link" href="' + esc(e.url) + '"' + (/^https?:/.test(e.url) ? ' rel="noopener"' : "") + ">" + sprite("estrela") + "<span><strong>" + esc(e.titulo) + " ↗</strong></span></a>";
    if (!src) return "";
    return '<iframe class="embed ' + cls + '" src="' + esc(src) + '" loading="lazy" title="Post incorporado (' + esc(t) + ')" allow="encrypted-media; clipboard-write; picture-in-picture" allowfullscreen></iframe>';
  }

  /* ---------- HOME ---------- */
  function home() {
    $("#rotulo").textContent = S.rotulo;
    $("#titulo").innerHTML = esc(S.titulo).replace(esc(S.nome), "<em>" + esc(S.nome) + "</em>");
    $("#subtitulo").textContent = S.subtitulo;
    $("#numeros").innerHTML = (S.numeros || []).map(function (n) {
      return "<div><strong>" + esc(n.valor) + "</strong><span>" + esc(n.texto) + "</span></div>";
    }).join("");
    $("#bio").innerHTML = (S.bio || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    $("#lista-projetos").innerHTML = (window.PROJETOS || []).map(function (p) {
      return '<a href="projeto.html?p=' + encodeURIComponent(p.id) + '"><span><small>' + esc(p.periodo) + "</small><strong>" + esc(p.titulo) + '</strong><span class="d">' + esc(p.resumo) + '</span></span><span class="seta" aria-hidden="true">→</span></a>';
    }).join("");
    $("#marcos").innerHTML = (S.marcos || []).map(function (m) {
      return "<li><b>" + esc(m.ano) + "</b><span>" + esc(m.texto) + "</span></li>";
    }).join("");
    $("#competencias").innerHTML = (S.competencias || []).map(function (g) {
      var c = COR[g.cor] || "rosa";
      return '<div class="grupo"><h3 class="grupo-nome"><i style="background:var(--d-' + c + ')" aria-hidden="true"></i>' + esc(g.grupo) + '</h3><ul class="chips">' +
        g.itens.map(function (i) { return '<li style="background:var(--c-' + c + ')">' + esc(i) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    $("#formacao").innerHTML = (S.formacao || []).map(esc).join("<br>");
    $("#idiomas").textContent = S.idiomas;
    var total = (window.TEXTOS || []).reduce(function (a, t) { return a + t.textos.length; }, 0);
    $("#textos-resumo").textContent = total + " textos assinados no " + (window.TEXTOS || []).map(function (t) { return t.nome; }).join(", ").replace(/, ([^,]*)$/, " e $1") + ".";
  }

  /* ---------- PROJETO ---------- */
  function projeto() {
    var lista = window.PROJETOS || [];
    var id = new URLSearchParams(location.search).get("p");
    var i = Math.max(0, lista.findIndex(function (p) { return p.id === id; }));
    var p = lista[i];
    if (!p) return;
    document.title = p.titulo + " · " + S.nome;
    var h = "";
    h += '<header class="wrap cabeca"><p class="trilha"><a href="index.html#projetos">O que ajudei a construir</a> / ' + esc(p.titulo) + "</p><h1>" + esc(p.titulo) + "</h1>" +
      '<dl class="ficha">' + [["Onde", p.onde], ["Quando", p.periodo], ["Meu papel", p.papel], ["Com quem", p.comQuem]].filter(function (x) { return x[1]; }).map(function (x) {
        return "<div><dt>" + x[0] + "</dt><dd>" + esc(x[1]) + "</dd></div>";
      }).join("") + "</dl></header>";
    var idx = [["historia", "A história"]];
    if (p.resultados && p.resultados.length) idx.push(["resultados", "Resultados"]);
    if (p.campanhas && p.campanhas.length) idx.push(["campanhas", "Campanhas"]);
    if (p.materiais && p.materiais.length) idx.push(["materiais", "Links e materiais"]);
    if (idx.length > 1) h += '<nav class="wrap indice" aria-label="Nesta página">' + idx.map(function (x) { return '<a href="#' + x[0] + '">' + x[1] + "</a>"; }).join("") + "</nav>";
    h += '<section id="historia" class="wrap historia">' + (p.historia || []).map(function (b) { return "<div><h2>" + esc(b.titulo) + "</h2><p>" + esc(b.texto) + "</p></div>"; }).join("") + "</section>";
    if (p.resultados && p.resultados.length) h += '<section id="resultados" class="wrap resultados" aria-label="Resultados">' + p.resultados.map(function (r) { return "<div><strong>" + esc(r.valor) + "</strong><span>" + esc(r.texto) + "</span></div>"; }).join("") + "</section>";
    if (p.campanhas && p.campanhas.length) {
      h += '<section id="campanhas" class="campanhas"><div class="wrap"><h2>Campanhas</h2><p>Cada campanha abre e fecha. Os posts aparecem do jeito que foram publicados.</p>' +
        p.campanhas.map(function (c, n) {
          return '<details class="campanha"' + (n === 0 ? " open" : "") + '><summary><span><strong>' + esc(c.titulo) + "</strong><span>" + esc(c.descricao) + '</span></span></summary><div class="embeds" data-embeds="' + n + '"></div></details>';
        }).join("") + "</div></section>";
    }
    if (p.materiais && p.materiais.length) h += '<section id="materiais" class="wrap materiais"><h2>Links e materiais</h2><div class="grade-materiais">' + p.materiais.map(embed).join("") + "</div></section>";
    var ant = lista[(i - 1 + lista.length) % lista.length], prox = lista[(i + 1) % lista.length];
    h += '<nav class="wrap vizinhos" aria-label="Outros projetos"><a href="projeto.html?p=' + encodeURIComponent(ant.id) + '"><small>← Projeto anterior</small><strong>' + esc(ant.titulo) + '</strong></a><a class="prox" href="projeto.html?p=' + encodeURIComponent(prox.id) + '"><small>Próximo projeto →</small><strong>' + esc(prox.titulo) + "</strong></a></nav>";
    $("#conteudo").innerHTML = h;
    // embeds só carregam quando a campanha é aberta
    document.querySelectorAll("details.campanha").forEach(function (d) {
      var box = d.querySelector(".embeds");
      var carregar = function () {
        if (d.open && !box.dataset.ok) { box.dataset.ok = 1; box.innerHTML = p.campanhas[+box.dataset.embeds].embeds.map(embed).join(""); }
      };
      d.addEventListener("toggle", carregar);
      carregar();
    });
  }

  /* ---------- TRAJETÓRIA ---------- */
  function trajetoria() {
    var todos = window.TRAJETORIA || [];
    var tipos = ["Tudo", "Trabalho", "Educação", "Cursos", "Palcos", "Prêmios", "Organização"];
    var atual = "Tudo";
    var f = $("#filtros");
    f.innerHTML = tipos.map(function (t) { return '<button type="button" aria-pressed="' + (t === atual) + '" data-t="' + t + '">' + t + "</button>"; }).join("");
    f.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      atual = b.dataset.t;
      f.querySelectorAll("button").forEach(function (x) {
        var on = x.dataset.t === atual;
        x.setAttribute("aria-pressed", on);
        x.style.background = on && TIPO_COR[x.dataset.t] ? TIPO_COR[x.dataset.t] : "";
      });
      desenha();
    });
    function desenha() {
      var lista = atual === "Tudo" ? todos : todos.filter(function (i) { return i.tipo === atual; });
      var anos = [];
      lista.forEach(function (i) {
        var g = anos.find(function (a) { return a.ano === i.ano; });
        if (!g) { g = { ano: i.ano, itens: [] }; anos.push(g); }
        g.itens.push(i);
      });
      $("#linha").innerHTML = anos.map(function (a) {
        return '<div class="ano"><b>' + esc(a.ano) + '</b><div class="ano-itens">' + a.itens.map(function (i) {
          return '<article class="item"><div class="item-texto"><div class="item-topo"><span class="etiqueta" style="background:' + (TIPO_COR[i.tipo] || "var(--c-rosa)") + '">' + esc(i.tipo) + "</span><small>" + esc(i.quando) + "</small></div><strong>" + esc(i.titulo) + "</strong>" + (i.texto ? "<p>" + esc(i.texto) + "</p>" : "") + "</div>" +
            (i.foto ? '<img loading="lazy" src="' + esc(i.foto) + '" alt="Foto: ' + esc(i.titulo) + '">' : "") + "</article>";
        }).join("") + "</div></div>";
      }).join("");
    }
    desenha();
  }

  /* ---------- IMPRENSA ---------- */
  function imprensa() {
    $("#grade-imprensa").innerHTML = (window.IMPRENSA || []).map(function (m) {
      return '<article class="materia">' + (m.imagem ? '<img loading="lazy" src="' + esc(m.imagem) + '" alt="">' : '<div class="capa">' + sprite("estrela") + "</div>") +
        '<div class="t"><small>' + esc(m.veiculo) + (m.ano ? " · " + esc(m.ano) : "") + "</small><h2>" + esc(m.titulo) + "</h2><p>Projeto: " + esc(m.projeto) + "</p>" +
        (m.url ? '<a class="ler" href="' + esc(m.url) + '" rel="noopener">Ler no site ↗</a>' : "") + "</div></article>";
    }).join("");
  }

  /* ---------- TEXTOS ---------- */
  function textos() {
    var pubs = window.TEXTOS || [];
    if (!pubs.length) return;
    var atual = (location.hash || "").slice(1);
    if (!pubs.some(function (p) { return p.id === atual; })) atual = pubs[0].id;
    var abas = $("#abas"), busca = $("#busca");
    abas.innerHTML = pubs.map(function (p) {
      return '<button type="button" role="tab" data-id="' + esc(p.id) + '">' + esc(p.nome) + " <small>" + p.textos.length + "</small></button>";
    }).join("");
    abas.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      atual = b.dataset.id;
      history.replaceState(null, "", "#" + atual);
      desenha();
    });
    busca.addEventListener("input", desenha);
    function norm(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
    function desenha() {
      abas.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.id === atual); });
      var p = pubs.find(function (x) { return x.id === atual; });
      var q = norm(busca.value.trim());
      var lista = p.textos.filter(function (t) { return !q || norm(t.titulo).indexOf(q) > -1; });
      var anos = [];
      lista.forEach(function (t) {
        var g = anos.find(function (a) { return a.ano === t.ano; });
        if (!g) { g = { ano: t.ano, itens: [] }; anos.push(g); }
        g.itens.push(t);
      });
      anos.sort(function (a, b) { return (b.ano === "Sem data" ? -1 : +b.ano) - (a.ano === "Sem data" ? -1 : +a.ano); });
      $("#lista-textos").innerHTML = '<p class="sobre-pub">' + esc(p.sobre) + "</p>" + (anos.length ? anos.map(function (a) {
        return '<details class="ano-textos" open><summary><strong>' + esc(a.ano) + "</strong><span>" + a.itens.length + (a.itens.length === 1 ? " texto" : " textos") + "</span></summary><ul>" +
          a.itens.map(function (t) { return "<li><small>" + esc(t.mes || "") + '</small><a href="' + esc(t.url) + '" rel="noopener">' + esc(t.titulo) + " ↗</a></li>"; }).join("") + "</ul></details>";
      }).join("") : '<p class="vazio">Nenhum título com essa palavra.</p>');
    }
    desenha();
  }

  var pagina = document.body.dataset.pagina;
  menu(pagina);
  rodape();
  ({ home: home, projeto: projeto, trajetoria: trajetoria, imprensa: imprensa, textos: textos }[pagina] || function () {})();
})();
