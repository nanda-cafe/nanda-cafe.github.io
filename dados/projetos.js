/*
  PROJETOS ("O que ajudei a construir")
  ---------------------------------------------------------------
  Cada projeto vira uma linha na home e uma página em projeto.html?p=<id>.
  A ordem aqui é a ordem no site.

  Campos:
    id        nome curto, sem espaço nem acento (vai no link)
    titulo, periodo, resumo (linha da lista na home)
    onde, papel, comQuem (ficha do projeto)
    historia  lista de blocos { titulo, texto }
    resultados lista de { valor, texto }
    campanhas lista de { titulo, descricao, embeds: [...] }
    materiais lista de embeds ou imagens

  Tipos de embed (cole só o código que aparece no link):
    { tipo: "instagram", codigo: "DPzhzdSjQwU" }        instagram.com/p/<codigo> ou /reel/<codigo>
    { tipo: "tiktok", codigo: "7559608646620024075" }    número do vídeo
    { tipo: "linkedin", codigo: "7014312214694117376" }  número da atividade
    { tipo: "spotify", codigo: "1nZdOikQI3EVgNviwu0Cxd" } playlist
    { tipo: "youtube", codigo: "ID_DO_VIDEO" }
    { tipo: "facebook", url: "https://www.facebook.com/..." } post, foto ou vídeo
    { tipo: "imagem", src: "assets/img/prints/arquivo.webp", legenda: "..." }
    { tipo: "link", url: "https://...", titulo: "..." }
*/
window.PROJETOS = [
  {
    id: "huawei",
    titulo: "Huawei Mobile Brasil",
    periodo: "2023 – hoje",
    resumo: "Lançamentos, campanhas com celebridades e atletas, TikTok e Strava.",
    onde: "BYOUNG Social Media Co.",
    papel: "Gerente de Estratégia Digital",
    comQuem: "Equipe de 10 pessoas, agências de talentos, creators e marketplaces",
    historia: [
      { titulo: "O que construímos", texto: "Estratégia de conteúdo, influência, mídia paga e lançamentos da Huawei Mobile Brasil. Campanhas com celebridades, atletas e veículos como Drauzio Varella, Cauã Reymond, Eliud Kipchoge, Henrique Avancini, Vasco, Corinthians e Ford Models, além da abertura de novos canais: TikTok e o Clube Huawei Brasil no Strava." },
      { titulo: "Como trabalhamos", texto: "Uma equipe de 10 pessoas trabalhando junto com agências de talentos, creators e marketplaces. Em 2026, esse trabalho recebeu o prêmio Outstanding Individual da Huawei na América Latina." }
    ],
    resultados: [
      { valor: "78 → 230", texto: "parcerias com creators por ano entre 2024 e 2026, com o mesmo modelo de gestão" },
      { valor: "+126%", texto: "de crescimento da base no Instagram" },
      { valor: "0 → 100 mil", texto: "seguidores no TikTok em 2024" },
      { valor: "30 mil", texto: "membros no clube do Strava em 6 meses" },
      { valor: "1º dia", texto: "estoque promocional do FreeClip 2 esgotado, com +1.500% na procura" },
      { valor: "+350%", texto: "de interesse pela linha HUAWEI Watch (2024 – 2026)" }
    ],
    // As campanhas e os posts ficam em dados/campanhas-huawei.js
    campanhas: window.CAMPANHAS_HUAWEI || [],
    materiais: []
  },
  {
    id: "clevertap",
    titulo: "CleverTap",
    periodo: "2022 – 2023",
    resumo: "Estratégia digital trilíngue para Brasil e América Latina.",
    onde: "BYOUNG Social Media Co.",
    papel: "Coordenadora de Projeto",
    comQuem: "Time de conteúdo, parceiros e o cliente na Índia",
    historia: [
      { titulo: "O que construímos", texto: "Estratégia digital trilíngue (português, inglês e espanhol) para Brasil e América Latina do SaaS B2B indiano CleverTap." },
      { titulo: "Como trabalhamos", texto: "Gestão do time, pautas, revisão e agendamento de conteúdo, contratos e parceiros e relatórios de performance." }
    ],
    resultados: [],
    campanhas: [],
    materiais: [
      { tipo: "linkedin", codigo: "7014312214694117376" }
    ]
  },
  {
    id: "eventos-senac",
    titulo: "Sistema de eventos do Senac",
    periodo: "2018 – 2019",
    resumo: "Product Owner: unidades publicando direto no portal.",
    onde: "Senac São Paulo",
    papel: "Product Owner",
    comQuem: "Times de tecnologia e comunicação e mais de 60 unidades",
    historia: [
      { titulo: "O que construímos", texto: "Até 2018, as unidades do Senac São Paulo mandavam seus eventos por formulário e e-mail, e a equipe do portal redigitava tudo no back end. Herdando um processo parado há 5 anos, me vi como Product Owner, reescrevi com o desenvolvedor a especificação de requisitos de um sistema que estava parado havia anos, testei cada versão em homologação e organizei os retornos de usabilidade e de layout até a aprovação. O rollout foi em fases. Primeiro, as publicações das unidades passavam por uma fila de moderação da equipe do portal. Depois de oficinas de capacitação sobre o sistema e a qualidade dos textos, as mais de 60 unidades passaram a publicar seus eventos direto no site." }
    ],
    resultados: [],
    campanhas: [],
    materiais: [
      { tipo: "imagem", src: "assets/img/prints/evento-2016.webp", legenda: "Página de evento no portal, 2016" },
      { tipo: "imagem", src: "assets/img/prints/eventos-2019.webp", legenda: "Área de eventos, 2019" },
      { tipo: "imagem", src: "assets/img/prints/eventos-2023.webp", legenda: "Área de eventos, 2023" }
    ]
  },
  {
    id: "fichas-senac",
    titulo: "Fichas de curso em linguagem simples",
    periodo: "Senac São Paulo",
    resumo: "Guia de linguagem e +22% nas vendas digitais de cursos.",
    onde: "Senac São Paulo",
    papel: "Editora de Conteúdo",
    comQuem: "Times de comunicação, produto e tecnologia",
    historia: [
      { titulo: "O que construímos", texto: "As fichas de curso chegavam ao portal direto do sistema educacional, escritas em “senaquês”: o curso de açougueiro, aberto a quem tinha só o ensino fundamental, prometia ensinar a “refilar proteínas animais”. Mediei a negociação entre as gerências de Educação e de Comunicação e propus uma solução na integração entre os dois sistemas. O descritivo técnico, validado nos documentos oficiais, ficou no back end. Um texto em linguagem simples, escrito pela comunicação e aprovado pelo técnico educacional de cada curso, passou a aparecer no site. As vendas de cursos pelo canal digital subiram 22%. Como a troca só acontecia quando uma ficha era atualizada, o portfólio ficou com duas linguagens convivendo, e isso levou à reformulação do portal. Nela, a equipe do portal criou um guia de linguagem e fez uma revisão por amostragem das fichas." }
    ],
    resultados: [
      { valor: "+22%", texto: "nas vendas digitais de cursos" }
    ],
    campanhas: [],
    materiais: []
  },
  {
    id: "portal-senac",
    titulo: "Portal do Senac",
    periodo: "2016 – 2019",
    resumo: "Matérias, coberturas e infográficos para mais de 60 unidades.",
    onde: "Senac São Paulo",
    papel: "Editora de Conteúdo",
    comQuem: "Equipe do portal e as unidades do Senac",
    historia: [
      { titulo: "O que construímos", texto: "Matérias, coberturas e infográficos para mais de 60 unidades, com conteúdo multimídia repercutido na imprensa. Em 2020, participei da migração de CMS do portal, com cursos internos de UX, busca e HTML semântico." }
    ],
    resultados: [],
    campanhas: [],
    materiais: [
      { tipo: "imagem", src: "assets/img/prints/home-2016.webp", legenda: "Home do portal, 2016" },
      { tipo: "imagem", src: "assets/img/prints/home-2019.webp", legenda: "Home do portal, 2019" },
      { tipo: "imagem", src: "assets/img/prints/infografico-sanduiche.webp", legenda: "Infográfico para a Editora Senac (2017)" },
      { tipo: "link", url: "https://oimparcial.com.br/gastronomia/2017/01/saiba-como-montar-de-forma-adequada-o-sanduiche/", titulo: "O infográfico repercutido pelo O Imparcial" }
    ]
  },
  {
    id: "redes-senac",
    titulo: "Redes sociais do Senac",
    periodo: "2019 – 2021",
    resumo: "Time da sede e mais de 150 perfis das unidades.",
    onde: "Senac São Paulo",
    papel: "Gestão das redes sociais",
    comQuem: "Time de redes da sede e mais de 150 perfis das unidades",
    historia: [
      { titulo: "O que construímos", texto: "Gestão do time de redes da sede e coordenação de mais de 150 perfis das unidades. A análise de cliques do portal embasou a migração de pautas quentes para as redes." }
    ],
    resultados: [],
    campanhas: [
      { titulo: "Ensino Médio Técnico", descricao: "2020 · posts e playlist colaborativa", embeds: [
        { tipo: "instagram", codigo: "B7_3oNJn0Na" }, { tipo: "instagram", codigo: "B0ytt22nADn" },
        { tipo: "instagram", codigo: "B0gVHoonpsz" }, { tipo: "spotify", codigo: "1nZdOikQI3EVgNviwu0Cxd" }
      ] },
      { titulo: "Game Dev Career", descricao: "2020", embeds: [
        { tipo: "instagram", codigo: "CGUy4tMHhJN" }
      ] }
    ],
    materiais: []
  },
  {
    id: "semarh",
    titulo: "Comunicação pública em Alagoas",
    periodo: "2012 – 2014",
    resumo: "Imprensa, campanhas e os primeiros perfis da SEMARH nas redes.",
    onde: "Governo de Alagoas · Secretaria do Meio Ambiente e dos Recursos Hídricos",
    papel: "Assessora de Comunicação",
    comQuem: "Equipe da secretaria, imprensa e comitês de bacias",
    historia: [
      { titulo: "O que construímos", texto: "Releases e relação com a imprensa, medição de mídia espontânea, gestão das redes sociais, campanhas publicitárias e institucionais e eventos. Temas: unidades de conservação, resíduos sólidos, comitês de bacias e qualidade da água." }
    ],
    resultados: [],
    campanhas: [],
    materiais: []
  },
  {
    id: "pac-mae",
    titulo: "Pac Mãe",
    periodo: "2013 – 2018",
    resumo: "Portal de cultura pop e maternidade com 3,5 milhões de acessos únicos.",
    onde: "pacmae.com.br",
    papel: "Cofundadora e editora",
    comQuem: "Mais três amigas e uma equipe de 5 colaboradoras",
    historia: [
      { titulo: "O que construímos", texto: "Um portal de cultura pop e maternidade com 3,5 milhões de acessos únicos. Parcerias com Amazon, Netflix, Sony e Disney, programa de culinária geek no YouTube (2015) e posts virais repercutidos pela imprensa." }
    ],
    resultados: [
      { valor: "3,5 mi", texto: "acessos únicos" }
    ],
    campanhas: [
      { titulo: "Mom Talk · Unimed", descricao: "2017", embeds: [
        { tipo: "facebook", url: "https://www.facebook.com/unimedbr/videos/1470507566346046/" }
      ] },
      { titulo: "Fight Like a Girl", descricao: "2016 · linha de roupas infantis", embeds: [
        { tipo: "facebook", url: "https://www.facebook.com/pacmae/photos/pb.100050652002097.-2207520000./675766692554856/" }
      ] }
    ],
    materiais: [
      { tipo: "imagem", src: "assets/img/prints/pacmae-header.webp", legenda: "Cabeçalho do Pac Mãe" },
      { tipo: "imagem", src: "assets/img/prints/universa-2017.webp", legenda: "Post repercutido pelo UOL Universa (2017)" },
      { tipo: "link", url: "textos.html#pac", titulo: "Textos que escrevi no Pac Mãe" }
    ]
  },
  {
    id: "teste-vo",
    titulo: "Teste da Violência Obstétrica",
    periodo: "2012",
    resumo: "Ação coletiva com 74 blogs e 1.966 partos avaliados.",
    onde: "Blogs Mamíferas e Cientista Que Virou Mãe",
    papel: "Coautora",
    comQuem: "Ligia Moreiras Sena e Ana Carolina Franzon",
    historia: [
      { titulo: "O que construímos", texto: "Em 2012, elaborei com Ligia Moreiras Sena e Ana Carolina Franzon o Teste da Violência Obstétrica. Ele foi publicado por 74 blogs e teve os resultados divulgados pela Agência Pública." }
    ],
    resultados: [
      { valor: "74", texto: "blogs publicaram o teste" },
      { valor: "1.966", texto: "partos avaliados" }
    ],
    campanhas: [],
    materiais: [
      { tipo: "link", url: "https://cientistaqueviroumae.com.br/2012/03/08/teste-da-violencia-obstetrica-dia-internacional-da-mulher-blogagem-coletiva/", titulo: "Blogagem coletiva do Teste (08/03/2012)" },
      { tipo: "link", url: "https://cientistaqueviroumae.com.br/2012/03/14/primeiros-resultados-da-acao-teste-da-violencia-obstetrica/", titulo: "Primeiros resultados da ação (14/03/2012)" }
    ]
  }
];
