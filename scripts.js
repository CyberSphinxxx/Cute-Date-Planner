function showDateSelection() {
    document.querySelector('.btn-container').classList.add('hidden');
    document.querySelector('.date-selection').classList.remove('hidden');
  }

  function showLocationSelection() {
    const dateInput = document.getElementById('dateTimeInput').value;
    if (dateInput) {
      document.querySelector('.date-selection').classList.add('hidden');
      document.querySelector('.location-selection').classList.remove('hidden');
    } else {
      alert("Please choose a date and time!");
    }
  }

  function selectLocation(location) {
    document.getElementById('chosenDate').textContent = document.getElementById('dateTimeInput').value;
    document.getElementById('chosenLocation').textContent = location;
    document.querySelector('.location-selection').classList.add('hidden');
    document.querySelector('.summary-section').classList.remove('hidden');
  }

  function sayNo() {
    alert("Aww, maybe next time! 😢");
  }