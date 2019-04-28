'use strict';

const deleteItem = (e) => {
  const ulContainer = e.target.parentNode.parentNode;
  const targetLi = e.target.parentNode;
  ulContainer.removeChild(targetLi);
};

const setupListeners = () => {
  return getToDos().then(liElements => {
    liElements.forEach((i) => {
      i.getElementsByClassName('delete')[0].addEventListener('click', deleteItem);
    });
  });
};

const getToDos = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/';
  return fetch(url)
    .then(response => response.json())
    .then(toDos => generateToDoList(toDos));
};

const generateToDoList = toDos => {
  const liItems = toDos.map(t => {
    const element = document.createElement('li');
    element.appendChild(addLiChildElement(t.title));
    element.appendChild(addLiChildElement());
    const container = document.getElementById('container');
    container.appendChild(element);
    return element;
  });
  return liItems;
};

const addLiChildElement = (spanText) => {
  let element;
  if (spanText) {
    element = document.createElement('span');
    element.contentEditable = true;
    element.textContent = spanText;
  } else {
    element = document.createElement('button');
    element.classList.add('delete');
    element.textContent = 'Delete';
  }
  return element;
};

setupListeners();
