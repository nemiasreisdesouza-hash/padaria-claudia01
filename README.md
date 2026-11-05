# Pão Caseiro da Claudia — cardápio online

Site estático responsivo feito em HTML, CSS e JavaScript. O `vercel.json` configura a Vercel para publicar a raiz do repositório (onde está `index.html`) e evita que a pasta `public/`, usada para imagens, seja tratada como a raiz inteira do site. Para visualizar localmente, sirva a pasta do projeto com um servidor estático (por exemplo, `python3 -m http.server 8000`).

## Personalização rápida

- **WhatsApp comercial:** em `app.js`, preencha `WHATSAPP_NUMBER` com o código do país + DDD + número, somente dígitos (ex.: `5511999999999`). Sem isso, os botões abrem o WhatsApp com a mensagem pronta para a pessoa escolher o contato.
- **Produtos:** edite a lista `products` em `app.js`; cada item pode ter nome, categoria, descrição, imagem e selo.
- **Fotos e marca:** imagens ficam em `public/images/`. A logo enviada foi incluída em `logo-claudia.jpg`.
- **Preços:** não foram exibidos porque não foram informados; o cardápio convida a consultar valores e disponibilidade no WhatsApp.
