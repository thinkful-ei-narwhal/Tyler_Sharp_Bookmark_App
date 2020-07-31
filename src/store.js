let bookmarks = [];

let adding = false;
let error = null;
let filter = 0;

const findById = (id) => {
  return bookmarks.find((item) => item.id === id);
};

function findAndDelete(id) {
  this.bookmarks = this.bookmarks.filter((item) => item.id !== id);
}

async function updateBm(id, desc, rating) {
  const bmToEdit = this.findById(id);
  bmToEdit.desc = desc;
  bmToEdit.rating = rating;
  await findAndDelete(id).then((res) =>
    res.ok ? this.bookmarks.push(bmToEdit) : res.error
  );
}

function addItem(itemName) {
  this.bookmarks.push(itemName);
}

function filterList(rating) {
  this.filter = rating;
  let filteredItems = this.bookmarks.filter(
    (item) => item.rating >= this.filter
  );
  return filteredItems;
}

module.exports = {
  bookmarks,
  adding,
  error,
  filter,
  findById,
  addItem,
  findAndDelete,
  filterList,
  updateBm,
};
