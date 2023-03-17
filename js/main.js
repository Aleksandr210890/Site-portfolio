$(function () {

  var mixer = mixitup('.directions__list');

  // $('.diretion__filter-btn').on('click', function () {
  //   $(this).addClass('.diretion__filter-btn--active')
  // })
  

  // $('.testimoni__slide').slick({
  //   arrows:false, 
  //   // dots: true,
  // })


  //  // Initialize and add the map
  // function initMap() {}
  // // The location of Uluru
  // const uluru = { lat: -25.344, lng: 131.031 };
  // // The map, centered at Uluru
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 4,
  //   center: uluru,
  // })
  // // The marker, positioned at Uluru
  // const marker = new google.maps.Marker({
  //   position: uluru,
  //   map: map,
  // })

  $(window).on('scroll', function () {
    if ($(window).scrollTop () > 0 && $(".header__top").hasClass("header__top--open") === false){
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })


  $(".burger, .overlay").click(function (e) {
    e.preventDefault()
    $(".header__top").toggleClass("header__top--open")
    $(".overlay").toggleClass("overlay--show")
  });

  $(".foorer__top-title").click(function () {
    $(this).hide()
  });

});