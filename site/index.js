function toggleQuestions() {
  var houseType = document.getElementById('houseType').value;
  var multifamilyQuestions = document.getElementById('multifamilyQuestions');
  var singlefamilyQuestions = document.getElementById('singlefamilyQuestions');

  if (houseType === 'multifamily') {
    multifamilyQuestions.style.display = 'block';
    singlefamilyQuestions.style.display = 'none';
  } else if (houseType === 'singlefamily') {
    multifamilyQuestions.style.display = 'none';
    singlefamilyQuestions.style.display = 'block';
  }
}

function calculate() {
  var location = document.getElementById('location').value;
  var price = 0;

  if (location === 'center') {
    price += 5000000;
  } else if (location === 'outskirts') {
    price += 1000000;
  }

  var houseType = document.getElementById('houseType').value;

  if (houseType === 'multifamily') {
    var area = parseInt(document.getElementById('area').value);
    var rooms = document.getElementById('rooms').value;
    var condition = document.getElementById('condition').value;

    if (area >= 1 && area <= 20) {
      price += 1000000;
    } else if (area > 20 && area <= 100) {
      price += 3000000;
    } else if (area > 100) {
      price += 5000000;
    }

    if (rooms === '2') {
      price += 1000000;
    } else if (rooms === '3') {
      price += 2000000;
    } else if (rooms === '4+') {
      price += 4000000;
    }

    if (condition === 'noRepair') {
      price += 500000;
    } else if (condition === 'noFinishing') {
      price -= 500000;
    } else if (condition === 'euroRepair') {
      price += 2000000;
    }

  } else if (houseType === 'singlefamily') {
    var houseFloors = parseInt(document.getElementById('houseFloors').value);

    if (houseFloors === 1) {
      price += 1000000;
    } else if (houseFloors === 2) {
      price += 2000000;
    } else if (houseFloors === 3) {
      price += 3000000;
    } else if (houseFloors === 4) {
      price += 4000000;
    } else if (houseFloors === 5) {
      price += 5000000;
    }

    var houseRooms = parseInt(document.getElementById('houseRooms').value);

    if (houseRooms === 2) {
      price += 1000000;
    } else if (houseRooms === 3) {
      price += 2000000;
    } else if (houseRooms === '4+') {
      price += 4000000;
    }

    var houseArea = parseInt(document.getElementById('houseArea').value);
    var landArea = parseInt(document.getElementById('landArea').value);

    if (houseArea >= 1 && houseArea <= 20) {
      price += 1000000;
    } else if (houseArea > 20 && houseArea <= 100) {
      price += 3000000;
    } else if (houseArea > 100) {
      price += 5000000;
    }

    if (landArea >= 1 && landArea <= 20) {
      price += 1000000;
    } else if (landArea > 20 && landArea <= 100) {
      price += 3000000;
    } else if (landArea > 100) {
      price += 5000000;
    }
  }

  var currency = document.getElementById('currency').value;

  if (currency === 'USD') {
    price /= 70; // Курс 1 доллар = 70 рублей
  } else if (currency === 'EUR') {
    price /= 80; // Курс 1 евро = 80 рублей
  }

  document.getElementById('result').innerHTML = 'Оценка недвижимости: ' + price.toFixed(2) + ' ' + currency;
}
  