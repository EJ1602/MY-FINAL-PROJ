const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

/* navbar scrolling */
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const banner = document.querySelector('.banner');
    const scrollY = window.scrollY;
    const bannerHeight = banner.offsetHeight;

    if (scrollY > bannerHeight - 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const images = Array.from(document.querySelectorAll('.lightbox img'));
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    images.forEach((img, index) => {
      img.parentElement.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = index;
        showImage();
      });
    });

    function showImage() {
      lightboxImg.src = images[currentIndex].src;
      lightbox.style.display = 'flex';
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    }

    function showPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    }

    nextBtn.addEventListener('click', e => {
      e.stopPropagation();
      showNextImage();
    });

    prevBtn.addEventListener('click', e => {
      e.stopPropagation();
      showPrevImage();
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });


    
    AOS.init({
      duration: 1200,
    })

  
