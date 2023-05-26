function setup() {
  createCanvas(300, 300);
}
function draw() {
  background(120);
  line(150, 0, 150, 300);
  line(0, 150, 300, 150);
  
  //top left
  if (mouseY <150 && mouseX <= 150) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 50, 50);
    text ( 'THE WORLD', 20,134)
  }
  //bottom left
  else if (mouseY > 150 && mouseX <= 150) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
    text ( 'DOWN', 55,279)
    
  }
  
  //bottom right
  else if (mouseY > 150 && mouseX <= 300) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
    text("SIDE", 201,277)
    
  }
   //top right
  else if (mouseY < 150 && mouseX >150) {
    fill(255, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    text ( 'TURNED UP', 173,133)
  }
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}







