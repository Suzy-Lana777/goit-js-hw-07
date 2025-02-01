// Спочатку отримуємо доступ до елементів у DOM:

const liElems = document.querySelectorAll('.item');
// Виводимо кількість категорій в консоль:
console.log(`Numbers of categories: ${liElems.length}`);

// Для кожного елемента li.item у списку ul#categories виводимо назву та кількість елементів у категорії,
// виконуємо пошук елементу h2 всередині об'єкта змінної "item", а потім отримується текстовий вміст цього елементу:

liElems.forEach(liElem => {
const categoryTitle = `Category: ${liElem.querySelector("h2").textContent}`;
const categoryElements = `Elements: ${liElem.querySelectorAll("ul li").length}`;
console.log(categoryTitle)
console.log(categoryElements)
});