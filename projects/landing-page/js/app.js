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

//variables
const sectionHeaders = document.querySelectorAll('.landing__container');
const navBarList = document.createElement('ul');
const navBarMenu = document.querySelector('.navbar__menu');
const footer = document.querySelector('.page__footer');
const allSections = document.querySelectorAll('section');



// builds the navbar items
navBarList.setAttribute('class','navbar__list');

for(let i = 0; i < sectionHeaders.length; i++){
    const headerText = sectionHeaders[i].querySelector('.sectionHeader').innerHTML;
    const newLi = document.createElement('li');
    
    newLi.textContent = headerText;
    newLi.setAttribute('class', 'navItems menu__link');
    navBarList.appendChild(newLi);   
};

navBarMenu.append(navBarList);

// scrolls to section on navbar item click
document.addEventListener('click', function(event) {
    const navClick = event.path[0].innerHTML
    if (event.target.tagName === "LI") {
        const goTo = document.querySelector('[data-nav = "' + navClick + '"]');   
        goTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});   
    };
});


// checks what is in the viewport
const allNavbarLi = document.querySelectorAll('li');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
  
    return (rect.bottom >= 0 && 
        rect.right >= 0 && 
        rect.top >= 0 && 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.left <= (window.innerWidth || document.documentElement.clientWidth));
}

// applies active class on nav item
const allNavItems = document.querySelectorAll('.navItems');

function isActiveLi(textInput) {
    allNavItems.forEach(item => {
        if (item.innerHTML == textInput) {
            item.setAttribute('class', 'navItems menu__link active');
        } else {
            item.setAttribute('class', 'navItems menu__link')
        };
    });
};

// scroll event listener
window.addEventListener('scroll', function() {
    
    allSections.forEach(section => {
        const sectionParagraph = section.querySelectorAll('p');         
        const activeSection = section.querySelector('h2').innerHTML;

        for (let para of sectionParagraph){
            if (isInViewport(para)) {
                section.setAttribute('class', 'active');
                isActiveLi(activeSection);
            break;
            }
            else {
                section.setAttribute('class', 'inactive');
            };
        };        
    });
});
