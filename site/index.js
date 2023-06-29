// eslint-disable-next-line no-unused-vars
function toggleQuestions() {
  const houseType = document.getElementById('houseType').value;
  const multifamilyQuestions = document.getElementById('multifamilyQuestions');
  const singlefamilyQuestions = document.getElementById('singlefamilyQuestions');

  if (houseType === 'multifamily') {
    multifamilyQuestions.style.display = 'block';
    singlefamilyQuestions.style.display = 'none';
  } else if (houseType === 'singlefamily') {
    multifamilyQuestions.style.display = 'none';
    singlefamilyQuestions.style.display = 'block';
  }
}

// eslint-disable-next-line no-unused-vars
function calculate() {
  const location = document.getElementById('location').value;
  let price = 0;

  if (location === 'center') {
    price += 5000000;
  } else if (location === 'outskirts') {
    price += 1000000;
  }

  const houseType = document.getElementById('houseType').value;

  if (houseType === 'multifamily') {
    const area = parseInt(document.getElementById('area').value, 10);
    const rooms = document.getElementById('rooms').value;
    const condition = document.getElementById('condition').value;

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
    const houseFloors = parseInt(document.getElementById('houseFloors').value, 10);

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

    const houseRooms = parseInt(document.getElementById('houseRooms').value, 10);

    if (houseRooms === 2) {
      price += 1000000;
    } else if (houseRooms === 3) {
      price += 2000000;
    } else if (houseRooms === '4+') {
      price += 4000000;
    }

    const houseArea = parseInt(document.getElementById('houseArea').value, 10);
    const landArea = parseInt(document.getElementById('landArea').value, 10);

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

  const currency = document.getElementById('currency').value;

  if (currency === 'USD') {
    price /= 70; // Курс 1 доллар = 70 рублей
  } else if (currency === 'EUR') {
    price /= 80; // Курс 1 евро = 80 рублей
  }

  document.getElementById('result').innerHTML = `Оценка недвижимости: ${price.toFixed(2)} ${currency}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const dialogOverlay = document.getElementById('dialog-overlay');
  const closeButton = document.getElementById('close-dialog');
  const audio = new Audio('./site/sound/sound.mp3');
  function openDialog() {
    audio.play();
    dialogOverlay.style.display = 'flex';
  }

  function closeDialog() {
    dialogOverlay.style.display = 'none';
  }

  closeButton.addEventListener('click', closeDialog);

  setTimeout(openDialog, 20000);
});
