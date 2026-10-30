# nanda-cafe.github.io

Site pessoal de Nanda Café, publicado pelo GitHub Pages em https://nanda-cafe.github.io

## Como editar

O conteúdo fica todo na pasta `dados/`. Para mudar um texto, abra o arquivo no GitHub, clique no lápis (Edit), altere o que está entre aspas e clique em **Commit changes**. O site se atualiza sozinho em 1 ou 2 minutos.

| Arquivo | O que tem |
|---|---|
| `dados/site.js` | Título, biografia, números, grandes marcos, competências, formação, idiomas e contato |
| `dados/projetos.js` | Os projetos de "O que ajudei a construir", com campanhas e posts incorporados |
| `dados/trajetoria.js` | A trajetória completa (trabalhos, estudos, cursos, palcos, prêmios) |
| `dados/imprensa.js` | Matérias na imprensa |
| `dados/textos.js` | Textos publicados, por publicação |

Cuidados ao editar:
- Cada item de uma lista termina com vírgula, menos o último.
- Se o texto tiver aspas, use aspas curvas (“ ”) em vez de retas.
- Linhas que começam com `//` são comentários e não aparecem no site.
- Se uma página ficar em branco depois de uma edição, quase sempre é uma vírgula ou aspa faltando no arquivo que você mexeu.

## Imagens

- Fotos de palcos e prêmios: suba em `assets/img/eventos/` e preencha o campo `foto` em `dados/trajetoria.js`.
- Prints: `assets/img/prints/`.
- Currículo: substitua `curriculo/Fernanda-Cafe-Curriculo-Geral.pdf` mantendo o mesmo nome.

## Ver no computador antes de publicar

Os posts incorporados só carregam com o site num endereço http. Na pasta do site, rode `python3 -m http.server 8000` e abra http://localhost:8000
