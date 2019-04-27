'use strict';
console.log('hello, world!');

const deleteItem = (e) => {
    console.log(e)
}

const setupListeners = () => {
    for (let i=0; i < document.getElementsByClassName('delete').length; i++) {
        document.getElementsByClassName('delete')[i].addEventListener('click', deleteItem)
    }
}

setupListeners()