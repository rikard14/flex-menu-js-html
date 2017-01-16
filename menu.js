"use strict"; //use a better sub-part of JavaScript
//uses JQuery

//Is called when the Document Object Model (DOM) is fully loaded.
$(document).ready(function(){ 
	//print debug info to console window
	console.log("starting script");

     //variables
     var url = window.location.href;
     var indexOfLastSlash = url.lastIndexOf("/");
     var urlAfterSlash = url.substr(indexOfLastSlash + 1);

     //loop through all a-tags within a nav-tag, one at the time
     $("nav a").each(function(){
     	//compare the part of the url after the last /, with href in the a-tag.
          if($(this).attr("href") == urlAfterSlash || $(this).attr("href") == '' )
          {
               //if equal add class="selected" to this a-tag.
          	$(this).addClass("selected");
          }
          //print debug info to console window
          console.log("url after slash: " + urlAfterSlash);        
     })
});