// TOP BUTTON

window.onload  = function() {
  topButtonAppearance();
  responsiveBehave();
  addMenuItemsHandler();
  responsiveBehave();

  
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target.id);
    if(entry.isIntersecting) {
      document.querySelectorAll('.navigation__reference').forEach((link) => {
        if(link.getAttribute('href').replace('#', '') === entry.target.id) {
          link.classList.add('navigation-item-selected')
        } else {
          link.classList.remove('navigation-item-selected')
        }
        

      })
    }
  });
}, {
  threshold: 0.5,
});

document.querySelectorAll('.section').forEach(
  (section) => observer.observe(section),
);

  // menuItems.forEach((item) => {
  //   sections.forEach((section) => {
  //     const navigateToSection = () => {
  //       const topPosition = section.getBoundingClientRect().top + window.pageYOffset;
  //       console.log(section.getBoundingClientRect().top)
  //       console.log(topPosition)
  //       window.scrollTo({
  //         top: topPosition
  //       })
  //     }
  //     item.addEventListener('click', navigateToSection);
  //   })
  //   console.log(item);
    
    
  // })
  // 

  // menuItems.addEventListener('click', navigateToSection);

 
};
// TOP BUTTON
const topButtonAppearance = () => {
  document.getElementById('topButton');
  function scrollCondition() {
  if(window.scrollY < 300) {
    console.log('scroll');
    document.getElementById('topButton').classList.remove('visible');
  };
  if(window.scrollY > 300) {
    document.getElementById('topButton').classList.add('visible');
  };
  };
  window.addEventListener('scroll', scrollCondition);

  function scrollToTop() {
  window.scrollTo(0,0);
  };

  topButton.addEventListener('click', scrollToTop);
}
// TOP BUTTON END


// RESPONSIVE
const responsiveBehave = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    const hamburger = document.getElementById('hamburger');
  
    const mobileBackground = document.querySelector('.mobile-background');
    const headerNavigation = document.querySelector('.header__navigation');
    const closeButton = document.querySelector('.close-button');
    
  //   const handleNavigation = () => {
  //     if(mobileBackground.style.visibility = 'hidden') {
  //       showNavigation();
  //     } else if (mobileBackground.style.visibility = 'visible') {
  //     hideNavigation();
  //     };
  // }
    
    const showNavigation = () => {
      console.log(window.scrollY);
      mobileBackground.style.top = window.scrollY + 'px';
      mobileBackground.style.display = 'flex';
      mobileBackground.style.visibility = 'visible';
      mobileBackground.style.opacity = 1;
      headerNavigation.style.display = "flex";
    
    }
    
    const hideNavigation = () => {
      mobileBackground.style.visibility = 'hidden';
      mobileBackground.style.opacity = 0;
      headerNavigation.style.display = "none";
    }
    
    hamburger.addEventListener("click", showNavigation);
    closeButton.addEventListener('click', hideNavigation);
    headerNavigation.addEventListener('click', hideNavigation);
    // console.log(mobileBackground.style.height);
    function mobilemenuHide() {
      if(window.scrollY > (mobileBackground.style.height.slice(0, -2))) {
        hideNavigation();
      }
    }
    window.addEventListener('scroll', mobilemenuHide);  
    }
    
}



const addMenuItemsHandler = () => {
  document.querySelector('.header__navigation').addEventListener('click', (e) => {
    console.log(e);
  if(e.target.classList.contains('navigation__reference')) {
    let clickedItem = e.target;
    removeSelectedItems();
    selectClickedItem(clickedItem);
  }
  })
}

const removeSelectedItems = () => {
  let items = document.querySelectorAll('.navigation__reference');
  console.log(items);
  items.forEach(item => {
  item.classList.remove('navigation-item-selected');    
  });
}

const selectClickedItem = (clickedItem) => {
  clickedItem.classList.add('navigation-item-selected');
  // navigateToSection(clickedItem);
}


// const navigateToSection = (clickedItem) => {
//   const sections = document.querySelector('section');
//   console.log('sections - ' + sections);
//   console.log('clicked item' + clickedItem);
//   sections.forEach(section => {
//     console.log('section')
//     const topPosition = section.getBoundingClientRect().top + window.pageYOffset;
//     console.log(clickedItem);
//     if(clickedItem.innerHTML === section.id) {
//       window.scrollTo({
//         top: topPosition
//       })    
//     }
//   })

// }

