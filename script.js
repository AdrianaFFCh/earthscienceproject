document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('js-enabled');

  const ctaButtons = document.querySelectorAll('.button, .button-secondary');
  if (ctaButtons.length) {
    ctaButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        console.log('CTA clicked:', button.textContent.trim());
      });
    });
  }

  // Dropdown menu for Earth Processes
  const earthProcessesLink = document.getElementById('earth-processes-link');
  if (earthProcessesLink) {
    var dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';
    dropdown.innerHTML = `
      <a class="dropdown-item" href="maps.html">Maps, Location, and Cartographers</a>
      <a class="dropdown-item" href="plate_tectonics.html">Plate Tectonics, Earthquakes, and Volcanoes</a>
      <a class="dropdown-item" href="weathering.html">Weathering, Mass Wasting, and Erosion</a>
      <a class="dropdown-item" href="fluvial.html">Fluvial Processes, Oceans, and Coastlines</a>
      <a class="dropdown-item" href="climate.html">Climate Controls, Biomes, and Climate Change</a>
    `;
    earthProcessesLink.parentNode.style.position = 'relative';
    earthProcessesLink.appendChild(dropdown);

    var isOpen = false;
    earthProcessesLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      isOpen = !isOpen;
      dropdown.style.display = isOpen ? 'block' : 'none';
    });

    document.addEventListener('click', function(e) {
      if (!earthProcessesLink.contains(e.target)) {
        dropdown.style.display = 'none';
        isOpen = false;
      }
    });
  }

  // Footer dropdown
  var footerEarthProcesses = document.getElementById('footer-earth-processes');
  var footerDropdown = document.getElementById('footer-dropdown');
  if (footerEarthProcesses && footerDropdown) {
    var isOpen2 = false;
    footerEarthProcesses.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      isOpen2 = !isOpen2;
      footerDropdown.style.display = isOpen2 ? 'block' : 'none';
    });

    document.addEventListener('click', function(e) {
      if (footerEarthProcesses && !footerEarthProcesses.contains(e.target) && footerDropdown) {
        footerDropdown.style.display = 'none';
        isOpen2 = false;
      }
    });
  }

  // Carousel functionality
  var carouselTrack = document.getElementById('carouselTrack');
  var carouselDots = document.getElementById('carouselDots');
  var prevBtn = document.getElementById('carouselPrev');
  var nextBtn = document.getElementById('carouselNext');

  if (carouselTrack && carouselDots && prevBtn && nextBtn) {
    var slides = carouselTrack.querySelectorAll('.carousel-slide');
    var dots = carouselDots.querySelectorAll('.carousel-dot');
    var currentSlide = 0;
    var totalSlides = slides.length;
    var autoSlideInterval;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      carouselTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', function() {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', function() {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        goToSlide(i);
        stopAutoSlide();
        startAutoSlide();
      });
    });

    // Touch/swipe support
    var startX = 0;
    var endX = 0;

    carouselTrack.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      stopAutoSlide();
    }, { passive: true });

    carouselTrack.addEventListener('touchend', function(e) {
      endX = e.changedTouches[0].clientX;
      var diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startAutoSlide();
    });

    startAutoSlide();
  }
});
