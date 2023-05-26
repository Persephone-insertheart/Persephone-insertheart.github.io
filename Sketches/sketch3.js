

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
background(255);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  
  //The Ground
  noStroke(); //this adds or removes s troke
  fill('lightgreen'); // chnages the color of grass
  rect(0,400,windowWidth,100);  // controls the size of the windows


  //The House
  fill('brown'); // changes the color of the entire house (the redish brown)
  stroke('red');  //this is the red border around the house
  rect(50,200,220,200);  //this is the shape of the house

  //Windows
  fill('white'); //the background /sky
  strokeWeight(10); //the suze of the grey lines
  stroke('grey'); //the color of the grey lines
  rect(80,250,50,50); //draws the rectangle on the right window
  rect(180,250,50,50); //draws the rectnagle on the left window

  //Triangle
  fill('brown'); //the internal color of the roof
  triangle(50,200, 100,100,270,200); //the size and shape of the roof
}