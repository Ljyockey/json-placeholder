'use strict';

const deleteItem = (e) => {
  const ulContainer = e.target.parentNode.parentNode;
  const targetLi = e.target.parentNode;
  ulContainer.removeChild(targetLi);
};

const setupListeners = () => {
  for (let i=0; i < document.getElementsByClassName('delete').length; i++) {
    document.getElementsByClassName('delete')[i].addEventListener('click', deleteItem);
  }
};

setupListeners();