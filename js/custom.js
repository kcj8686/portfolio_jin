// 리스트 스와이프
var swiper = new Swiper(".mySwiper", {
        mousewheel: {
          invert: false,
        },
        // Default parameters
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 10,
        
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    // 768: {
    //   direction: 'vertical',
    //   slidesPerView: 1,
    //   spaceBetween: 10
    // },
    // when window width is >= 480px
    994: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 80
      
    },
    // when window width is >= 1199px
    1199: {
      direction: 'horizontal',
      slidesPerView: 2.4,
      spaceBetween: 120,
      pagination: {
        direction: 'horizontal',
        el: ".swiper-pagination",
        clickable: true,
      },
    }
  },
      });


      (function() {
        /* Easy selector helper function*/
        const select = (el, all = false) => {
          el = el.trim()
          if (all) {
            return [...document.querySelectorAll(el)]
          } else {
            return document.querySelector(el)
          }
        }

        /* Easy event listener function*/
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all)
          if (selectEl) {
            if (all) {
              selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
              selectEl.addEventListener(type, listener)
            }
          }
        }

        /* Mobile nav toggle*/
        on('click', '.mobile-nav-toggle', function(e) {
          select('body').classList.toggle('mobile-nav-active')
          this.classList.toggle('bi-list')
          this.classList.toggle('bi-x')
        })
        
      })()