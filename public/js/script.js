
(function(){
  'use strict';
  let menutoggle = document.querySelector('.toggle');
  let sidebar = document.querySelector('.nav-menu');
  
  menutoggle.addEventListener("click", function(){
 
      menutoggle.classList.toggle('active');
    sidebar.classList.toggle('active');
  
  });
  sidebar.addEventListener("click", function(){
      sidebar.classList.remove('active')
  });
  


let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop:true,
  centerSlider: 'false',
  fade:'true',
  grabCursor:'true',
  dynamicBullets:'true',
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  breakpoints: {
0: {
slidesPerView:0.4,

},
520: {
slidesPerView: 1,
spaceBetween: 20,
},
768:{
slidesPerView:2,
},
950: {
slidesPerView: 3,
spaceBetween: 25,
},

}
} );

})();




