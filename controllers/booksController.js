import books from "../data/books.js";

export const getbooks = (req, res) => {
  res.status(200).json(books);
};

export const getbooksbyid = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(books[id]);
};

export const createbook = (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "hiányos adat" });
  }
  const newbook = { title, author, year };
  books.push(newbook);
  res.status(201).json(newbook);
};

export const updatebook = (req, res) => {
  const { title, author, year } = req.body;
  const id = req.params.id;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "hiányos adat" });
  }
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Not found" });
  }
  const newbook = { title, author, year };
  books[id] = newbook;
  res.status(200).json(newbook);
};

export const deletebook = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Not found" });
  }
  books.splice(id, 1);
  res.status(200).json({ message: "sikeres törlés" });
};
