/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
imageList = ['/Users/eiancarter/Desktop/LambdaProjects/Sprint-Challenge-Applied-Javascript/assets/bones.jpg','assets/fido.jpg','assets/max.jpg','assets/puppers.jpg']

const carouselData = document.querySelector('.carousel-container');
carouselData.appendChild(createCarousel(imageList));

function createCarousel (array) {
    //variables
      const carousel = document.createElement('div');
      const leftButton  = document.createElement('div');
      const imgSource1 = document.createElement('img');
      const imgSource2 = document.createElement('img');
      const imgSource3 = document.createElement('img');
      const imgSource4 = document.createElement('img');
      const rightButton = document.createElement('div');
    //append children
      carousel.appendChild(leftButton);
      carousel.appendChild(imgSource1);
      carousel.appendChild(imgSource2);
      carousel.appendChild(imgSource3);
      carousel.appendChild(imgSource4);
      carousel.appendChild(rightButton);
    //add classes
      card.classList.add('carousel');
      leftButton.classList.add('left-button');
      rightButton.classList.add('right-button');
    //text content
      leftButton.textContent = 'Left';
      rightButton.src = 'Right';
      imgSource1.src = array[0];
      imgSource2.src = array[1];
      imgSource3.src = array[2];
      imgSource4.src = array[3];
 
    
  return carousel
}
