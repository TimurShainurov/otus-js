let button = document.querySelector('.button')
let input = document.querySelector('.input')
let textCollection = document.getElementsByTagName('p')
const first = document.querySelector('.first')


let textBlock = document.querySelector('.text-block');

input.addEventListener('input', function () {
    button.hidden = input.value.trim() === ''
})

button.addEventListener('click', function () {
    if(textBlock.children.length >= 5) {
        textBlock.firstElementChild.remove()
    }
    const newParagraph = document.createElement('p');
    textBlock.append(newParagraph);
    newParagraph.innerText = input.value;


    console.log(textCollection)
})

