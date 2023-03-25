const data = [
    {
        id:1,
        price:200,
        src:'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UL320_.jpg',
        name:'Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM',
        category:'laptop'
    },
    {
        id:2,
        price:300,
        src:'https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL320_.jpg',
        name:'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen,',
        category:'phone'
    },
    {
        id:3,
        price:2500,
        src:'https://m.media-amazon.com/images/I/718B6zl+b6L._AC_UL320_.jpg',
        name:'SAMSUNG Galaxy Tab S6 Lite 10.4" 64GB Android Tablet',
        category:'phone'
    },
    {
        id:4,
        price:1500,
        src:'https://m.media-amazon.com/images/I/610Pe9IL51L._AC_UY218_.jpg',
        name:'Withings ScanWatch - Hybrid Smartwatch & Activity Tracker',
        category:'watch'
    },
    {
        id:5,
        price:400,
        src:'https://m.media-amazon.com/images/I/51uTzQauJOL._AC_SX425_.jpg',
        name:'MorePro Smart Watch, Fitness Tracker with Heart Rate Blood Pressure Monitor',
        category:'watch'
    },
    {
        id:6,
        price:200,
        src:'https://m.media-amazon.com/images/I/41W70+otIaL._AC_UL1500_.jpg',
        name:"Oakley Men's Oo9102 Holbrook Square Sunglasses",
        category:'glass'
    },
];

const productsContainer = document.querySelector('.products');
const input = document.querySelector('input');
const categoriesContainer = document.querySelector('.categories');
const rangeInput = document.querySelector('.range');
const rangepercen = document.querySelector('.rangepercen');


const showProducts = (filteredData) => {
 productsContainer.innerHTML = filteredData.map((item) => `<div class="product">
    <div class='image'><img
      src=${item.src}
      alt=""
    /></div>
    <div class="name">${item.name}</div>
    <div class="price">price: ${item.price}$</div>
    </div>`
).join("");
};

const showCategory = () => {
    const allCategory = data.map((item) => item.category)
    const categories = ['all', ...new Set(allCategory)];
    categoriesContainer.innerHTML = categories.map((item) => `   <div class="category">${item}</div>`).join("");
};

input.addEventListener('keyup', (e) => {
    const value = e.target.value.toLocaleLowerCase();
    if(value) {
        const filterdD = data.filter((item) => item.name.toLocaleLowerCase().includes(value))
        showProducts(filterdD)
    }else{
        showProducts(data)
    }
});

showCategory();

const allCategories = document.querySelectorAll('.category');

allCategories.forEach((item) => {
    item.addEventListener('click', (e) => {
        const text = e.target.textContent.toLocaleLowerCase();
        if(text === 'all') return showProducts(data)
        const filterdD = data.filter((item) => item.category.toLocaleLowerCase()=== text)
        showProducts(filterdD)
    })
})

const showMinMax = () => {
    const allPrice = data.map(item => item.price);
    const maxPrice = Math.max(...allPrice);
    const minPrice = Math.min(...allPrice);
    rangeInput.min =minPrice;
    rangeInput.max = maxPrice;
    rangepercen.textContent = 0;
    rangeInput.addEventListener('input', (e) => {
      const value = e.target.value
        showProducts(data.filter((item) => item.price <= value))
        rangepercen.textContent =`$${value}`
        
    })
}
showMinMax()
showProducts(data)