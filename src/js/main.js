"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const list = document.querySelector('.list--js');

fetch ("https://api.github.com/users/annamazurek/repos?sort=created&direction=desc")
  .then (resp => resp.json())
  .then (resp => {
    const repositories = resp; //żeby było czytelniej (dobra praktyka)
    for (const {name, html_url} of repositories){
      list.innerHTML += `<li class="list__item"><a class="list__link" href="${html_url}">${name}</a></li>`;
    
    }
  })
  .catch(err => {
    console.log(err);
  })