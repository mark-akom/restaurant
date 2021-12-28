import { aboutData } from './introData';
import about from './about.jpg';

function buildAboutUs() {
    // create dom elements and add their classes
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    const aboutHeading = document.createElement('h1');
    aboutHeading.classList.add('about-heading');

    const firstPara = document.createElement('p');
    const secondPara = document.createElement('p');

    const img = document.createElement('img');
    img.classList.add('about-img');

    // create the contents for the elements
    aboutHeading.textContent =  `Why We Excel Soo Much - Koby's Restaurant`;
    firstPara.textContent = aboutData.firstPara;
    secondPara.textContent = aboutData.secondPara;
    img.src = about;

    //append all the elements to the about us section
    aboutSection.appendChild(aboutHeading)
    aboutSection.appendChild(firstPara);
    aboutSection.appendChild(img);
    aboutSection.appendChild(secondPara);

    return aboutSection;
}


export default buildAboutUs;