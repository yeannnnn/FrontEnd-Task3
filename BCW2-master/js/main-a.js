// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
const showImages = (html) => {  //html is parameter
  document.querySelector('ul').innerHTML = html;
};

fetch('images.html').then((response) => { //response is the only parameter, ()可以不要
  //console.log(response.text()); //response.text() is a promise
  return response.text();
}).then((html) => {
  showImages(html);
});




