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

function addItem(itemName) {
  this.bookmarks.push(itemName);
}

function updateBm(id, desc, rating) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].id === id) {
      bookmarks[i].desc = desc;
      bookmarks[i].rating = rating;
      break;
    }
  }
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
