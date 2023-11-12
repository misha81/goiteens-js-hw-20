const inputNumber = document.querySelector('#inputNumber');
const renderButton = document.querySelector('#renderButton');
const destroyButton = document.querySelector('#destroyButton');
const boxes = document.querySelector('#boxes');

renderButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = inputNumber.value;

    if (amount <= 0) {
        alert('Введіть число більше 0');
        return;
    };

    destroyBoxes();

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = getRandomColor(); // Піддивився в інтернеті
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        boxes.append(box);
    };
};


function destroyBoxes() {
    boxes.innerHTML = '';
};

function getRandomColor() {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
};