/*
  DADOS GERAIS DO SITE
  ---------------------------------------------------------------
  Edite só o que está entre aspas. Cada item de lista termina com vírgula.
  Linhas que começam com // são comentários e não aparecem no site.
*/
window.SITE = {
  nome: "Nanda Café",
  nomeCompleto: "Fernanda Andrade Café",
  rotulo: "Gerente de projetos · Comunicação digital · Maceió, AL",
  titulo: "Oi, eu sou a Nanda Café.",
  subtitulo: "Estou há 15 anos construindo coletivamente projetos de comunicação e tecnologia.",

  contato: {
    email: "nandacafe@gmail.com",
    linkedin: "https://www.linkedin.com/in/fernandacafe",
    github: "https://github.com/nanda-cafe",
    curriculo: "curriculo/Fernanda-Cafe-Curriculo-Geral.pdf"
  },

  numeros: [
    { valor: "10", texto: "pessoas no time que lidero hoje" },
    { valor: "167", texto: "perfis parceiros nas campanhas da Huawei" },
    { valor: "60+", texto: "unidades do Senac publicando com autonomia" },
    { valor: "150+", texto: "perfis de redes coordenados no Senac" },
    { valor: "74", texto: "blogs numa ação coletiva por partos respeitosos" },
    { valor: "3,5 mi", texto: "acessos únicos num portal feito por quatro mães" }
  ],

  // Cada parágrafo da biografia é um item da lista.
  bio: [
    "Sou jornalista formada pela Universidade Federal de Alagoas e trabalho há 15 anos na ponte entre comunicação e tecnologia. Comecei em 2011, editando blogs coletivos que chegaram a 3,5 milhões de acessos únicos, e aprendi comunicação pública na Secretaria do Meio Ambiente e dos Recursos Hídricos de Alagoas, onde criei os primeiros perfis do órgão nas redes.",
    "No Senac São Paulo, de 2016 a 2022, passei de editora de conteúdo do portal a responsável pelas redes da sede e por mais de 150 perfis das unidades. Fui Product Owner do sistema que deu a mais de 60 unidades autonomia para publicar seus eventos no portal. Também liderei a integração que levou as fichas de curso para uma linguagem simples, com 22% a mais de vendas no canal digital, e participei da migração de CMS do portal.",
    "Desde 2022 estou na BYOUNG. Coordenei a estratégia trilíngue da CleverTap para o Brasil e a América Latina e hoje sou Gerente de Estratégia Digital da Huawei Mobile Brasil, com uma equipe de 10 pessoas. Em três anos, as campanhas de influência passaram de 78 para 230 parcerias por ano, abrimos o TikTok da marca do zero até 100 mil seguidores e criamos um clube no Strava com 30 mil membros em seis meses. Em 2026, esse trabalho recebeu o prêmio individual da Huawei na América Latina.",
    "Meu jeito de gerir é coletivo: processo claro, papéis definidos e autonomia para que cada pessoa cresça com liberdade e responsabilidade. É o que me permite escalar projetos sem perder qualidade."
  ],

  // Grandes marcos da home. A trajetória completa fica em dados/trajetoria.js
  marcos: [
    { ano: "2006 – 2011", texto: "Jornalismo na UFAL" },
    { ano: "2011 – 2013", texto: "Editora do Mamíferas" },
    { ano: "2012 – 2014", texto: "Assessora de Comunicação · Governo de Alagoas (SEMARH)" },
    { ano: "2013 – 2018", texto: "Cofundadora e editora do Pac Mãe" },
    { ano: "2016 – 2022", texto: "Editora de Conteúdo · Senac São Paulo" },
    { ano: "2022 – hoje", texto: "BYOUNG · Coordenadora de Projeto, depois Gerente de Estratégia Digital" },
    { ano: "2026", texto: "Prêmio Outstanding Individual, Huawei LatAm" }
  ],

  // cor: rosa, roxo, verde, amarelo ou azul
  competencias: [
    { grupo: "Gestão", cor: "rosa", itens: ["Escopo e cronograma", "Orçamento", "Riscos", "Stakeholders", "Fornecedores e contratos", "Kanban", "OKRs"] },
    { grupo: "Tecnologia", cor: "roxo", itens: ["HTML", "CSS", "JavaScript", "Git e GitHub Actions", "CMS", "Product Owner"] },
    { grupo: "Comunicação", cor: "verde", itens: ["Planejamento editorial", "Reportagem", "Copy e roteiro", "UX writing", "Linguagem simples", "Influência"] },
    { grupo: "Ferramentas", cor: "amarelo", itens: ["Excel", "Teams", "Google Workspace", "Slack", "Notion", "Trello", "Asana", "Meta Business Suite", "TikTok Ads"] },
    { grupo: "IA generativa", cor: "azul", itens: ["Pesquisa", "Análise de dados", "Documentação", "Prototipação e código"] }
  ],

  formacao: [
    "Bacharelado em Comunicação Social – Jornalismo · UFAL · 2006 – 2011",
    "Universitat d’Estiu de Gandía · Universitat de València · 2008",
    // CONFIRMAR: o currículo diz concluída em 2019, o Lattes diz interrompida.
    "Especialização em Ciências do Consumo e Estratégias Aplicadas · Centro Universitário Senac",
    "Mestrado em Comunicação · UNIP · bolsista PROSUP/CAPES · interrompido"
  ],

  idiomas: "Inglês fluente (IELTS 8,0) · Espanhol intermediário · Mandarim básico (HSK 1)"
};
