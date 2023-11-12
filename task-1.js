const currentImage = document.querySelector('.image');
const images = [
    'https://images.pexels.com/photos/4617294/pexels-photo-4617294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/11815778/pexels-photo-11815778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6195166/pexels-photo-6195166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6957926/pexels-photo-6957926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15520825/pexels-photo-15520825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

let newImage = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        showNewImage(-1);
    } else if (event.key === 'ArrowRight') {
        showNewImage(1);
    };
});

function showNewImage(arg) {
    newImage += arg;

    if (newImage < 0) {
        newImage = images.length - 1;
    } else if (newImage >= images.length) {
        newImage = 0;
    };
    currentImage.src = images[newImage];
};  