const WHATSAPP_NUMBER = '5527988953205';
const categoryNames = {
  paes: 'PÃES CASEIROS',
  bolos: 'BOLOS CASEIROS',
  tortas: 'TORTAS CASEIRAS',
  salgados: 'SALGADOS DA CASA',
};

const products = [
  { name: 'Pão tradicional', category: 'paes', description: 'Pão caseiro de massa macia, casquinha dourada e sabor de casa.', image: 'public/images/pao-tradicional.jpg', tag: 'Tradicional', icon: '✳', price: 'R$ 20,00' },
  { name: 'Pão de batata', category: 'paes', description: 'Massa fofinha com batata, assada até ficar dourada por fora.', image: 'public/images/pao-batata.jpg', tag: 'Macio e fofinho', icon: '❋', price: 'R$ 25,00' },
  { name: 'Pão de farofa', category: 'paes', description: 'Pão caseiro com cobertura crocante de farofa douradinha.', image: 'public/images/pao-farofa.jpg', tag: 'Especial da casa', icon: '✦', price: 'R$ 25,00' },
  { name: 'Pão de cenoura', category: 'paes', description: 'Pão macio preparado com cenoura, de miolo dourado e delicado.', image: 'public/images/pao-cenoura.jpg', tag: 'Feito em casa', icon: '✳', price: 'R$ 25,00' },
  { name: 'Pão recheado de calabresa', category: 'paes', description: 'Recheio caprichado de calabresa, queijo e Catupiry cremoso.', image: 'public/images/pao-calabresa-queijo-catupiry.jpg', tag: 'Bem recheado', icon: '❋', price: 'R$ 40,00' },
  { name: 'Pão recheado de presunto e queijo', category: 'paes', description: 'Presunto, queijo derretido e Catupiry em uma massa douradinha.', image: 'public/images/pao-presunto-queijo-cliente.jpg', tag: 'Bem recheado', icon: '✦', price: 'R$ 40,00' },
  { name: 'Pão de alho-poró', category: 'paes', description: 'Alho-poró com queijo e Catupiry, envoltos em pão macio e dourado.', image: 'public/images/pao-recheado-alho-poro-cliente.jpg', tag: 'Sabor especial', icon: '✳', price: 'R$ 45,00' },
  {
    name: 'Bolo caseiro de cenoura', category: 'bolos', description: 'Bolo fofinho de cenoura, com opção de cobertura de chocolate 100% cacau.', image: 'public/images/bolo-cenoura-cacau.jpg', tag: 'Clássico da casa', icon: '♡',
    options: [
      { name: 'Sem cobertura', price: 'R$ 25,00', detail: 'Bolo de cenoura sem cobertura.' },
      { name: 'Chocolate 100% cacau', price: 'R$ 30,00', detail: 'Cobertura de chocolate 100% cacau.' },
    ],
  },
  {
    name: 'Bolo caseiro de chocolate', category: 'bolos', description: 'Massa de chocolate macia, com opção de cobertura de chocolate.', image: 'public/images/bolo-chocolate-cliente.jpg', tag: 'Chocolatudo', icon: '♡',
    options: [
      { name: 'Sem cobertura', price: 'R$ 25,00', detail: 'Bolo de chocolate sem cobertura.' },
      { name: 'Com cobertura de chocolate', price: 'R$ 30,00', detail: 'Cobertura cremosa de chocolate.' },
    ],
  },
  {
    name: 'Bolo caseiro de laranja', category: 'bolos', description: 'Bolo cítrico e macio, com opção de mousse de laranja.', image: 'public/images/bolo-laranja-cliente.jpg', tag: 'Cítrico e leve', icon: '✿',
    options: [
      { name: 'Sem cobertura', price: 'R$ 25,00', detail: 'Bolo de laranja sem cobertura.' },
      { name: 'Com mousse de laranja', price: 'R$ 30,00', detail: 'Cobertura de mousse de laranja.' },
    ],
  },
  {
    name: 'Bolo caseiro de limão', category: 'bolos', description: 'Massa leve de limão, com opção de mousse feita com a fruta.', image: 'public/images/bolo-limao-cliente.jpg', tag: 'Receita cítrica', icon: '✿',
    options: [
      { name: 'Sem cobertura', price: 'R$ 25,00', detail: 'Bolo de limão sem cobertura.' },
      { name: 'Com mousse de limão', price: 'R$ 30,00', detail: 'Cobertura de mousse da fruta.' },
    ],
  },
  {
    name: 'Bolo de chocolate com café', category: 'bolos', description: 'Bolo caseiro de chocolate com café. A versão sem cobertura sai por R$ 25,00.', image: 'public/images/bolo-chocolate.jpg', tag: 'Chocolate & café', icon: '☕', optionsLabel: 'Escolha a versão',
    options: [
      { name: 'Sem cobertura', price: 'R$ 25,00', detail: 'Bolo caseiro de chocolate com café, sem cobertura.' },
      { name: 'Com café', price: 'R$ 35,00', detail: 'Versão especial de chocolate com café.' },
    ],
  },
  {
    name: 'Bolo formigueiro', category: 'bolos', description: 'Bolo fofinho com granulado de chocolate, com opção de cobertura.', image: 'public/images/bolo-chocolate.jpg', tag: 'Formigueiro', icon: '✦',
    options: [
      { name: 'Sem cobertura', price: 'R$ 25,00', detail: 'Bolo formigueiro sem cobertura.' },
      { name: 'Com cobertura de chocolate', price: 'R$ 30,00', detail: 'Cobertura de chocolate sobre o bolo formigueiro.' },
    ],
  },
  { name: 'Torta de pão de forma com frango', category: 'tortas', description: 'Torta caseira de pão de forma com recheio de frango, coberta com batata palha.', image: 'public/images/torta-pao-forma-cliente.jpg', tag: 'Receita especial', icon: '✿', price: 'R$ 55,00' },
  {
    name: 'Cento de salgados de festa', category: 'salgados', description: 'Coxinha de frango, pastel de queijo e presunto, bolinha de queijo, croquete de milho, kibe, enroladinho de salsicha e coxinha de calabresa com queijo.', image: 'public/images/cento-salgadinhos-cliente.jpg', tag: 'Para compartilhar', icon: '✦', optionsLabel: 'Escolha o preparo', priceSummary: 'R$ 60,00 a R$ 70,00',
    options: [
      { name: 'Cento frito', price: 'R$ 70,00', detail: 'Cento de salgados entregue frito.' },
      { name: 'Cento sem fritar', price: 'R$ 60,00', detail: 'Cento de salgados entregue sem fritar.' },
    ],
  },
  { name: 'Empadinha de frango', category: 'salgados', description: 'Empadinha de frango, com massa delicada e douradinha.', image: 'public/images/salgados.jpg', tag: 'Feita em casa', icon: '♡', price: 'R$ 4,99' },
  { name: 'Quiche média', category: 'salgados', description: 'Quiche média caseira, assada até ficar douradinha.', image: 'public/images/quiche-media-cliente.jpg', tag: 'Receita especial', icon: '✿', price: 'R$ 30,00' },
];

const grid = document.querySelector('#product-grid');
function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function renderProducts(category = 'todos') {
  const shown = category === 'todos' ? products : products.filter(product => product.category === category);
  grid.innerHTML = shown.map((product, index) => {
    const productIndex = products.indexOf(product);
    const hasOptions = Array.isArray(product.options);
    const optionsMarkup = hasOptions ? `
      <div class="product-customization">
        <label for="product-option-${productIndex}">${product.optionsLabel || 'Escolha a cobertura'}</label>
        <select class="product-option" id="product-option-${productIndex}" data-product-index="${productIndex}" aria-describedby="product-option-detail-${productIndex}">
          <option value="">Selecione uma opção</option>
          ${product.options.map((option, optionIndex) => `<option value="${optionIndex}">${option.name} — ${option.price}</option>`).join('')}
        </select>
        <p class="option-detail" id="product-option-detail-${productIndex}" aria-live="polite">Escolha uma versão para ver o valor.</p>
      </div>` : '';
    const priceMarkup = hasOptions
      ? `<div class="product-price"><strong>${product.priceSummary || 'A partir de R$ 25,00'}</strong>${product.priceSummary ? '' : '<span>sem cobertura</span>'}</div>`
      : `<div class="product-price"><strong>${product.price}</strong></div>`;
    const orderMarkup = hasOptions
      ? '<a class="product-order product-order-disabled" href="#" aria-disabled="true" tabindex="-1">Escolha uma versão <span>↗</span></a>'
      : `<a class="product-order" href="${whatsappLink(`Olá, Claudia! Gostaria de encomendar ${product.name} por ${product.price}.`)}" target="_blank" rel="noopener">Encomendar <span>↗</span></a>`;
    return `
      <article class="product-card${hasOptions ? ' product-card--options' : ''}" style="--card-index:${index}">
        <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-tag">${product.tag}</span><span class="product-number">${String(productIndex + 1).padStart(2, '0')}</span></div>
        <div class="product-info"><div class="product-category">${categoryNames[product.category]}</div><h3>${product.name} <span>${product.icon}</span></h3><p>${product.description}</p>${priceMarkup}${optionsMarkup}${orderMarkup}</div>
      </article>`;
  }).join('');

  grid.querySelectorAll('.product-option').forEach(select => {
    const product = products[Number(select.dataset.productIndex)];
    const card = select.closest('.product-card');
    const detail = card.querySelector('.option-detail');
    const orderLink = card.querySelector('.product-order');
    select.addEventListener('change', () => {
      const option = select.value === '' ? null : product.options[Number(select.value)];
      if (!option) {
        detail.textContent = 'Escolha uma versão para ver o valor.';
        orderLink.href = '#';
        orderLink.classList.add('product-order-disabled');
        orderLink.setAttribute('aria-disabled', 'true');
        orderLink.tabIndex = -1;
        orderLink.innerHTML = 'Escolha uma versão <span>↗</span>';
        return;
      }
      detail.textContent = `${option.detail} Valor: ${option.price}.`;
      orderLink.href = whatsappLink(`Olá, Claudia! Gostaria de encomendar ${product.name} — ${option.name}, ${option.price}.`);
      orderLink.classList.remove('product-order-disabled');
      orderLink.removeAttribute('aria-disabled');
      orderLink.removeAttribute('tabindex');
      orderLink.innerHTML = 'Encomendar <span>↗</span>';
    });
  });
  grid.querySelectorAll('.product-order-disabled').forEach(link => link.addEventListener('click', event => {
    if (link.getAttribute('aria-disabled') === 'true') event.preventDefault();
  }));
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
