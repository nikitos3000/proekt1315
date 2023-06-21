const changePhotoes = (photo) => {
    splitSrc = photo.src.split('_');
    firstSliceSrc = splitSrc[0];
    secondSliceSrc = splitSrc[1];
    if (secondSliceSrc.startsWith('3')) {
        photo.src = firstSliceSrc + '_1.png';
    } else {
        photo.src = firstSliceSrc + '_' + (Number(secondSliceSrc[0]) + 1) + '.png';
    }
}

