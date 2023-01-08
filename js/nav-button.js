// ham toggle
let barToggle = 0;
const hambar = document.querySelector('.fa-bars'),
      xmark = document.querySelector('.fa-xmark'),
      navHam = document.querySelector('.nav-ham'),
//navbar position
      navbar = document.getElementById("nav-sticky"),
      ulNav = document.getElementById("ul-nav"),
      hamMenu = document.querySelector(".ham-menu");



// on top every re fresh
$(document).ready(function(){
  $(window).scrollTop(0);
});

//-------------------------------------------------------------------------------------------

// home
  $(function() {
    $('.home-btn').click (function() {
      $('html, body').animate({scrollTop: $('section.home').offset().top }, 'slow');
      inactiveHam();
      return false;
    });
  });

// about
  $(function() {
    $('.about-btn').click (function() {
      $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
      inactiveHam();
      return false;
    });
  });

// team
  $(function() {
    $('.team-btn').click (function() {
      $('html, body').animate({scrollTop: $('section.team').offset().top-100 }, 'slow');
      inactiveHam();
      return false;
    });
  });

// service
  $(function() {
    $('.service-btn').click (function() {
      $('html, body').animate({scrollTop: $('section.service').offset().top-100 }, 'slow');
      inactiveHam();
      return false;
    });
  });

// blog
  $(function() {
    $('.blog-btn').click (function() {
      $('html, body').animate({scrollTop: $('section.blog').offset().top-200}, 'slow');
      inactiveHam();
      return false;
    });
  });

// contact
  $(function() {
    $('.contact-btn').click (function() {
      $('html, body').animate({scrollTop: $('section.contact').offset().top }, 'slow');
      inactiveHam();
      return false;
    });
  });

//----------------------------------------------------------------------------------------------------------

//navbar position
document.onreadystatechange = function() {
  let lastScrollPosition = 0;

  const mql = window.matchMedia('(min-width: 665px)');

  function handleScroll(event) {
    lastScrollPosition = window.scrollY;
    if (lastScrollPosition > 50) {
      navbar.style.opacity = "0";
      ulNav.style.pointerEvents = "none";
    } else if (lastScrollPosition === 0) {
      navbar.style.opacity = "1";
      ulNav.style.pointerEvents = "auto";

      hamMenu.style.opacity = "0";
      hamMenu.style.pointerEvents = "none";
      inactiveHam();
    }

     // ham show up
     if (lastScrollPosition > 600){
      hamMenu.style.opacity = "1";
      hamMenu.style.pointerEvents = "auto";

    }else if (lastScrollPosition < 900){
      hamMenu.style.opacity = "0";
      hamMenu.style.pointerEvents = "none";

    }
  }

  function handleMediaQueryChange(event) {
    if (event.matches) {
      navbar.style.opacity = "1";
    ulNav.style.pointerEvents = "auto";
    navbar.style.display = "flex";

    hamMenu.style.opacity = "0";
    hamMenu.style.pointerEvents = "none";
    window.addEventListener('scroll', handleScroll);
    } else {
    navbar.style.opacity = "0";
    ulNav.style.pointerEvents = "none";
    navbar.style.display = "none";

    hamMenu.style.opacity = "1";
    hamMenu.style.pointerEvents = "auto";
    window.removeEventListener('scroll', handleScroll);
    }
  }

  mql.addListener(handleMediaQueryChange);
  handleMediaQueryChange(mql);
};


hamMenu.addEventListener('click', (event) => {
  
  if(barToggle == 0){
    activeHam();

  }else if(barToggle == 1){
    inactiveHam();

  }
});

//click out of area of ham-menu to close menu
document.addEventListener('click', function(event) {
  // Check if the clicked element is hamMenu or a descendant of navButtons
  if (!event.target.closest('.nav-ham') && !event.target.closest('.ham-menu')) {
    inactiveHam();
  }
});

function activeHam() {
  hambar.style.opacity = "0";
  xmark.style.opacity = "1";
  navHam.style.width = "20vh";
  barToggle = 1;
}

function inactiveHam() {
  hambar.style.opacity = "1";
  xmark.style.opacity = "0";
  navHam.style.width = "0";
  barToggle = 0;
}

//-----------------------------------------------------------------------------------------------

// mediaQuery
const mql = window.matchMedia('(min-width: 665px)');

function handleMediaQueryChange(event) {
  if (event.matches) {
    navbar.style.opacity = "1";
    ulNav.style.pointerEvents = "auto";
    navbar.style.display = "flex";

    hamMenu.style.opacity = "0";
    hamMenu.style.pointerEvents = "none";
  } else {
    navbar.style.opacity = "0";
    ulNav.style.pointerEvents = "none";
    navbar.style.display = "none";

    hamMenu.style.opacity = "1";
    hamMenu.style.pointerEvents = "auto";
  }
}

mql.addListener(handleMediaQueryChange);