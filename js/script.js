const swiper = new Swiper('.sliderCarts', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
      delay:3000,
      disableOnInteraction:false
    },
    breakpoints:{
      1024:{
        spaceBetween:10,
        slidesPerView:3,
        loop:true
      },
    }
  

  });
//----Date----////
  function DateOut(){
    let elem = document.querySelector('.out');
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); 
let yyyy = date.getFullYear();

date = dd + '.' + mm + '.' + yyyy;
    elem.innerHTML = "Order date:" + date;
  }
  DateOut();


  //----Timer----//

  // Set the date we're counting down to

function countdownTimeStart(){

  let countDownDate = new Date("Sep 25, 2025 23:00:00").getTime();
  
  // Update the count down every 1 second
  let x = setInterval(function() {
  
      // Get todays date and time
      let now = new Date().getTime();
      
      // Find the distance between now an the count down date
      let distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      document.getElementById("timerWork").innerHTML = hours + ":"
      + minutes + ":" + seconds ;
      
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timerWork").innerHTML = "EXPIRED";
      }
  }, 1000);
  }
  countdownTimeStart();

