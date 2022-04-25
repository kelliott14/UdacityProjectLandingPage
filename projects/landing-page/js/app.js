/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const sectionHeaders = document.querySelectorAll('.landing__container')
const navBarList = document.getElementById('navbar__list')
console.log(navBarList)

for(let i = 0; i < sectionHeaders.length; i++){
    const idLink = sectionHeaders[i].parentElement.id;
    const headerText = sectionHeaders[i].querySelector('.sectionHeader').innerHTML;
    
    const newLi = document.createElement('li');
    const newA = document.createElement('a');

    newA.textContent = headerText;
    newA.setAttribute('href', "#" + idLink);
    newLi.appendChild(newA);
    navBarList.appendChild(newLi)

    
}







