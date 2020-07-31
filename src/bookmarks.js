import $ from "jquery";
import store from "./store";
import api from "./api";
import layouts from "./layouts";

const handleAddBookmarkButton = () => {
  $("main").on("click", ".add-bookmark-btn", (event) => {
    event.preventDefault();
    $("main").html(layouts.generateAddBookmarkForm());
  });
};

const handleAddBookmarkForm = () => {
  $("main").submit("#new-form", (event) => {
    event.preventDefault();
    const title = $("#bookmark-title").val();
    const url = $("#bookmark-url").val();
    const desc = $("#bookmark-desc").val();
    const rating = $("input[name='stars']:checked").val();
    api.createItem(title, url, desc, rating).then((newItem) => {
      store.addItem(newItem);
      render();
    });
  });
};

const handleRatingFilter = () => {
  $("main").on("change", "select", (event) => {
    event.preventDefault();
    let filterValue = $("option:selected").val();
    let bookmarkList = store.filterList(filterValue);
    $(".bookmark-list").html(layouts.generateBookmarkItemsString(bookmarkList));
  });
};

const getItemIdFromElement = function (item) {
  return $(item).closest(".bookmark-item").data("item-id");
};

const handleExpandBookmarkItem = function () {
  $("main").on("click", ".bookmark-title", (event) => {
    let id = getItemIdFromElement(event.currentTarget);
    let selectedBookmark = store.findById(id);
    selectedBookmark.expanded = !selectedBookmark.expanded;
    render();
  });
};

const handleDeleteBookmarkItem = () => {
  $("main").on("click", ".delete-bookmark-btn", (event) => {
    let id = getItemIdFromElement(event.currentTarget);
    api.deleteItem(id).then(() => {
      store.findAndDelete(id);
      render();
    });
  });
};

const handleEditBookmark = () => {
  $("main").on("click", ".edit-bookmark-btn", (event) => {
    let id = getItemIdFromElement(event.currentTarget);
    $("ul").find(`li[data-item-id=${id}]`).html(layouts.generateEditFields(id));
  });
};

const handleEditSubmit = () => {
  $("main").on("click", ".edit-bookmark-form-btn", (event) => {
    event.preventDefault();
    let id = getItemIdFromElement(event.target);
    let desc = $(`#edit-bookmark-desc-${id}`).val();
    const rating = $("input[name='stars']:checked").val();
    if (desc.length === 0) {
      desc = "Add a new description";
    }
    api
      .patchItem(id, desc, rating)
      .then(() => {
        store.updateBm(id, desc, rating);
      })
      .then(() => render());
  });
};

const render = () => {
  let items = store.filterList(store.filter);
  const bookmarkItemsString = layouts.generateBookmarkItemsString(items);
  $("main").html(layouts.generateHome(bookmarkItemsString));
};

const bindEventListeners = () => {
  handleAddBookmarkButton(),
    handleAddBookmarkForm(),
    handleExpandBookmarkItem(),
    handleDeleteBookmarkItem(),
    handleRatingFilter(),
    handleEditBookmark(),
    handleEditSubmit();
};

export default {
  bindEventListeners,
  render,
};
