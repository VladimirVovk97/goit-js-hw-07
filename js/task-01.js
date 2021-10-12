const categories = document.querySelectorAll('li.item')
console.log(`В списке ${categories.length} категории`);
categories.forEach(element => {
    const categoryTitle = element.querySelector('h2').textContent;
    const categoryEl = element.querySelectorAll('li').length;
    console.log(`Категория:${categoryTitle}\nКоличество элементов: ${categoryEl}`,
);
});

