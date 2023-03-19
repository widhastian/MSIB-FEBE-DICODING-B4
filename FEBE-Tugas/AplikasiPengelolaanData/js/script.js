const unreadBook = [];
const RENDER_EVENT = 'render-book';

const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOKSHELF_APPS';
 
function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert('Browser tidak mendukung local storage');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
        if (isStorageExist()) {
            loadDataFromStorage();
        }
    });

    function saveBook() {
        if (isStorageExist()) {
            const parsed = JSON.stringify(unreadBook);
            localStorage.setItem(STORAGE_KEY, parsed);
            document.dispatchEvent(new Event(SAVED_EVENT));
        }
    }

    document.addEventListener(SAVED_EVENT, function () {
        console.log(localStorage.getItem(STORAGE_KEY));
    });

    function addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    
    const generatedID = generateId();
    const Books = generateTodoObject(generatedID, bookTitle, bookAuthor, year, false);
    unreadBook.push(Books);
    
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBook();
    }
    function generateId() {
        return +new Date();
    }
    function generateTodoObject(id, title, author, year, isCompleted) {
        return {
            id,
            title,
            author,
            year,
            isCompleted
        }
    }

    document.addEventListener(RENDER_EVENT, function () {
        const unfinishBook = document.getElementById('unreadBook');
        unfinishBook.innerHTML = '';

        const finishBook = document.getElementById('finishBook');
        finishBook.innerHTML = '';
        
        for (const bookItem of unreadBook) {
            const bookElement = addNewBook(bookItem);
            if (!bookItem.isCompleted) 
                unfinishBook.append(bookElement);
            else 
                finishBook.append(bookElement);
        }
    });

    function addNewBook(Books) {
        const textbookTitle = document.createElement('h2');
        textbookTitle.innerText = Books.bookTitle;
        
        const textYear = document.createElement('p');
        textYear.innerText = Books.year;
        
        const textContainer = document.createElement('div');
        textContainer.classList.add('inner');
        textContainer.append(textbookTitle, textYear);
        
        const container = document.createElement('div');
        container.classList.add('item', 'shadow');
        container.append(textContainer);
        container.setAttribute('id', `read-${Books.id}`);
        
        if (Books.isCompleted) {
            const unButton = document.createElement('button');
            unButton.classList.add('undo-button');
        
            unButton.addEventListener('click', function () {
                unfinishBookFromCompleted(Books.id);
            });
        
            const trashButton = document.createElement('button');
            trashButton.classList.add('trash-button');
        
            trashButton.addEventListener('click', function () {
                deleteBookFromCompleted(Books.id);
            });
        
            container.append(unButton, trashButton);
        } else {
            const checkButton = document.createElement('button');
            checkButton.classList.add('check-button');
            
            checkButton.addEventListener('click', function () {
            addBookToCompleted(Books.id);
            });
            
            container.append(checkButton);
        }

        return container;
    }
    function addBookToCompleted (bookId) {
        const bookTarget = findBooks(bookId);
        
        if (bookTarget == null) return;
        
        bookTarget.isCompleted = true;
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveBook();
    }
    function findBooks(bookId) {
        for (const bookItem of unreadBook) {
            if (bookItem.id === bookId) {
            return bookItem;
            }
        }
        return null;
    }
    function deleteBookFromCompleted(bookId) {
        const bookTarget = findBooksIndex(bookId);
        if (bookTarget === -1) return;
        
        unreadBook.splice(bookTarget, 1);
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveBook();
        }
        
        
        function unfinishBookFromCompleted(bookId) {
        const bookTarget = findBooks(bookId);
        
        if (bookTarget == null) return;
        
        bookTarget.isCompleted = false;
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveBook();
    }
    function findBooksIndex(bookId) {
        for (const index in unreadBook) {
            if (unreadBook[index].id === bookId) {
            return index;
            }
        }
        return -1;
    }

    function loadDataFromStorage() {
        const serializedData = localStorage.getItem(STORAGE_KEY);
        let data = JSON.parse(serializedData);
        
        if (data !== null) {
            for (const book_ of data) {
                unreadBook.push(book_);
            }
        }
        
        document.dispatchEvent(new Event(RENDER_EVENT));
    }
});