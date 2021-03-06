

// Targetting Elements

// Owl-Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
        items:1
        },

        600:{
        items:3
        },

        1000:{
        items:5
        }
               }
});

 // Sticky Plugin
 let nav = document.querySelector("div.navigation");
 let myContainer = document.querySelector("div.my-container");

$(nav).sticky({
  zIndex: 100000,
})


 $(nav).on("sticky-start",function(){
  nav.style.padding = "20px 0";
  myContainer.style.paddingBottom = "0";
  myContainer.style.borderBottom = 0;
 });

 $(nav).on("sticky-end", function(){
  nav.style.padding = "40px 0";
  myContainer.style.paddingBottom = "20px";
  myContainer.style.borderBottom = "2px solid white";

 });
