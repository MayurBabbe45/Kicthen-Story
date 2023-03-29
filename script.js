// Get all card elements
const cards = document.querySelectorAll('.card');


cards.forEach(card => {
  
  const popUp = card.querySelector('.pop-up');
  
 
  popUp.style.display = 'none';
  
 
  card.addEventListener('click', () => {
    if (popUp.style.display === 'none') {
      popUp.style.display = 'block';
    } else {
      popUp.style.display = 'none';
    }
  });
});


// Get the navbar
var navbar = document.getElementById("navbar");

// When the user scrolls down 20px from the top of the document, add the "scroll" class to the navbar
window.onscroll = function() {
  if (window.pageYOffset > 20) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};


function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
  