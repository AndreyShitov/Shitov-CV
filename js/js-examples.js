// TOP BUTTON

window.onload  = () => {
  document.getElementById('topButton');
function scrollCondition() {
  if(window.scrollY < 300) {
    console.log('scroll');
    document.getElementById('topButton').classList.remove('visible');
  };
  if(window.scrollY > 300) {
    document.getElementById('topButton').classList.add('visible');
  };
};
window.addEventListener('scroll', scrollCondition);

function scrollToTop() {
  window.scrollTo(0,0);
};

topButton.addEventListener('click', scrollToTop);
}

// TOP BUTTON END





// GAME1 START
const gameButton = document.querySelector('.button');
function handleString() {
  const inputValue = gameInput.value;
  console.log(inputValue);
  const newValue = inputValue.split("").reverse().join("");
  alert(newValue);
}
gameButton.addEventListener('click', handleString);
// GAME1 END


// GAME2 START
function handleStart() {
  startButton.classList.toggle('hidden');
  game2Container.classList.toggle('hidden');
  buttonUp.classList.remove('inactive');
  buttonDown.classList.remove('inactive');
  buttonLeft.classList.remove('inactive');
  buttonRight.classList.remove('inactive');

}

startButton.addEventListener('click', handleStart);

// function getInitPositionX(element) {
//   let initPositionX = element.getBoundingClientRect().left
//   return initPositionX   
// }

// function getInitPositionY(element) {
//   let initPositionY = element.getBoundingClientRect().top
//   return initPositionY   
// }

// GAME2 constants

// Determining maxfieldwidth
let windowInnerWidth = window.innerWidth;
let windowInnerHeight = window.innerHeight;
var maxFieldWidth = windowInnerWidth * 0.8;
var maxFieldHeight = windowInnerHeight * 0.5;
field.style.width = maxFieldWidth + 'px';
field.style.height = maxFieldHeight + 'px';
const fieldWidth = +(window.getComputedStyle(field, null).getPropertyValue('width').slice(0, -2));



function getRandomPosition(max) {
  x = Math.trunc((Math.floor(Math.random() * max))/ 100) * 100;
  console.log(x)
  return x;
}

function randomlyPositionElements() {
  const currentWellYPosition = getRandomPosition(maxFieldHeight - 100);
  well.style.top = (currentWellYPosition) + 'px';
  const currentWellXPosition = getRandomPosition(maxFieldWidth -100);
  well.style.left = (currentWellXPosition) + 'px';
  const currentBallYPosition = getRandomPosition(maxFieldHeight - 100);
  ball.style.top = (currentBallYPosition) + 'px';
  const currentBallXPosition = getRandomPosition(maxFieldWidth -100);
  ball.style.left = (currentBallXPosition) + 'px';
}

randomlyPositionElements();

function check() {
  const ballCurrentXPosition = ball.style.left;
  const ballCurrentYPosition = ball.style.top;
  const wellCurrentXPosition = well.style.left;
  const wellCurrentYPosition = well.style.top;
  if((ballCurrentXPosition === wellCurrentXPosition) && (ballCurrentYPosition === wellCurrentYPosition)) {
  well.classList.toggle('won');
  backgroundInactive.classList.toggle('hidden');
  }
}



function resumeGame() {
  backgroundInactive.classList.toggle('hidden');
  randomlyPositionElements();
  well.classList.toggle('won');
}

function endGame() {
  backgroundInactive.classList.add('hidden');
  randomlyPositionElements();
  well.classList.toggle('won');
  handleStart();
}

// GAME2 controls

function handleLeft() {
  buttonRight.classList.remove('disabled');
  let positionX = window.getComputedStyle(ball, null).getPropertyValue('left');
  let newPositionX =  ((+positionX.slice(0, -2) - 50)) + 'px';
  ball.style.left = newPositionX;
  // let fieldWidth = +(window.getComputedStyle(field, null).getPropertyValue('width').slice(0, -2));
  if(+ball.style.left.slice(0, -2) < 0) {
    ball.style.left = "0px";
    buttonLeft.classList.add('disabled')
  }
  check();
}

function handleRight() {
  buttonLeft.classList.remove('disabled');
  let positionX = window.getComputedStyle(ball, null).getPropertyValue('left');
  let newPositionX =  ((+positionX.slice(0, -2) + 50)) + 'px';
  ball.style.left = newPositionX;
  if(+ball.style.left.slice(0, -2) >= fieldWidth) {
    ball.style.left = (Math.trunc((fieldWidth / 100)) * 100) + "px";
    buttonRight.classList.add('disabled');
  }
  check();
}

function handleDown() {
  buttonUp.classList.remove('disabled');
  let positionY = window.getComputedStyle(ball, null).getPropertyValue('top');
  let newPositionY =  ((+positionY.slice(0, -2) + 50)) + 'px';
  ball.style.top = newPositionY;
  let fieldHeight = +(window.getComputedStyle(field, null).getPropertyValue('height').slice(0, -2));
  if((+newPositionY.slice(0, -2)) > (fieldHeight)) {
    ball.style.top = (Math.trunc((fieldHeight / 100)) * 100 + 50) + "px";
    buttonDown.classList.add('disabled');
  }
  check();
}

function handleUp() {
  buttonDown.classList.remove('disabled');
  let positionY = window.getComputedStyle(ball, null).getPropertyValue('top');
  let newPositionY =  ((+positionY.slice(0, -2) - 50)) + 'px';
  ball.style.top = newPositionY;
  let fieldHeight = +(window.getComputedStyle(field, null).getPropertyValue('height').slice(0, -2));
  console.log((+newPositionY.slice(0, -2)));
  console.log("field height: " + fieldHeight);
  if(+newPositionY.slice(0, -2) < 0 ) {
    ball.style.top = "0px";
    buttonUp.classList.add('disabled');
  }
  check();
}

buttonLeft.addEventListener('click', handleLeft);
buttonRight.addEventListener('click', handleRight);
buttonDown.addEventListener('click', handleDown);
buttonUp.addEventListener('click', handleUp);
resumeButton.addEventListener("click", resumeGame);
endButton.addEventListener("click", endGame);

// controls END

// SLIDER


const sliderHeader = document.getElementsByClassName('slider__header');

function showHideSlider() {
if (slider.classList.contains('hidden') === true) {
    sliderHeader[0].classList.toggle('hidden');
    showButton.textContent = 'Hide slider';
    slider.classList.toggle('hidden');
  } else {
    sliderHeader[0].classList.toggle('hidden');
    showButton.textContent = 'Show slider';
    slider.classList.toggle('hidden');
  } 
}



showButton.addEventListener('click', showHideSlider)






const images = document.querySelectorAll('.slider__image');
const controls = document.querySelectorAll('.controls');
let imageIndex = 0;


function show(index) {
  images[imageIndex].classList.remove('img-active');
  images[index].classList.add('img-active');
  imageIndex = index;
}

controls.forEach((e) => { 
  e.addEventListener('click', () => {
    if (event.target.classList.contains('prev')) {
      let index = imageIndex - 1;

      if(index < 0) {
        index = images.length - 1;

      }
      show(index);
    } else if (event.target.classList.contains('next')) {
      let index = imageIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      show(index);
    }
  })
})
show(imageIndex);
console.log(imageIndex)


// SLIDER END



// MOBILE RESPONSIVE
const hamburger = document.querySelector('.hamburger');


function showNavigation() {
  const mobileBackground = document.querySelector('.mobile-background');
  const headerNavigation = document.querySelector('.header__navigation');
  mobileBackground.style.display = "block";
  headerNavigation.style.display = "flex";
}



hamburger.addEventListener('click', showNavigation);


// MOBILE RESPONSIVE END