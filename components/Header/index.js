// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headContainer = document.querySelector('.header-container')

function Header() {
    //variables
const headerDiv = document.createElement('div');
const headerDate = document.createElement('span');
const headerTitle = document.createElement('h1');
const headerTemp = document.createElement('span');

    //classes
headerDiv.classList.add('header');
headerDate.classList.add('date');
headerTemp.classList.add('temp');

    //appendchildren
headerDiv.appendChild(headerDate);
headerDiv.appendChild(headerTitle);
headerDiv.appendChild(headerTemp);
    //text content
headerDate.textContent = 'SMARCH 28, 2019';
headerTitle.textContent = 'Lambda Time';
headerTemp.textContent = '98 degrees'
    //return
return headerDiv
}

headContainer.appendChild(Header());

