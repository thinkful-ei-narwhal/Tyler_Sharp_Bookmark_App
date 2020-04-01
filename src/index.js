import $ from 'jquery';
import css from './index.css';
import cuid from 'cuid';

//*****API.js Module*****//

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tylersharp/bookmarks/';

function getApi(BASE_URL, ...args) {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => renderHTML(data));

}

function postAPI(BASE_URL, ) {
  fetch(BASE_URL+id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'title': title,
      'url': url,
      'desc': desc,
      'rating': rating
    })
  });
}

//*****Store.js Module*****//

//Add New Entry

//Edit Entry
function patchAPI(BASE_URL, id, editData) {
  console.log(editData);
  fetch(BASE_URL+id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editData)
  });
}

//Delete Entry

//*****Index.js Module*****//


//**HTML Functions**//
function renderHTML(data) {
  let star = '\&#9733';
  let htmlString = '<form class="bookmarks"><ol>';
  for (let i = 0; i < data.length; i++) {
    if (!data[i].rating) {
      data[i].rating = 3;
    }
    if (!data[i].desc) {
      data[i].desc = 'No description provided';
    }
    htmlString += `
                  <li><label for="title-${data[i].id}" class="l-title">Title</label>
                  <input class="entry title" type="text" value="${data[i].title}" id="${data[i].id}" disabled></input>
                  <label for="url-${data[i].id}"></label>
                  <input class="entry url" type="url" id="url-${data[i].id}" value="${data[i].url}" disabled></input>
                  <label for="desc-${data[i].id}" class="description collapsed">Description</label>
                  <input class="entry input-desc description collapsed" type="text" id="desc-${data[i].id}" value="${data[i].desc}" disabled></input>
                  <label for="rating-${data[i].id}">Rating</label>
                  <input class="entry rating" type="number" min="1" max="5" value="${data[i].rating}" disabled></input>
                  <input class="btn description collapsed go" type="button" value="Go!" onclick="window.open('${data[i].url}')" id="go-${data[i].id}"></input>
                  <input class="btn go-edit edit" type="button" value="Edit" id="edit-${data[i].id}"></input>
                  <input class="btn cancel save-cancel hidden" type="button" value="Cancel" id="cancel"</input>
                  <input class="btn save save-cancel hidden" type="button" value="Save" id="save"></input>
                  </li>`;
  }
  htmlString += '</ol></form>';
  $('.bookmark-list').append(htmlString);
}


//**Event Listeners **//
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

//**Buttons**//
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
    "title": title,
    "url": url,
    "desc": desc,
    "rating": rating
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
  window.location.reload(true);
}

function cancelBtn() {
  event.preventDefault();
  window.location.reload(true);
}

//***Main - initial GET + listeners***//

$(document).ready(function() {
  getApi(BASE_URL);
  expandListener();
  editListener();
  saveListener();
  cancelListener();
});

