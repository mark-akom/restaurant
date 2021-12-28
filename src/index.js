import { buildIntro, buildContact } from "./home";
import buildAboutUs from "./about";

const content = document.querySelector('#content');

function buildNavigationBar() {
    const navBar = document.createElement('div');
    const logoText = document.createElement('h2');
    logoText.textContent = `Koby's Restaurant`;
    const navLinks = document.createElement('ul');

    navLinks.addEventListener('click', function(e) {
        const elm = e.target;
        if( elm.tagName === 'LI') {
            console.log(elm.textContent);
            const pageContents = Array.from(content.children)

            for (let i = 0; i < pageContents.length; i++) {
                content.removeChild(pageContents[i]);
            }

            // check which to render

            if (elm.textContent === 'Home') {
                document.title = `Koby's Restaurant Project`;
                content.appendChild(buildNavigationBar());
                content.appendChild(buildIntro());
                content.appendChild(buildContact());
                content.appendChild(buildFooter());
 
            } else if (elm.textContent === 'Menu') {
                document.title = 'Our Menu - Koby\'s Restaurant';
                content.appendChild(buildNavigationBar());
                
                content.appendChild(buildFooter());
            } else {
                document.title = `About Us - Koby's Restaurant`;
                content.appendChild(buildNavigationBar());
                content.appendChild(buildAboutUs());
                content.appendChild(buildFooter());
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
    copyright.textContent = `CopyRight &copy; 2021`;
    const logoText = document.createElement('h2');
    logoText.textContent = `Koby's Restaurant`;
    logoText.classList.add('logo-text');

    // append the all to the footer
    footer.appendChild(copyright);
    footer.appendChild(logoText);

    return footer;
}

(function(){
    content.appendChild(buildNavigationBar());
    content.appendChild(buildIntro());
    content.appendChild(buildContact());
    content.appendChild(buildFooter());
})()
