// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

//除了<h3><h3> 可以用html ,

const showImages = (images) => {
  const ul = document.querySelector('ul');
  images.forEach((image) => {

    // create elements
    const h3 = document.createElement('h3');
    const figcaption = document.createElement('figcaption');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const figure = document.createElement('figure');
    const li = document.createElement('li');

    // add text content
    const text = document.createTextNode(image.mediaTitle);
    h3.appendChild(text);

    // add attributes
    img.setAttribute('src', 'img/thumbs/' + image.mediaUrl);
    a.setAttribute('href', 'img/original/' + image.mediaUrl);

    // append elements
    figcaption.appendChild(h3);
    a.appendChild(img);
    figure.appendChild(a);
    figure.appendChild(figcaption);
    li.appendChild(figure);

    // insert new elements to page
    ul.appendChild(li);

  });
};

fetch('images.json').then((response) => {
  return response.json();
}).then((json) => {
  showImages(json);
});
