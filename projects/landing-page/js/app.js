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

const sectionHeaders = document.querySelectorAll('.landing__container');
const navBarList = document.getElementById('navbar__list');
const footer = document.querySelector('.page__footer');
const allSections = document.querySelectorAll('section')

// builds the navbar items
for(let i = 0; i < sectionHeaders.length; i++){
    const headerText = sectionHeaders[i].querySelector('.sectionHeader').innerHTML;
    const newLi = document.createElement('li');
    
    newLi.textContent = headerText;
    newLi.setAttribute('class', 'navItems');
    navBarList.appendChild(newLi)    
}

// scrolls to section on navbar item click
document.addEventListener('click', function(event) {
    const navClick = event.path[0].innerHTML
    if (event.target.tagName === "LI") {
        const goTo = document.querySelector('[data-nav = "' + navClick + '"]');   
        goTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});   
    }
})

// changes active state
const isInView = function(elem) {
    const distance = elem.getBoundingClientRect();

    return (
        (window.innerHeight || document.documentElement.clientHeight) >= distance.top &&
        (window.innerHeight || document.documentElement.clientHeight) <= distance.bottom
        );
};

window.addEventListener('scroll', function(event) {
    allSections.forEach(element => {
        if (isInView(element)) {
            element.setAttribute('class', 'landing__container active')
        } else {
            element.setAttribute('class', 'landing__container inactive')
        }
    });
}, false);


//section 3 top 87
//section 3 bottom 1051
//section 4 top 1051
//section 4 bottom 2015

//1045


