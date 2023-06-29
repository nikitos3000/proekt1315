const arrOfReviews = [
  'Некачественный ремонт, плесень, шумные соседи, проблемы с коммуникациями, неадекватный агент',
  'Недобросовестный продавец, некачественный товар, просроченные сроки доставки, плохая упаковка, некомплектность, несоответствие описанию, отсутствие гарантии, некачественное обслуживание, брак, некомпетентность.',
  'Продавец оказался мошенником, квартира оказалась в плохом состоянии, пришлось делать капитальный ремонт.',
  'Квартира находится в отличном состоянии, ремонт был сделан недавно. Все коммуникации работают исправно. Я очень доволен своей покупкой.',
  'Квартира находится в хорошем районе, рядом с метро и магазинами. Ремонт сделан качественно, все коммуникации работают исправно. Цена соответствует качеству. Я очень доволен своей покупкой!',
  'Я приобрел квартиру в Сочи и не жалею об этом. Здесь очень красиво, тепло и уютно. Все условия для жизни. Рекомендую.',
  'Я приобрела квартиру в Сочи. Очень довольна. Здесь тепло, красиво и уютно. Рекомендую всем.',
  'Я купила квартиру в Сочи! Очень довольна покупкой. Здесь тепло и красиво. Рекомендую всем!',
  'Я купил квартиру в Сочи, но она оказалась очень дорогой и неудобной. Кроме того, здесь очень жарко летом и холодно зимой. Не рекомендую покупать квартиру в Сочи, если вы не готовы к таким условиям.',
];

function generateRandomHeight() {
  const num = Math.random() * 100;
  return `${String(num)}px`;
}

function generateRandomWidth() {
  const num = Math.random() * 1400;
  return `${String(num)}px`;
}

// eslint-disable-next-line no-unused-vars
function generate() {
  if (document.getElementsByClassName('review').length >= 7) {
    document.getElementsByClassName('review')[0].remove();
  }

  const temp = document.querySelector('.eraseReview');
  const docTemple = document.createElement('span');
  docTemple.classList.add('itemREview', 'review');
  docTemple.style.top = generateRandomHeight();
  docTemple.style.left = generateRandomWidth();
  docTemple.textContent = arrOfReviews[Math.floor(Math.random() * arrOfReviews.length)];
  temp.append(docTemple);
  setTimeout(() => {
    docTemple.remove();
  }, 11000);
}
