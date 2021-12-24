import restaurant from './intro.jpg';
import { data, contactData } from './introData';

function buildIntro() {
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const img = document.createElement('img');
    img.classList.add('intro-img');

    const introDetails = document.createElement('div');
    introDetails.classList.add('intro-details');

    const introHeading = document.createElement('h1');
    introHeading.classList.add('intro-heading');

    const introInfo = document.createElement('div');
    introInfo.classList.add('intro-info');


    // setup the image
    img.src = restaurant;

    intro.appendChild(img);

    // build the intro text section
    introHeading.textContent = data.heading;
    introDetails.appendChild(introHeading);
    // construct the paragraphs sections

    for (let i = 1; i <= 2; i++) {
        const p = document.createElement('p');
        p.textContent = data['para'+ i];
        introDetails.appendChild(p);
    }

    // build the info section
    data.info.forEach(infoData => {
        const p = document.createElement('p');
        const span = document.createElement('span');
        span.classList.add('material-icons');
        span.textContent = infoData.spanText;
        p.appendChild(span);
        const t = document.createTextNode(infoData.pText);
        p.appendChild(t);

        introInfo.appendChild(p);
    })

    introDetails.appendChild(introInfo);
    intro.appendChild(introDetails);

    return intro;
    
}

function buildContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeading = document.createElement('h2')
    contactHeading.textContent = 'Visit Us Today';

    const contactList = document.createElement('div');
    contactList.classList.add('contact-list');
    // build the contact list
    contactData.material.forEach(data => {
        const p = document.createElement('p');
        const span = document.createElement('span');
        span.classList.add('material-icons')
        span.textContent = data.spanText;
        p.appendChild(span);
        const t = document.createTextNode(data.pText);
        p.appendChild(t);
        contactList.appendChild(p);
    });

    const social = document.createElement('div');
    social.classList.add('social');

    // build the social list
    contactData.fontawesome.forEach(data => {
        const a = document.createElement('a');
        a.href = data.link;
        const i = document.createElement('i');
        i.classList.add(data.class[0], data.class[1]);
        a.appendChild(i);
        social.appendChild(a);
    })


    contact.appendChild(contactHeading);
    contact.appendChild(contactList);
    contact.appendChild(social);

    return contact;

}

export { buildIntro, buildContact };