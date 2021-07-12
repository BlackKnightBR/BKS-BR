const card = document.querySelector('.cardMiddle2');
const card1 = document.querySelector('.cardMiddle21');
const card2 = document.querySelector('.cardMiddle22');
const dropdown = document.querySelector('.logo-top img');
const menu = document.querySelector('.menu-top');
//Itens 1
const title = document.querySelector('.titleMiddle2');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');

//Itens 2
const title1 = document.querySelector('.titleMiddle21');
const sneaker1 = document.querySelector('.sneaker1 img');
const purchase1 = document.querySelector('.purchase button');

//Itens 3
const title2 = document.querySelector('.titleMiddle22');
const sneaker2 = document.querySelector('.sneaker2 img');
const purchase2 = document.querySelector('.purchase button');

//menu bool
var visivel = false;

//Moving Animation Event
card.addEventListener('mousemove', (e) => {
    //Recuperando coordenadas do mouse na tela
    //console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animation In
card.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Pop Out
    title.style.transform = 'translateZ(50px)';
    sneaker.style.transform = 'translateZ(50px)';
    purchase.style.transform = 'translateZ(5px)';
});

//Animate Out
card.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform =  `rotateY(0deg) rotateX(0deg)`;
    //Pop back
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});

//Card 1

card1.addEventListener('mousemove', (e) => {
    //Recuperando coordenadas do mouse na tela
    //console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animation In
card1.addEventListener('mouseenter', (e) => {
    card1.style.transition = 'none';
    //Pop Out
    title1.style.transform = 'translateZ(50px)';
    sneaker1.style.transform = 'translateZ(50px)';
    purchase1.style.transform = 'translateZ(5px)';
});

//Animate Out
card1.addEventListener('mouseleave', (e) => {
    card1.style.transition = 'all 0.5s ease';
    card1.style.transform =  `rotateY(0deg) rotateX(0deg)`;
    //Pop back
    title1.style.transform = 'translateZ(0px)';
    sneaker1.style.transform = 'translateZ(0px)';
    purchase1.style.transform = 'translateZ(0px)';
});

//Card 2

card2.addEventListener('mousemove', (e) => {
    //Recuperando coordenadas do mouse na tela
    //console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animation In
card2.addEventListener('mouseenter', (e) => {
    card2.style.transition = 'none';
    //Pop Out
    title2.style.transform = 'translateZ(50px)';
    sneaker2.style.transform = 'translateZ(50px)';
    purchase2.style.transform = 'translateZ(5px)';
});

//Animate Out
card2.addEventListener('mouseleave', (e) => {
    card2.style.transition = 'all 0.5s ease';
    card2.style.transform =  `rotateY(0deg) rotateX(0deg)`;
    //Pop back
    title2.style.transform = 'translateZ(0px)';
    sneaker2.style.transform = 'translateZ(0px)';
    purchase2.style.transform = 'translateZ(0px)';
});

dropdown.addEventListener('click', (e) => {
    if (visivel) {
        menu.style.visibility = 'hidden';
        visivel = false;
    } else {
        menu.style.visibility = 'visible';
        visivel = true;
    }
});
