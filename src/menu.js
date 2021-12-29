import { data } from "./menuData";

function buldFilterBtn() {
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    const filterBtns = ['all'];

    data.forEach(item => {
        if (filterBtns.indexOf(item.category) < 0) {
            filterBtns.push(item.category);
        }
    });

    filterBtns.forEach(item => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        btn.textContent = item;
        btnGroup.appendChild(btn);
    });

    return btnGroup;

}

function buildMenu() {
    
    // create the dom elements for the menu page
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const menuHeading = document.createElement('h1');
    menuHeading.classList.add('menu-heading');

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    data.forEach(item => {

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
    
        const imgHolder = document.createElement('div');
        imgHolder.classList.add('img-holder');
    
        const menuImg = document.createElement('img');
        menuImg.src = item.imgUrl
    
        const menuDetails = document.createElement('div');
        menuDetails.classList.add('menu-details');
    
        const nameCat = document.createElement('div');
        nameCat.classList.add('name-cat');
    
        const menuTitle = document.createElement('h3');
        menuTitle.textContent = item.title
    
        const category = document.createElement('p');
        category.textContent = item.category
    
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price
    
        nameCat.appendChild(menuTitle);
        nameCat.appendChild(category);
    
        menuDetails.appendChild(nameCat);
        menuDetails.appendChild(price);
    
        imgHolder.appendChild(menuImg);
    
    
        menuItem.appendChild(imgHolder);
        menuItem.appendChild(menuDetails);
    
        menuItems.appendChild(menuItem);
    });


    // add the contents to the elements
    menuHeading.textContent = 'Our Menu';


    // append the elements
    menuSection.appendChild(menuHeading);
    menuSection.appendChild(buldFilterBtn());
    menuSection.appendChild(menuItems);

    return menuSection;
}

export default buildMenu;