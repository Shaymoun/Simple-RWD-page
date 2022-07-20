const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.26}s`;
            }
            });

            burger.classList.toggle('toggle');
    });
}


const buttonSlide = () => {
    const contactBtn = document.querySelector('.contact-us-button');

    contactBtn.addEventListener('click', ()=>{
        document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
    });
}


    const popUp = () => {
    const modal = document.querySelector('.modal');
    const previews = document.querySelectorAll('.products i');
    const original = document.querySelector('.full-img');

    previews.forEach(preview => {
        preview.addEventListener('click',()=>{
            modal.classList.add('open');
            original.classList.add('open');

            const originalSrc = preview.getAttribute('src');
            original.src = originalSrc;
        });
    });

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')) {
         modal.classList.remove('open');
            original.classList.remove('open');
            }
        });
    }
    const slider = ()=>{
    const slides = document.querySelectorAll('.slide');
    const btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    const manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    const repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      const repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();
    }

    const app = () => {
        navSlide();
        buttonSlide();
        slider();
        popUp();
    }

    app();
