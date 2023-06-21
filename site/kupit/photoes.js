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

const test = (str) => {
    console.log(str);
    console.log(str.slice(0, str.length - 1));
    console.log(str.slice(0, str.length - 1) + (Number(str.slice(-1)) + 1));
}


test('dgshfgujsdfsvb4')