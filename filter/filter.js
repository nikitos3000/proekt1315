const products = document.querySelectorAll('.active');
const selectPrice = document.getElementById('price');
const selectArea = document.getElementById('area');
const selectRooms = document.getElementById('rooms');
const selectType = document.getElementById('type');

const filterPrice = (optionPriceValue, priceObject) => {
  const prices = {
    1: (valp) => valp > 0 && valp <= 150000,
    2: (valp) => valp >= 150000.001 && valp <= 200000,
    3: (valp) => valp >= 200000.001 && valp <= 500000,
    4: (valp) => valp >= 500000.001 && valp <= 1000000,
    0: (valp) => (!!valp),
  };
  const p = priceObject.querySelector('[data-product-price]');
  const dataValue = p.dataset.productPrice;
  const valueInt = Number(dataValue);
  return prices[optionPriceValue](valueInt);
};

selectPrice.addEventListener('change', (e) => {
  e.preventDefault();
  const optionValue = selectPrice.value;
  products.forEach((el) => {
    if (filterPrice(optionValue, el)) {
      el.classList.remove('active');
      el.classList.remove('priceInactive');
      el.classList.add('priceActive');
    } else {
      el.classList.remove('active');
      el.classList.add('priceInactive');
    }
  });
});
const filterArea = (optionAreaValue, AreaObject) => {
  const areas = {
    1: (vala) => vala > 50 && vala <= 75,
    2: (vala) => vala >= 75.001 && vala <= 100,
    3: (vala) => vala >= 100.001 && vala <= 250,
    4: (vala) => vala >= 250.001 && vala <= 500,
    0: (vala) => (!!vala),
  };
  const p = AreaObject.querySelector('[data-product-area]');
  const outP = p.dataset.productArea;
  const val = Number(outP);
  return areas[optionAreaValue](val);
};

selectArea.addEventListener('change', (e) => {
  e.preventDefault();
  const objValue = selectArea.value;
  products.forEach((el) => {
    if (filterArea(objValue, el)) {
      el.classList.remove('active');
      el.classList.remove('areaInactive');
      el.classList.add('areaActive');
    } else {
      el.classList.remove('active');
      el.classList.add('areaInactive');
    }
  });
});

const filterRooms = (optionRoomsValue, RoomsObj) => {
  const p = RoomsObj.querySelector('[data-product-rooms]');
  const outP = p.dataset.productRooms;
  if (optionRoomsValue === '0' || optionRoomsValue === outP) return true;
  return false;
};

selectRooms.addEventListener('change', (e) => {
  e.preventDefault();
  const ov = selectRooms.value;
  products.forEach((el) => {
    if (filterRooms(ov, el)) {
      el.classList.remove('active');
      el.classList.remove('roomsInactive');
      el.classList.add('roomsActive');
    } else {
      el.classList.remove('active');
      el.classList.add('roomsInactive');
    }
  });
});

const filterType = (optionTypesValue, typeObj) => {
  const p = typeObj.querySelector('[data-product-type]');
  const outP = p.dataset.productType;
  if (optionTypesValue === '0' || optionTypesValue === outP) return true;
  return false;
};

selectType.addEventListener('change', (e) => {
  e.preventDefault();
  const ov = selectType.value;
  products.forEach((el) => {
    if (filterType(ov, el)) {
      el.classList.remove('active');
      el.classList.remove('typesInactive');
      el.classList.add('typesActive');
    } else {
      el.classList.remove('active');
      el.classList.add('typesInactive');
    }
  });
});
