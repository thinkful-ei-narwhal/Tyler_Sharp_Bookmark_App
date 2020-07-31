import $ from "jquery";
import "./index.css";
import api from "./api.js";
import store from "./store";
import bookmarks from "./bookmarks";

function main() {
  api.getItems().then((items) => {
    items.forEach((item) => store.addItem(item));
    bookmarks.render();
  });

  bookmarks.bindEventListeners(), bookmarks.render();
}

$(main);
