function 
  openPage(pageName, elmnt, color) { 
  // Hide all elements with class="tabcontent" by default */  
  var i, tabcontent, tablinks;  
  tabcontent = document.getElementsByClassName("tabcontent");  
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

/**
 * Resizes the given iFrame width so it fits its content
 * @param e The iframe to resize
 */
function resizeIframeWidth(e){
  // Set width of iframe according to its content
  if (e.Document && e.Document.body.scrollWidth) //ie5+ syntax
      e.width = e.contentWindow.document.body.scrollWidth;
  else if (e.contentDocument && e.contentDocument.body.scrollWidth) //ns6+ & opera syntax
      e.width = e.contentDocument.body.scrollWidth + 35;
  else (e.contentDocument && e.contentDocument.body.offsetWidth) //standards compliant syntax – ie8
      e.width = e.contentDocument.body.offsetWidth + 35;
}