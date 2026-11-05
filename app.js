// Produtos e mensagens são fáceis de ajustar. Para direcionar ao número comercial,
// informe o telefone com código do país e DDD, somente números (ex.: 5511999999999).
const WHATSAPP_NUMBER = '';
const products = [
  { name: 'Pão caseiro da Claudia', category: 'paes', description: 'Casquinha dourada, miolo macio e aquele cheirinho que chama todo mundo pra mesa.', image: 'public/images/pao-artesanal.jpg', tag: 'O queridinho', icon: '✳' },
  { name: 'Pão de sementes', category: 'paes', description: 'Uma combinação especial de sementes, sabor marcante e muita textura.', image: 'public/images/pao-artesanal.jpg', tag: 'Especial da casa', icon: '❋' },
  { name: 'Pãezinhos fresquinhos', category: 'paes', description: 'Pequenos no tamanho, enormes no aconchego. Perfeitos para compartilhar.', image: 'public/images/hero-bakery.jpg', tag: 'Saiu do forno', icon: '✦' },
  { name: 'Sonho de creme', category: 'doces', description: 'Massa fofinha, recheio cremoso e uma nuvem de açúcar por cima.', image: 'public/images/doces.jpg', tag: 'Doce carinho', icon: '♡' },
  { name: 'Croissant dourado', category: 'doces', description: 'Levinho, amanteigado e cheio de camadas crocantes.', image: 'public/images/doces.jpg', tag: 'Feito à mão', icon: '✧' },
  { name: 'Enroladinho de canela', category: 'doces', description: 'Massa macia com canela perfumada. Um abraço quentinho em forma de doce.', image: 'public/images/doces.jpg', tag: 'Para adoçar', icon: '♡' },
  { name: 'Pão de queijo', category: 'salgados', description: 'Douradinho por fora, macio por dentro e com gostinho de quero mais.', image: 'public/images/salgados.jpg', tag: 'Clássico amado', icon: '✳' },
  { name: 'Coxinha de frango', category: 'salgados', description: 'Recheio caprichado e massa leve, feita para aquela pausa gostosa.', image: 'public/images/salgados.jpg', tag: 'Muito recheio', icon: '❋' },
  { name: 'Empadinha da casa', category: 'salgados', description: 'Massa delicada e dourada, com recheio preparado com carinho.', image: 'public/images/salgados.jpg', tag: 'Receita especial', icon: '✦' },
];
const grid = document.querySelector('#product-grid');
function whatsappLink(message) {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}` : `https://wa.me/?text=${text}`;
}
function renderProducts(category = 'todos') {
  const shown = category === 'todos' ? products : products.filter(product => product.category === category);
  grid.innerHTML = shown.map((product, index) => `
    <article class="product-card" style="--card-index:${index}">
      <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-tag">${product.tag}</span><span class="product-number">0${products.indexOf(product) + 1}</span></div>
      <div class="product-info"><div class="product-category">${product.category === 'paes' ? 'PÃES DA CASA' : product.category.toUpperCase()}</div><h3>${product.name} <span>${product.icon}</span></h3><p>${product.description}</p><a class="product-order" href="${whatsappLink(`Olá, Claudia! Gostaria de saber sobre ${product.name}.`)}" target="_blank" rel="noopener">Quero esse <span>↗</span></a></div>
    </article>`).join('');
}
renderProducts();
document.querySelectorAll('.category-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.category-tab').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active'); tab.setAttribute('aria-selected', 'true'); renderProducts(tab.dataset.category);
}));
document.querySelectorAll('.whatsapp-cta').forEach(link => link.href = whatsappLink('Olá, Claudia! Vim pelo cardápio online e gostaria de fazer um pedido.'));
document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); document.querySelector('.nav-links').classList.toggle('open', !open); });
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); document.querySelector('.nav-links').classList.remove('open'); }));
