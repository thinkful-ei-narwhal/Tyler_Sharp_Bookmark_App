import $ from 'jquery';
import index from './index.js';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tylersharp/bookmarks/';

//GET List
function getApi(BASE_URL) {
  $('.bookmark-list').html('');
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => data.length === 0 ? index.index.generateHome() : index.index.renderHTML(data));
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


const api = {
  //container for all functions
  BASE_URL,
  getApi,
  patchAPI,
  postAPI,
  deleteAPI
};

export default {
  api
};

