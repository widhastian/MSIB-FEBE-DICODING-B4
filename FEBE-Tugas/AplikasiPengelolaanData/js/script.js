const books = [];
const EVENT_CHANGE = "change-books";
const SAVED_EVENT = "saved-books";
const STORAGE_KEY = "BOOKSELF_APPS";

document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("form");
    submitForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addBook();
        alert("Buku Ditambahkan");
        e.target.reset();
    });
    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function saveData() {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function isStorageExist() {
    if (typeof Storage === undefined) {
        alert("Browser tidak mendukung local storage");
        return false;
    }
    return true;
}

function addBook() {
    const inputTitle = document.getElementById("title").value;
    const inputAuthor = document.getElementById("author").value;
    const inputYear = document.getElementById("year").value;

    const generatedID = generateId();
    const newBook = generateNewBook(generatedID, inputTitle, inputAuthor, inputYear, false);
    books.push(newBook);

    document.dispatchEvent(new Event(EVENT_CHANGE));
    saveData();
}

function generateId() {
    return +new Date();
}

function generateNewBook(id, bookTitle, inputAuthor, inputYear, isComplated) {
    return {
        id,
        bookTitle,
        inputAuthor,
        inputYear,
        isComplated,
    };
}

function makeBook(newBook) {
    const {id, bookTitle, inputAuthor, inputYear, isComplated} = newBook;

    const inputTitle = document.createElement("h2");
    bookTitle.innerText = bookTitle;

    const authorName = document.createElement("p");
    authorName.innerText = inputAuthor;

    const bookYear = document.createElement("p");
    bookYear.innerText = inputYear;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(bookTitle, authorName, bookYear);

    const container = document.createElement("div");
    container.classList.add("item", "list-item", "shadow");
    container.append(textContainer);
    container.setAttribute("id", `book-${id}`);

    if (isComplated) {
        const undoButton = document.createElement("img");
        undoButton.setAttribute("src", "assets/reload.svg");
        undoButton.classList.add("undo-button");

        undoButton.addEventListener("click", function () {
        if (confirm("Yakin Mengembalikan Buku ke Daftar Belum DIbaca?")) {
            undoBookTitleFromReaded(newBook.id);
            alert("Buku Dikembalikan ke List Belum Dibaca");
        } else {
        }
        });

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");

        trashButton.addEventListener("click", function () {
        if (confirm("Yakin Menghapus Buku Dari Bookshelf?")) {
            removeBookTitleFromReaded(newBook.id);
            alert("Buku Dihapus Dari Bookshelf");
        } else {
        }
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement("button");
        checkButton.classList.add("check-button");

        checkButton.addEventListener("click", function () {
        if (confirm("Yakin Buku Telah Dibaca?")) {
            addBookTitleToReadList(newBook.id);
            alert("Buku Dipindahkan ke List Sudah Dibaca");
        } else {
        }
        });

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");

        trashButton.addEventListener("click", function () {
        if (confirm("Yakin Menghapus Buku Dari Bookshelf?")) {
            removeBookTitleFromReaded(newBook.id);
            alert("Buku Dihapus Dari Bookshelf");
        } else {
        }
        });

        container.append(checkButton, trashButton);
    }

    return container;
}

document.addEventListener(EVENT_CHANGE, function () {
    const list = books.length;
    const read = [];
    const unRead = [];
    const unReadBooksList = document.getElementById("books");
    unReadBooksList.innerHTML = "";

    const readBookList = document.getElementById("books-items");
    readBookList.innerHTML = "";

    const unReadBook = document.getElementById("unread-book");
    unReadBook.innerText = "";
    const readBook = document.getElementById("read-book");
    readBook.innerText = "";

    for (const bookItem of books) {
        const bookList = makeBook(bookItem);
        if (bookItem.isComplated) {
        readBookList.append(bookList);
        read.push(readBookList);
        } else {
        unReadBooksList.append(bookList);
        unRead.push(bookList);
        }
    }

});

function addBookTitleToReadList(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplated = true;
    document.dispatchEvent(new Event(EVENT_CHANGE));
    saveData();
}

const Search = document.getElementById("bookTitle");

Search.addEventListener("keyup", function () {
    const inputValue = document.getElementById("bookTitle").value.toLowerCase();
    const listBooks = document.querySelectorAll(".list-item");

    listBooks.forEach(function(book) {
        const title = book.textContent.toLowerCase();

        if (title.includes(inputValue)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});

function findBook(bookId) {
    for (const todoItem of books) {
        if (todoItem.id === bookId) {
        return todoItem;
        }
    }
    return null;
}

function removeBookTitleFromReaded(bookId) {
    const bookTarget = findBookIndex(bookId);

    if (bookTarget === -1) return;

    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(EVENT_CHANGE));
    saveData();
}

function undoBookTitleFromReaded(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplated = false;
    document.dispatchEvent(new Event(EVENT_CHANGE));
    saveData();
}

function findBookIndex(bookId) {
    for (const index in books) {
        if (books[index].id === bookId) {
        return index;
        }
    }

    return -1;
}

function bookIndex(newBook) {
    for (const index in books) {
        if (books[index] === newBook) {
        return index;
        }
    }
}

document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const book of data) {
        books.push(book);
        }
    }

    document.dispatchEvent(new Event(EVENT_CHANGE));
}
