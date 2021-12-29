import { buildIntro, buildContact } from "./home";
import buildAboutUs from "./about";
import buildMenu from "./menu";

const content = document.querySelector('#content');

function buildNavigationBar() {
    const navBar = document.createElement('div');
    const logoText = document.createElement('h2');
    logoText.textContent = `Koby's Restaurant`;
    const navLinks = document.createElement('ul');

    navLinks.addEventListener('click', function(e) {
        const elm = e.target;
        if( elm.tagName === 'LI') {
            const pageContents = Array.from(content.children)

            for (let i = 0; i < pageContents.length; i++) {
                content.removeChild(pageContents[i]);
            }

            // check which to render

            if (elm.textContent === 'Home') {
                document.title = `Koby's Restaurant Project`;
                renderPage([buildIntro, buildContact]);
 
            } else if (elm.textContent === 'Menu') {
                document.title = 'Our Menu - Koby\'s Restaurant';
                renderPage([buildMenu]);
            } else {
                document.title = `About Us - Koby's Restaurant`;
                renderPage([buildAboutUs])
            }
        }
    })

    // add all the necessary styles
    navBar.classList.add('top-navbar');
    logoText.classList.add('logo-text');
    navLinks.classList.add('nav-links');

    // create the links for the pages
    const linksText = ['Home', 'Menu', 'About Us'];
    linksText.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        navLinks.appendChild(li);
    })

    // append all the necessary elements to the navBar

    navBar.appendChild(logoText);
    navBar.appendChild(navLinks);

    return navBar;
}

function buildFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = `CopyRight &copy; ${new Date().getFullYear()}`;
    const logoText = document.createElement('h2');
    logoText.textContent = `Koby's Restaurant`;
    logoText.classList.add('logo-text');

    // append the all to the footer
    footer.appendChild(copyright);
    footer.appendChild(logoText);

    return footer;
}

function renderPage(elements) {
    content.appendChild(buildNavigationBar());
    elements.forEach(elem => {
        content.appendChild(elem());
    });
    content.appendChild(buildFooter());
}

(function(){
    renderPage([buildIntro, buildContact]);
})()
