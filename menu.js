"use strict"; //use a better sub-part of JavaScript
//uses JQuery
$(document).ready(function(){ 
	//print debug info to console window
	console.log("starting script");
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
     //loop through all a-tags one at the time
     $("nav a").each(function(){
     	  //compare the part of the url after the last /, with href in the a-tag.
     	  //if equal add class="selected" to this a-tag.
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          {
          	$(this).addClass("selected");
          }
          //print debug info to console window
          console.log("url: " + pgurl);        
     })
});