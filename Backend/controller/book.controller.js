import Book from '../models/book.model.js';

const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export default getBook;
