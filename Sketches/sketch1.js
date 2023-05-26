function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //Below draws the face line 8 is the color line 9 is the shape
  fill('SandyBrown')
  ellipse(200,200,200,300)
  
   //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
  //eyes
  
  strokeWeight(0)
  fill('sienna')
  ellipse( 145,145,50,50)
  ellipse(260,145,50,50)
  fill('antiquewihte')
   ellipse( 145,145,30,30)
  ellipse(260,145,30,30)
  fill('black')
  ellipse( 145,145,10,10)
   ellipse(260,145,10,10)
  
  //glasses
  fill('sienna')
  rect(160, 138, 80, 10)
  
  //ears
  fill('sandybrown')
  ellipse(143,46,40,72) 
  ellipse(247,46,40,72)
  fill('lightpink')
   ellipse(143,46,20,40) 
  ellipse(247,46,20,40)
  
  strokeWeight(2)
  //nose
  line(151,268,161,280)
  line(241,281,252,269)
  //eyebrows
  strokeWeight(2)
  line(127,112,159,112)
  line(237,112,270,112)
  
  //mouth
  fill('sandybrown')
  arc(200,300,80,50,0,PI)
  
}