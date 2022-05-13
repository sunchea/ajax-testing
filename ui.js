const resultBlock = document.querySelector('#row-5');
const clickButton = document.querySelector('#click-button-1');

clickButton.addEventListener("click", () => {
    let min = Math.ceil(1);
    let max = Math.floor(10);
    const pageNumber = Math.floor(Math.random() * (max - min) + min);

    getImage(pageNumber, onImageReceived);
});

function onImageReceived(data) {
    data.forEach(element => {
        const img = document.createElement('img');
        const div = document.createElement('div');
        img.src = element.thumbnail;
        img.className = 'img-fluid img-thumbnail';
        div.className = 'col col-1 mb-3';
        div.appendChild(img);
        document.querySelector('#row-5').appendChild(div);
    });
}