const changePhotosLeft = (button) => {
  const pictureOfButton = button.parentElement.children[2];
  const [firstSliceSrc, secondSliceSrc] = pictureOfButton.src.split('_');

  if (secondSliceSrc.startsWith('1')) {
    pictureOfButton.src = `${firstSliceSrc}_3.png`;
  } else {
    pictureOfButton.src = `${firstSliceSrc}_${Number(secondSliceSrc[0]) - 1}.png`;
  }
};

const changePhotosRight = (button) => {
  const pictureOfButton = button.parentElement.children[2];
  const [firstSliceSrc, secondSliceSrc] = pictureOfButton.src.split('_');

  if (secondSliceSrc.startsWith('3')) {
    pictureOfButton.src = `${firstSliceSrc}_1.png`;
  } else {
    pictureOfButton.src = `${firstSliceSrc}_${Number(secondSliceSrc[0]) + 1}.png`;
  }
};

changePhotosRight();
changePhotosLeft();
