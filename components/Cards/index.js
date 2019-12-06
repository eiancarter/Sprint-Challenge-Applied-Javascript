// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data);
    const newArrays = Object.entries(response.data.articles);
    console.log(newArrays);

    newArrays.forEach(item => {
      item[1].forEach(data => {
        const newCard = createCard(data);
        cardData.append(newCard);
      })
    })
  })
  .catch(error => {
    console.log(error);
  })


const cardData = document.querySelector('.cards-container');

function createCard (object) {
    //variables
      const card = document.createElement('div');
      const headlineDiv = document.createElement('div');
      const authorDiv = document.createElement('div');
      const imgContainer = document.createElement('div');
      const imgSource = document.createElement('img');
      const authorsName = document.createElement('span');
    //append children
      card.appendChild(headlineDiv);
      card.appendChild(authorDiv);
      authorDiv.appendChild(imgContainer);
      imgContainer.appendChild(imgSource);
      authorDiv.appendChild(authorsName);
    //add classes
      card.classList.add('card');
      headlineDiv.classList.add('headline');
      authorDiv.classList.add('author');
      imgContainer.classList.add('img-container');
    //text content
      headlineDiv.textContent = object.headline;
      imgSource.src = object.authorPhoto;
      authorsName.textContent = object.authorName;
    
      return card
    }
    