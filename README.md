# IDKWID

Landing page estatica pronta para publicar no GitHub Pages com dominio customizado `idkwid.com.br`.

## Arquivos principais

- `index.html`: estrutura da landing page
- `styles.css`: identidade visual e responsividade
- `script.js`: micro animacoes leves
- `CNAME`: dominio customizado do GitHub Pages
- `robots.txt` e `sitemap.xml`: base de SEO

## Publicar no GitHub Pages

1. Suba este repositorio para o GitHub.
2. No repositorio, abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch principal e a pasta `/ (root)`.
5. Aguarde o deploy e confirme que o `CNAME` foi mantido.

## Configurar DNS no Registro.br

Para o dominio raiz `idkwid.com.br`, crie estes registros A:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Para `www.idkwid.com.br`, crie um CNAME apontando para:

- `SEU_USUARIO.github.io`

Se quiser usar apenas o dominio raiz, voce pode redirecionar `www` para `idkwid.com.br` no proprio Registro.br.

## Google Search Console

No arquivo `index.html` ja existe a meta tag:

```html
<meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN">
```

Substitua o valor pelo token real fornecido pelo Google Search Console.

Se o Google pedir verificacao por arquivo, troque o conteudo de `google-site-verification.txt` pelo arquivo exato gerado pela plataforma.

## Antes de publicar

- Troque o link do Google Play quando a pagina do app estiver pronta.
- Atualize `idkwid.not@gmail.com` se quiser usar outro email.
- Se adicionar paginas novas, atualize `sitemap.xml`.
