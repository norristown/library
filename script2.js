let myLibrary = [];

class CreateCard {

  constructor(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = read;


  }

  addBookToLibrary() {

    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    myLibrary.push(obj);
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    input.forEach((field) => { field.value = "" })
    this.createCard();

  }

  createCard() {

    const container = document.querySelector('.container');
    container.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
      container.innerHTML +=
        `<div class="card">
                <div class="title">${myLibrary[i].title}</div>
                <div class="author">By ${myLibrary[i].author}</div>
                <div class="pages">Pages: ${myLibrary[i].pages}</div>
                <div class="status">Status: ${myLibrary[i].status}</div>
                <div class="btnContainer">
                    <button class="finishedReading">Finished Reading</button>
                    <button class="delBtn">Delete</button>
                </div>
             </div>`;
    }

    const delBtn = document.querySelectorAll('.delBtn');
    delBtn.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        myLibrary.splice(index, 1);
      })
    })

    const finishedReading = document.querySelectorAll('.finishedReading');
    finishedReading.forEach((button, index) => {
      button.addEventListener('click', () => {
        let clicked = false;
        if (clicked == false) {
          clicked = true;
          myLibrary[index].status = '';
          myLibrary[index].status = 'Finished';

        } else {
          clicked = false;
          myLibrary[index].status = '';
          myLibrary[index].status = 'Unread'
        }

        this.createCard();
      })
    })

  }

}

const theHobbit = new CreateCard('The Hobbit', 'J.R.R. Tolkein', '295', 'Currently Reading')
const theFellowship = new CreateCard('The Fellowship of the Ring', 'J.R.R. Tolkein', '423', 'Read')
const returnOfTheKing = new CreateCard('The Return of the King', 'J.R.R. Tolkein', '416', 'Read')
myLibrary.push(theHobbit, theFellowship, returnOfTheKing)
theHobbit.createCard();


//Modal window
const btn = document.querySelector('.add');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal')
btn.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
})

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})

const form = document.querySelector('form');
const input = document.querySelectorAll('.inputField')
form.addEventListener('submit', (e) => {

  e.preventDefault();
  const newBook = new CreateCard()
  newBook.addBookToLibrary();
  console.log(myLibrary)

})

