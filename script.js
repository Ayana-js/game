
const bug = "img/card_bug.png";
const cardGameOver = "img/card_gameover.png";
const easy = document.getElementById('easy');
const middle = document.getElementById('middle');
const hard = document.getElementById('hard');
const clickButton = document.getElementById('start');
const game = document.getElementById('game');
const wrapper = document.getElementById('wrapper');
let arrayCard = [];
let level = 3;

function easyLevel() {
    level = 3;
    easy.classList.add('levels__rhomb');
    middle.classList.remove('levels__rhomb');
    hard.classList.remove('levels__rhomb');
  }
  
  function middleLevel() {
    level = 6;
    easy.classList.remove('levels__rhomb');
    middle.classList.add('levels__rhomb');
    hard.classList.remove('levels__rhomb');
  }
  
  function hardLevel() {
    level = 9;
    easy.classList.remove('levels__rhomb');
    middle.classList.remove('levels__rhomb');
    hard.classList.add('levels__rhomb');
  }


  function newGame() {
    wrapper.classList.add('hidden');
    game.classList.add('game');
    if (level < 10) {
       let wrapper = document.getElementById('wrapper');
       wrapper.classList.add('small-card');
       game.classList.add('width-small');
  }
    for (i = 0; i < level; i++){
       getBackCard();
    }
    let randomIndex = Math.floor(Math.random() * level);
    arrayCard[randomIndex].src = bug;
    arrayCard.forEach(element => createCard(element));
}

  // function createCard(element){
  //   let containerCard = document.createElement('div');
  //   containerCard.classList.add('container-card');
  //   containerCard.id = 'container';

  function createCard(element){
    let cardTemplate = document.createElement('div');
    cardTemplate.classList.add('card-template');
    cardTemplate.id = 'template';
  
    let card = document.createElement("div");
    card.classList.add('card-facedown');
    card.id = 'cardFacedown'

  
    let img = document.createElement('img');
    img.classList.add('card-facedown');
    img.src = "img/card.png.crdownload";
    img.id = 'card';
  
    let cardBack = document.createElement("div");
    cardBack.classList.add('card-bug');

    let image = document.createElement('img');
    image.classList.add('card-bug');
    image.src = "img/card_bug.png";
    image.id = 'cardBug';

    let bugCard = element;
   
    game.appendChild(cardTemplate);
    cardTemplate.appendChild(card);
    cardTemplate.appendChild(cardBack);
    card.appendChild(img);
    cardBack.appendChild(bugCard);
    cardBack.appendChild(image)
    card.onmouseover = function(event) {
    card.classList.add('active');
    }
  }



  function getBackCard() {
    let backCard = document.createElement("img"); 
    backCard.src = cardGameOver;
    backCard.id = 'backcard';
    arrayCard.push(backCard);
    return backCard
  }
  
  function click(card) {
    let click = card.parentNode.parentNode;
      if (click.id == 'template') {
        click.classList.add ('click-button');
        click.addEventListener('click', goToMenu);
    }
    function goToMenu() {
      location.reload();
    }
  }


  easyLevel();
  game.addEventListener('click',e => click (e.target));
  easy.addEventListener('click',easyLevel);
  middle.addEventListener('click',middleLevel);
  hard.addEventListener('click',hardLevel);
  start.addEventListener('click',newGame);