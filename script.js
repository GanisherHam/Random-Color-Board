const board = document.querySelector(`.board`);

// console.log(document);

let number = 816;

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`;

for(let i = 0; i < number; i++){
    let div = document.createElement(`div`);

    div.classList.add(`box`);

    div.addEventListener(`mouseover`, function() {  /* Событие наведение мыши */
        this.style.background = randomColor();
        this.style.boxShadow = `0 0 2px red`
    })
    div.addEventListener(`mouseleave`, function() { /* Событие когда мышь уводится */
        this.style.background = `#220303`;
        this.style.boxShadow = `0 0 2px #000`;
    })

    board.appendChild(div)
}
