function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = read;
    }

const theHobbit = new Book(
    'The Hobbit',
    'J.R.R. Tolkein',
    '295',
    'not read yet'
)
const theFellowship = new Book(
    'The Fellowship of the Ring',
    'J.R.R. Tolkein',
    '423',
    'Read'
)
const returnOfTheKing = new Book(
    'The Return of the King',
    'J.R.R. Tolkein',
    '416',
    'Read'
)

let myLibrary = [theHobbit, theFellowship, returnOfTheKing];
console.log(myLibrary)

//Create cards
const container = document.querySelector('.container');
function createCard() {
    container.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        container.innerHTML +=
        `<div class="card">
            <div class="title">Title: ${myLibrary[i].title}</div>
            <div class="author">Author: ${myLibrary[i].author}</div>
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
        button.addEventListener('click', (e) => {
            myLibrary[index].status = '';
            myLibrary[index].status = 'Finished'
            createCard();
        })
    })
}
createCard();

//Add book to Library from user input
// function addBookToLibrary() {
//     const title = document.querySelector('#title');
//     const author = document.querySelector('#author');
//     const pages = document.querySelector('#pages');
//     const status = document.querySelector('#status');
//     const newBook = new Book(
//         title.value, 
//         author.value,
//         pages.value,
//         status.value
//     )
//     myLibrary.push(newBook);
// }

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    myLibrary.push(obj);
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    createCard();
})


//Modal window
const btn = document.querySelector('.add');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal')
btn.addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closeModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})