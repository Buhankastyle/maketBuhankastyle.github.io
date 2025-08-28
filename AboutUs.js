const menu = document.querySelector("#mobile__menu")
const spisok = document.querySelector(".menu")

menu.addEventListener('click', function() {
    menu.classList.toggle("is-active")
    spisok.classList.toggle("active")
})


/* offer__section */

let button = document.querySelectorAll('.btn');
let image = document.querySelectorAll('.img')

button.forEach(function(element) {
    element.addEventListener('click', activeImg)
})

function activeImg() {
    button.forEach(function(element) {
        element.classList.remove('active');
    })
    this.classList.add('active')
    let btnName = this.getAttribute('data-btn');
    activeImgContent(btnName);
}

function activeImgContent(btnName) {
    image.forEach(function(item) {
        if (item.classList.contains(btnName)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');  
        }
    })
}

/* Выполнение анимаций при нахождении ее в зоне видимости */

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


// ===============================  слайдер js

const slider = document.querySelector('.slider__container');
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slider.offsetWidth; // Получаем ширину слайдера
const maxSlideWidth = sliderContainer.offsetWidth

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
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Инициализация: показать первый слайд
showSlide(currentIndex);
