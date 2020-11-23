// Get the UI element
let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');

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

    static showAlert(message,className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div,form); 
        
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000)
    }

    deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            UI.showAlert('Book Removed!','success');
        }
    }

}

// LocalStorage class

class LocalStorage {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBooks(book){
        let books  = LocalStorage.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
}


// add event listener
form.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);

// define function
function newBook(e) {
    e.preventDefault();

    // define variable
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    let ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please all the fields!','error');
    } else {
        let book = new Book(title, author, isbn);

        ui.addToBookList(book);
        ui.clearFields();
        UI.showAlert('Book Added!','success');
        LocalStorage.addBooks(book);
    }
};

function removeBook(e){
    e.preventDefault();
    let ui = new UI();
    ui.deleteFromBook(e.target);
}