function changeText(){

	document.getElementById("heading").textContent = "You changed the heading!";}

//modify CSS styles via JavaScript
function changeStyle() {
	 document.getElementById("description").style.color = "blue";
             document.getElementById("description").style.fontSize = "20px";             }
// Function to add or remove an element when a button is clicked
function toggleElement() {
        let container = document.getElementById("container");
        if (container.innerHTML === "") {
        	let newElement = document.createElement("p");
                newElement.textContent = "A new element has been added!";
                newElement.style.color = "green";
		container.appendChild(newElement);
                } else{
		   container.innerHTML = ""; 
}}
