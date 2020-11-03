const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;

  // SNACK BARRRRRR
 function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}  

// IMAGE THINGY 
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 

function 
  openPage(pageName, elmnt, color) { 
  // Hide all elements with class="tabcontent" by default */  
  var i, tabcontent, tablinks;  tabcontent = 
  document.getElementsByClassName("tabcontent");  
  for (i = 0; i < tabcontent.length; i++) {    
  tabcontent[i].style.display = "none";  
  }
  // Remove the background color of all tablinks/buttons  
  tablinks = document.getElementsByClassName("tablink");  
  for (i = 0; i < tablinks.length; i++) {    
  tablinks[i].style.backgroundColor = "";  
  }
  // Show the specific tab content  
  document.getElementById(pageName).style.display = "block";
  // Add the specific color to the button used to open the tab content  
  elmnt.style.backgroundColor = color;}
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

