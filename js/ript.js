$(document).ready (function () {
  
  /****************** SMOOTH SCROLL ****************/
  Scroller.speed = 50;
               
  /********************** FLIP CLOCK ********************/
  var options = {
    countdown: true, // Cuenta atrás en lugar de hacia adelante
    language: 'spanish',
    clockFace: 'DailyCounter', // Cuenta días
    showSeconds: false,
    callbacks: {
      stop: function() {
        console.log('¡Empieza la final de Eurovisión 2017!');
      },
      start: function() {
        console.log('Empieza la cuenta atrás...');
      }
    }
  }

  // Cuenta atrás hasta el 13 de mayo de 2017 a las nueve de la noche
  var time = (new Date('2017/5/13 21:00') - new Date()) / 1000;
  var contador = $('.contador').FlipClock(time, options);             
  
  
  /********************** GMAPS *********************/
  var map = new GMaps({
    el: '#map',
    lat: 50.4521442,
    lng: 30.5890537,
    scrollwheel: false, // para que al hacer scroll en la web no haga zoom
    zoomControl: true,
    zoomControlOpt: {
      style : 'SMALL',
      position: 'TOP_LEFT'
    },
    zoom: 5,
    panControl : false,
    streetViewControl : true,
    mapTypeControl: false,
    overviewMapControl: false,
    
    /* Adicional a esta librería, agrego el estilo en gris editado por https://snazzymaps.com */
    styles: [ {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [ 
                { "saturation": 36 },
                { "color": "#000000" },
                { "lightness": 40 } ] },
      
              { "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#000000" },
                  { "lightness": 16 } ] },
             
              { "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                  { "visibility": "off" } ] },
             
              { "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 20 } ] },
              {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [ 
                  { "color": "#000000" },
                  { "lightness": 17 },
                  { "weight": 1.2 } ] },
              {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 20 } ] },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 21 } ] },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 17 } ] },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 29 },
                  { "weight": 0.2 } ] },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 18 } ] },
              {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 16 } ] },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 19 } ] },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  { "color": "#000000" },
                  { "lightness": 17 } ] }
            ]
  });
   
  map.addMarker({
    lat: 50.4521442,
    lng: 30.5890537,
    title: 'Ucrania',
    infoWindow: {
      content: '<p class="hvr-pulse-grow"><i class="fa fa-map-marker"></i> &nbsp; International Exhibition Centre (Ucrania)</p>'
    } 
  }); 
  

  /******************** BAR RATING ******************/
  $(function() {
    $('.estrellas').barrating({
      theme: 'fontawesome-stars',
      initialRating: '8'
    });
  });
  
  
  /******************** TILT ******************/
  var options = {
    glare: false, // Quito efecto de brillo
    scale: 1.1,
    speed: 500,
    axis: "x",
    reset: true,
    transition: true,
    perspective: 1200,
  }
  
  $('.js-tilt').tilt(options);
  

  /******************** NPROGRESS ******************/ 
  NProgress.configure({ showSpinner: true });
  NProgress.start();
  NProgress.inc(0.3);
  window.addEventListener('load', function() {
    NProgress.done(); // Cuando carga la web, finaliza la barra de progreso
  });
  
});  

  /****************** SWEET ALERT ****************/
  function msj_comprar() {
    swal({
        title: 'Compra de entradas',
        text: 'Estás a punto de comprar una entrada. <br />¿Quieres confirmar la compra?',
        imageUrl: 'https://saraygm.github.io/CursoCSS3Avanzado/images/ticket.jpg',
        imageWidth: 340,
        imageHeight: 120,
        padding: 20,
        animation: true,
        background: '#fff',
        showCloseButton: true,
        confirmButtonText: '<i class="fa fa-check"></i> Confirmar',
        confirmButtonColor: '#008FDE',
        showCancelButton: true,
        cancelButtonText: '<i class="fa fa-close" aria-hidden="true"></i> Cancelar',
        cancelButtonColor: '#383336',
    }).then(
        function() {
          swal({
            title:'¡Compra realizada!',
            text: 'En breve recibirás en tu correo el resguardo de tu compra',
            background: '#fff',
            showCloseButton: true,
            confirmButtonText: '<i class="fa fa-check" aria-hidden="true"></i> Ok',
            confirmButtonColor: '#008FDE',
            showCancelButton: false,
          }
        )},
        function() {
          swal({
            title:'Tu compra ha sido cancelada',
            text: 'Siempre podrás ver Eurovisión por la tele...',
            background: '#fff',
            showCloseButton: true,
            confirmButtonText:  '<i class="fa fa-check" aria-hidden="true"></i> Cerrar',
            confirmButtonColor: '#383336',
            showCancelButton: false,
          }
        )}
    );
  }

  /********** AOS (Animation On Scroll) **********/
  AOS.init();
