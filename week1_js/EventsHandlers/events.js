/* write a function that can handle the page load event
when it occurs. The function will announce “I’m alive!” when
it knows the page is fully loaded.
*/

function pageLoadedHandler() {
  alert('hello world!');
}

//we register our event handler with the browser 
//we assign the name of the handler to the window's onload property
window.onload = pageLoadedHandler;


/* the browser will invoke the function assigned to the window.onload
property when the page is loaded
*/