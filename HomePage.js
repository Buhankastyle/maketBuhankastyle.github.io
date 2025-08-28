const menu = document.querySelector("#mobile__menu");
const spisok = document.querySelector(".menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  spisok.classList.toggle("active");
});



// Анимация элементов

let lastScrollTop = 0;
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        
        for (let i = 0; i<animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            const element = animItem.getBoundingClientRect();
            const isInViewport = element.top >  window.innerHeight;
        
            let animItemPoint = window.innerHeight - animItemHight / animStart;
            
            if (animItemHight > window.innerHeight) {
                animItemPoint =  window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <  (animItemOffset + animItemHight)) {
                animItem.classList.add('animated');
            } 

            if (isInViewport) {
                animItem.classList.remove('animated')
            }
            // else {
            //     if (!animItem.classList.contains('anim-no-hide')) {
            //         animItem.classList.remove('animated');
            //     }
            // }
        }
    }
   
    function offset (el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

// Если анимация вверху, то нужно сразу объявить о ней. чтобы она сразу сработала без скролла.
animOnScroll();


// prev and next button

const button = document.querySelectorAll('.btn')


button.forEach(function(element) {
    element.addEventListener('click', activeButton)
})

function activeButton() {
    button.forEach(function(element) {
        element.classList.remove('active');
    })
    this.classList.add('active')
}


// slider

const slider = document.querySelector('.slider-container');
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slider.offsetWidth; // Получаем ширину слайдера

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * slideWidth;
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  goToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  goToSlide(currentIndex);
});

// Инициализация: показать первый слайд
showSlide(currentIndex);



// slider dot

let currentSlide = currentIndex

function goToSlide(n) {
  sliderContainer.style.transform = `translateX(-${n * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === n);
  });
  currentSlide = n;
  }


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
    button.forEach((btn) => btn.classList.remove('active'))
  });
});

// Инициализация (показать первый слайд)
goToSlide(currentIndex);

// слайдер our-stories

const cardContainer = document.querySelector('.cards-container');
const cardSlider = document.querySelector('.cards-slider');
const cardSlides = document.querySelectorAll('.card-slide');
const backButton = document.querySelector('.back-btn');
const furtherButton = document.querySelector('.further-btn');

let cardIndex = 0;
const totalCardSlides = 3;
const cardSlideWidth = cardContainer.offsetWidth; // Получаем ширину слайдера
const maxCardSlideWidth = cardSlider.offsetWidth

function showCardSlide(index) {
  if (index < 0) {
    cardIndex = totalCardSlides - 1;
  } else if (index >= totalCardSlides) {
    cardIndex = 0;
  } else {
    cardIndex = index;
  }

  const offset = -cardIndex * (cardSlideWidth + cardSlideWidth*0.016);
  cardSlider.style.transform = `translateX(${offset}px)`;
}

backButton.addEventListener('click', () => {
  showCardSlide(cardIndex - 1);
});

furtherButton.addEventListener('click', () => {
  showCardSlide(cardIndex + 1);
});

// Инициализация: показать первый слайд
showSlide(cardIndex);



