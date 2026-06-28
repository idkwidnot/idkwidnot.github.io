# IDKWID

![IDKWID logo](assets/logo-512.png)

Landing page oficial da **IDKWID**, um estudio indie focado em desenvolvimento de jogos, projetos criativos e publicacao para Google Play.

O site foi construido como uma pagina estatica para deploy simples no **GitHub Pages**, com suporte a:

- dominio customizado `idkwid.com.br`
- SEO basico para indexacao no Google
- Open Graph e Twitter Cards
- sitemap e robots
- alternancia de idioma `EN / PT-BR`

## Sobre o site

A pagina segue a identidade visual da marca IDKWID:

- visual indie, cartoon e grunge
- hero section com banner em tela cheia
- foco em estudios de games e criacao autoral
- layout pensado para desktop e mobile

## Estrutura do projeto

- `index.html`: estrutura principal da landing page
- `styles.css`: identidade visual, responsividade e animacoes
- `script.js`: micro interacoes e troca de idioma
- `assets/`: imagens da marca e artes do hero
- `CNAME`: dominio customizado do GitHub Pages
- `robots.txt`: diretrizes para indexacao
- `sitemap.xml`: sitemap principal do site
- `site.webmanifest`: configuracao basica do site como web app

## Deploy no GitHub Pages

1. Suba este repositorio para o GitHub.
2. Abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch principal e a pasta `/ (root)`.
5. Confirme que o arquivo `CNAME` foi mantido no repositorio.

## Dominio customizado

O projeto esta preparado para usar:

- `https://idkwid.com.br`
- `https://www.idkwid.com.br`

Configuracao esperada para GitHub Pages:

- `A @ -> 185.199.108.153`
- `A @ -> 185.199.109.153`
- `A @ -> 185.199.110.153`
- `A @ -> 185.199.111.153`
- `CNAME www -> idkwidnot.github.io`

## Google Search Console

No arquivo `index.html` ja existe a meta tag:

```html
<meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN">
```

Substitua esse valor pelo token real do Google Search Console se optar por verificacao via meta tag.

O sitemap do projeto esta disponivel em:

```txt
https://idkwid.com.br/sitemap.xml
```

## Ajustes futuros

- trocar o token de verificacao do Google
- atualizar links finais dos jogos quando forem publicados
- revisar descricoes SEO conforme novos jogos e paginas forem adicionados
- atualizar o e-mail de contato se necessario
