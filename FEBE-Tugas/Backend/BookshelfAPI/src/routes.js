const express = require('express');
const router = express.Router();

let books = [];

router.post('/books', (req, res) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const id = nanoid();
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  return res.status(201).json({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  });
});

router.get('/books', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
});

router.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params;

  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return res.status(404).json({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      book,
    },
  });
});

router.put('/books/:bookId', (req, res) => {
  const { bookId } = req.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message:
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
  }

  const updatedBook = {
    ...books[bookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt: new Date().toISOString(),
  };

  books[bookIndex] = updatedBook;

  return res.status(200).json({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });
});

router.delete('/books/:bookId', (req, res) => {
  const { bookId } = req.params;

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
  }

  books.splice(bookIndex, 1);

  return res.status(200).json({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });
});

module.exports = router;
