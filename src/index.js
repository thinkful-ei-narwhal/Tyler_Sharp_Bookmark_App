import $ from 'jquery';
import css from './index.css';
import cuid from 'cuid';

//*****API.js Module*****//

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tylersharp/bookmarks/';

//*****Store.js Module*****//
//GET List
function getApi(BASE_URL) {
  $('.bookmark-list').html('');
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => data.length === 0 ? generateHome() : renderHTML(data));
}

//Add New Entry
function postAPI(BASE_URL, newData) {
  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  });
}

//Edit Entry
function patchAPI(BASE_URL, id, editData) {
  fetch(BASE_URL+id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editData)
  });
}

//Delete Entry
function deleteAPI(BASE_URL, id) {
  fetch(BASE_URL+id, {
    method: 'DELETE',
  });
}

//*****Index.js Module*****//


//**HTML Functions**//
function generateHome() {
  const stringHTML = '<div class="home"><p id="p-home">Welcome! Would you like to add your first bookmark?</p id="p-home"></div>';
  $('.mainWindow').prepend(stringHTML);
}

function generateAddEntry() {
  return `<form class="new-entry">
          <label for="new-title">Title</label>
          <input class="new title" type="text" placeholder="Title" id="new-title" required></input>
          <label for="new-url">Link</label>
          <input class="new url" type="text" placeholder="http://url.com" id="new-url" required></input>
          <label for="new-desc">Description</label>
          <input class="new description" type="text" placeholder="Describe the site." id="new-desc"></input>
          <label for="new-rating">Rating</label>
          <input class="new rating" type="number" placeholder="5" id="new-rating"></input>
          <input class="submit" type="submit" value="Add" id="new-submit"></input>`;
}

function renderHTML(data) {
  let htmlString = '<form class="bookmarks"><ol>';
  for (let i = 0; i < data.length; i++) {
    if (!data[i].rating) {
      data[i].rating = 3;
    }
    if (!data[i].desc) {
      data[i].desc = 'No description provided';
    }
    let star = "&#9733"
    let ratingString = star.repeat(data[i].rating);
    htmlString += `
                  <li><label for="title-${data[i].id}" class="l-title">Title</label>
                  <input class="entry title" type="text" value="${data[i].title}" id="${data[i].id}" required disabled></input>
                  <label for="url-${data[i].id}"></label>
                  <input class="entry url" type="url" id="url-${data[i].id}" value="${data[i].url}" required disabled></input>
                  <label for="desc-${data[i].id}" class="description collapsed">Description</label>
                  <input class="entry input-desc description collapsed" type="text" id="desc-${data[i].id}" value="${data[i].desc}" disabled></input>
                  <label for="rating-${data[i].id}" class="go-edit">${ratingString}</label>
                  <input class="entry go-edit hidden rating" type="number" min="1" max="5" value="${data[i].rating}" id="rating-${data[i].id}"></input>
                  <input class="btn description collapsed go" type="button" value="Go!" onclick="window.open('${data[i].url}')" id="go-${data[i].id}"></input>
                  <input class="btn go-edit edit" type="button" value="Edit" id="edit-${data[i].id}"></input>
                  <input class="btn cancel save-cancel hidden" type="button" value="Cancel" id="cancel-${data[i].id}"</input>
                  <input class="btn save save-cancel hidden" type="button" value="Save" id="save-${data[i].id}"></input>
                  <input class="btn save-cancel remove hidden" type="button" value="Remove" id="remove-${data[i].id}"></input>
                  </li>`;
  }
  htmlString += '</ol></form>';
  $('.bookmark-list').append(htmlString);
}


//**Event Listeners **//
function addListener() {
  $('.nav').on('click', '.add', function() {
    addBtn();
  });
}

//This is for new entries, edit/PATCH submissions are handled by "Save" command
function submitListener() {
  $('.nav').on('click', '.submit', function() {
    event.preventDefault();
    submitBtn();
  });
}

function editListener() {
  $('.bookmark-list').on('click', '.edit', function() {
    $(event.target).parent().parent().find('.edit').attr('disabled', true);
    $(event.target).parent().find('.l-title').unbind('click', expandListener());
    editBtn();
  });
}

function saveListener() {
  $('.bookmark-list').on('click', '.save', function() {
    saveBtn();
  });
}

function cancelListener() {
  $('.bookmark-list').on('click', '.cancel', function(){
    cancelBtn();
  });
}

function expandListener() {
  $('.bookmark-list').on('click', '.l-title', function(){
    $(event.target).parent().find('.description').toggleClass('collapsed');
  });
}

function removeListener() {
  $('.bookmark-list').on('click', '.remove', function() {
    removeBtn();
  });
}

//**Buttons**//
function addBtn(){
  $('.nav').append(generateAddEntry());
}

//For submitted NEW entries - editing/PATCHing entries is handled by "Save"
function submitBtn() {
  event.preventDefault();
  //Getting the user data and making an object with it 
  let title = $(event.target).parent().find('.title').val();
  let url = $(event.target).parent().find('.url').val();
  let desc = $(event.target).parent().find('.input-desc').val();
  let rating = $(event.target).parent().find('.rating').val();
  if (!title) {
    return alert('Title cannot be blank');
  }
  if (!url) {
    return alert('Must provide a URL');
  }
  const addData = {
    'title': title,
    'url': url,
    'desc': desc,
    'rating': rating
  };
  //Passing our new object into POST API
  postAPI(BASE_URL, addData);
  //Giving the user some visual feedback
  alert('Bookmark added!');
  //generate screen again to reflect changes
  getApi(BASE_URL);
}

function editBtn() {
  event.preventDefault();
  //hide edit button
  $(event.target).parent().find('.go-edit').toggleClass('hidden');
  //unhide save & cancel buttons
  $(event.target).parent().find('.save-cancel').toggleClass('hidden');
  //let fields be editable
  $(event.target).parent().find('.entry').removeAttr('disabled');
  //expand description
  $(event.target).parent().find('.description').removeClass('collapsed');
}

function saveBtn() {
  event.preventDefault();
  //Getting the user data and making an object with it 
  let id = $(event.target).parent().find('.title').attr('id');
  let title = $(event.target).parent().find('.title').val();
  let url = $(event.target).parent().find('.url').val();
  let desc = $(event.target).parent().find('.input-desc').val();
  let rating = $(event.target).parent().find('.rating').val();
  if (!title) {
    return alert('Title cannot be blank');
  }
  if (!url) {
    return alert('Must provide a URL');
  }
  const editData = {
    'title': title,
    'url': url,
    'desc': desc,
    'rating': rating
  };

  //Passing our new object into PATCH API
  patchAPI(BASE_URL, id, editData);
  //I know the alert is there, but doing an extra toggle so the user has some visual feedback after submitting
  $(event.target).parent().find('.description').toggleClass('collapsed');
  //Hiding the buttons before the alert because it had a delay when reloading, looks cleaner on frontend
  $(event.target).parent().find('.save-cancel').toggleClass('hidden');
  //Alert so user confirms their click
  alert('Bookmark updated!');
  //generate screen again to reflect changes
  getApi(BASE_URL);
}

function cancelBtn() {
  event.preventDefault();
  getApi(BASE_URL);
}

function removeBtn() {
  event.preventDefault();
  if (window.confirm('Are you sure you want to delete this bookmark?')) {
    let id = $(event.target).parent().find('.title').attr('id');
    deleteAPI(BASE_URL, id);
    alert('Bookmark deleted!');
    getApi(BASE_URL);
  }
}

//***Main - initial GET + listeners***//

$(document).ready(function() {
  getApi(BASE_URL);
  addListener();
  submitListener();
  expandListener();
  editListener();
  saveListener();
  cancelListener();
  removeListener();
});

