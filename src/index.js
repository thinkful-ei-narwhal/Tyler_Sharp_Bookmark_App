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

function postAPI(BASE_URL, title, url, desc, rating) {
  fetch(BASE_URL, {
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

//Delete Entry

//*****Index.js Module*****//


//**HTML Functions**//
function renderHTML(data) {
  let star = '\&#9733';
  let htmlString = '<form class="bookmarks"><ol class="list">';
  for (let i = 0; i < data.length; i++) {
    htmlString += `<input class="edit" type="button" value="Edit" id="edit-${data[i].id}"></input>
                  <li><label for="title-${data[i].id}">Title</label>
                  <input class="entry title" type="text" value="${data[i].title}" id="title-${data[i].id}" disabled></input>
                  <label for="url-${data[i].id}"></label>
                  <input class="entry url" type="url" id="url-${data[i].id}" value="${data[i].url}" disabled></input>
                  <label for="desc-${data[i].id}" class="hidden">Description</label>
                  <input class="entry description hidden" type="text" id="desc-${data[i].id}" value="${data[i].desc}" disabled></input>
                  <label for="rating-${data[i].id}">Rating</label>
                    <select class="entry stars" name="ratings" id="rating-${data[i].id}" disabled>
                      <option value="">---No Rating---</option>
                      <option value="1">${star}</option>
                      <option value="2">${star}${star}</option>
                      <option value="3">${star}${star}${star}</option>
                      <option value="4">${star}${star}${star}${star}</option>
                      <option value="5">${star}${star}${star}${star}${star}</option>
                    </select>
                  <input class="goBtn" type="button" value="Go!" onclick="window.open('${data[i].url}')" id="go-${data[i].id}"></input>
                  </li>`;
  }
  htmlString += '</ol></form>';
  $('.bookmark-list').append(htmlString);
}

//**Event Listeners **//
// function editListener() {
//   //Finds the "input" children of the selected entry and turns off all "disabled" inputs.
//   $('.editBtn').on('click', function (){
//     editBtn();
//   });
// }

//**Buttons**//
function editBtn() {
  event.preventDefault();
  //let editLi = event.currentTarget.querySelector('li');
  $(this).children('.entry').removeAttr('disabled');
  //$('.entry').removeAttr('disabled');
  
}


//postAPI(BASE_URL, "Yahoo", "http://yahoo.com")

//Main - should include initial GET and listeners
function main() {
  getApi(BASE_URL);
}



$(document).ready(function() {
  main();
  $('.bookmark-list').on('click', '.edit', function() {
    editBtn();
  });
});

