# Pão Caseiro da Claudia — cardápio online

Site estático responsivo feito em HTML, CSS e JavaScript. O `vercel.json` configura a Vercel para publicar a raiz do repositório (onde está `index.html`) e evita que a pasta `public/`, usada para imagens, seja tratada como a raiz inteira do site. Para visualizar localmente, sirva a pasta do projeto com um servidor estático (por exemplo, `python3 -m http.server 8000`).

## Personalização rápida

- **WhatsApp comercial:** `app.js` está configurado com o número fornecido pela cliente (`+55 27 98895-3205`). Os pedidos abrem uma mensagem pronta com o produto e, para os bolos, com a cobertura e o preço escolhidos.
- **Produtos:** edite a lista `products` em `app.js`. O catálogo atual contém 7 pães, 6 bolos com opções de cobertura e 1 torta de pão de forma.
- **Fotos e marca:** imagens ficam em `public/images/`; a logo oficial está em `logo-claudia.jpg`.
- **Preços:** aparecem nos cartões conforme os valores fornecidos pela cliente; os bolos permitem escolher entre a versão sem cobertura e a versão especial.
