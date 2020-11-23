// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
class UI {
    constructor() { }

    addToBookList(book) {
        let bookList = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        bookList.appendChild(row);
    }

    clearFields() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }

}

// Get the UI element
let form = document.querySelector('#book-form');

// add event listener
form.addEventListener('submit', newBook);

// define function
function newBook(e) {
    e.preventDefault();

    // define variable
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    let book = new Book(title, author, isbn);

    let ui = new UI();

    ui.addToBookList(book);
    ui.clearFields();
}