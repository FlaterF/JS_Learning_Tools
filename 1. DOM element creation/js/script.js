  //////////////////////////////////////////////////////////
 //     CREATE A DOM ELEMENT HERE AND THEN Show() IT     //
//////////////////////////////////////////////////////////

var newElement = document.createElement("a");

newElement.setAttribute("href", "http://www.google.be");
newElement.setAttribute("target", "_blank");
newElement.innerText = "Click me!";

Show(newElement);

