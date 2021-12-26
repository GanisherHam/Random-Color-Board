const board = document.querySelector(`.board`);

// console.log(document);

let number = 500;

function random(){
    var index = Math.floor(Math.random() * (10 - 1) + 1)
    while(index <= 0) return random();
    return index;
}

for(let i = 0; i < number; i++){
    let div = document.createElement(`div`);

    div.classList.add(`box`);

    div.addEventListener(`mouseover`, () => {  /* Событие наведение мыши */
        if(random() == 1){
            div.style.background = `#ADFF2F`
        }else if(random() == 2){
            div.style.background = `#20B2AA`
        }else if(random() == 3){
            div.style.background = '#FFFFE0'
        }else if(random() == 4){
            div.style.background = `#4682B4`
        }else if(random() == 5){
            div.style.background = `#FF00FF`
        }else if(random() == 6){
            div.style.background = `#0000FF`
        }else if(random() == 7){
            div.style.background = `#FFFF00`
        }else if(random() == 8){
            div.style.background = `#DCDCDC`
        }else if(random() == 9){
            div.style.background = `#FF0000`
        }
        div.style.boxShadow = `0 0 2px red`
    })
    div.addEventListener(`mouseleave`, () =>{ /* Событие когда мышь уводится */
        div.style.background = `#220303`;
        div.style.boxShadow = `0 0 2px #000`;
    })

    board.appendChild(div)
}