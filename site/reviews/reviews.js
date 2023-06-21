const temple = '<span class="review">валера</span>';
/* <div class="itemReview"></div></div> */

const arrOfReviews = ['Некачественный ремонт, плесень, шумные соседи, проблемы с коммуникациями, неадекватный агент',
                         'Недобросовестный продавец, некачественный товар, просроченные сроки доставки, плохая упаковка, некомплектность, несоответствие описанию, отсутствие гарантии, некачественное обслуживание, брак, некомпетентность.',
                        'Продавец оказался мошенником, квартира оказалась в плохом состоянии, пришлось делать капитальный ремонт.', 
                    'Квартира находится в отличном состоянии, ремонт был сделан недавно. Все коммуникации работают исправно. Я очень доволен своей покупкой.', 
                'Квартира находится в хорошем районе, рядом с метро и магазинами. Ремонт сделан качественно, все коммуникации работают исправно. Цена соответствует качеству. Я очень доволен своей покупкой!', 
            'Почему у программистов всегда плохое настроение? Потому что они знают, что в любой момент могут сделать что-то неправильно.']

function generate() {
    if (document.getElementsByClassName('review').length >= 6){
        document.getElementsByClassName('review')[0].remove();
    }
    const temp = document.querySelector('.eraseReview'); 
    var docTemple = document.createElement('span');
    // alert(JSON.stringify(docTemple));
    docTemple.classList.add('itemREview', 'review');
    docTemple.style.top = generateRandomHeigth();
    docTemple.style.left = generateRandomWigth();
    docTemple.textContent = arrOfReviews[Math.floor(Math.random()*arrOfReviews.length)];
    temp.append(docTemple);
    setTimeout(() => {
        docTemple.remove();
    }, 12000);
    // docTemple.addEventListener('animmationend', (docTemple) => {console.log(docTemple)});
}
const generateRandomHeigth = () => {
    const num = Math.random()*100;
    return String(num) + 'px' 
}
const generateRandomWigth = () => {
    const num = Math.random()*1400;
    return String(num) + 'px' 
}