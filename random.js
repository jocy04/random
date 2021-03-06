var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
  makeEllipse(80,62,22,42,"darkorange")
makeRect(67,74,15,20)
makeRect(105,20,50,62,"yellow")
makeCircle(120,39,8,"white")
makeCircle(142,39,8,"white")
makeCircle(120,39,5)
makeCircle(142,39,5)
makeRect(125,50,10,5,"red")
makeRect(105,59,50,18,"brown")
makeRect(109,75,5,51,"yellow")
makeRect(145,75,5,51,"yellow")
makeCircle(90,81,7,"darkgrey")
makeCircle(70,50,7,"darkgrey")
makeRect(103,49,5,40,"yellow")
makeRect(150,49,5,40,"yellow")
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
  makeRect(59,35,40,65,"darkgray")
  makeRect(70,79,16,23,"chocolate")
  makeCircle(69,54,6,"darkcyan")
  makeCircle(89,54,6,"darkcyan")
  makeRect(74,50,10,27,"darkgoldenrod")
  makeRect(105,20,50,62,"yellow")
  makeCircle(120,39,8,"white")
  makeCircle(142,39,8,"white")
  makeCircle(120,39,5,"black")
  makeCircle(142,39,5,"black")
  makeRect(125,50,10,5,"red")
  makeRect(105,63,50,18,"brown")
  makeRect(105,75,5,51,"yellow")
  makeRect(145,75,5,51,"yellow")
  makeRect(103,49,5,40,"yellow")
  makeRect(150,49,4,40,"yellow")
  makeLine(99,44,60,42,"black",4,0.4)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeCircle(66,63,34,"maroon")
makeRect(105,20,50,62,"yellow")
makeCircle(120,39,8,"white")
makeCircle(142,39,8,"white")
makeCircle(120,39,5)
makeCircle(142,39,5)
makeRect(125,50,10,5,"red")
makeRect(105,64,50,18,"brown")
makeRect(105,75,5,51,"yellow")
makeRect(145,75,5,51,"yellow")
makeRect(103,49,5,40,"yellow")
makeRect(150,49,4,40,"yellow")
makeLine(50,1,29,37,"black",4)
makeLine(170,22,"black",4)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
var rando = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
      if(rando < 0.33){
      createFirstScene()
      }else if(rando < 0.67){
      createSecondScene()
      }else{
      createThirdScene()

    // Else, call the function to create your third scene.


    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
