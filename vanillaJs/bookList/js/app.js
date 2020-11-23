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

    showAlert(message,className){
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

    let ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please all the fields!','error');
    } else {
        let book = new Book(title, author, isbn);

        ui.addToBookList(book);
        ui.clearFields();
        ui.showAlert('Book Added!','success');
    }


}