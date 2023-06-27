const changePhotoesLeft = (button) => {
    pictureOfButton = button.parentElement.children[2];
    splitSrc = pictureOfButton.src.split('_');
    firstSliceSrc = splitSrc[0];
    secondSliceSrc = splitSrc[1];
    if (secondSliceSrc.startsWith('1')) {
        pictureOfButton.src = firstSliceSrc + '_3.png';
    } else {
        pictureOfButton.src = firstSliceSrc + '_' + (Number(secondSliceSrc[0]) - 1) + '.png';
    }
}

const changePhotoesRigth = (button) => {
    pictureOfButton = button.parentElement.children[2];
    splitSrc = pictureOfButton.src.split('_');
    firstSliceSrc = splitSrc[0];
    secondSliceSrc = splitSrc[1];
    if (secondSliceSrc.startsWith('3')) {
        pictureOfButton.src = firstSliceSrc + '_1.png';
    } else {
        pictureOfButton.src = firstSliceSrc + '_' + (Number(secondSliceSrc[0]) + 1) + '.png';
    }
}



