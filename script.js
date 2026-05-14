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
    // Create dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';
    dropdown.innerHTML = `
      <a class="dropdown-item" href="maps.html">Maps, Location, and Cartographers</a>
      <a class="dropdown-item" href="plate_tectonics.html">Plate Tectonics, Earthquakes, and Volcanoes</a>
      <a class="dropdown-item" href="weathering.html">Weathering, Mass Wasting, and Erosion</a>
      <a class="dropdown-item" href="fluvial.html">Fluvial Processes, Oceans, and Coastlines</a>
      <a class="dropdown-item" href="climate.html">Climate Controls, Biomes, and Climate Change</a>
    `;
    
    // Position the dropdown
    earthProcessesLink.parentNode.style.position = 'relative';
    earthProcessesLink.appendChild(dropdown);
    
    // Prevent dropdown from closing when clicking on items
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });
    
    // Toggle dropdown on click
    let isOpen = false;
    earthProcessesLink.addEventListener('click', function(e) {
      e.preventDefault();
      isOpen = !isOpen;
      dropdown.style.display = isOpen ? 'block' : 'none';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!earthProcessesLink.contains(e.target)) {
        dropdown.style.display = 'none';
        isOpen = false;
      }
    });
  }
});
