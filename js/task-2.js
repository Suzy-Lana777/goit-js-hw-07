const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// =============== Варіант з використанням 2 функцій =============

// const imgGallery = document.querySelector('.gallery');

// // Пишемо першу функцію, яка створює розмітку 1 елемента:

// function imageTemplate(item) {
//   return `<li class="js-img">
//   <img src = "$item.url" alt = "$item.alt" />
//   </li>`;
// }

// // Пишемо другу функцію, яка створює розмітку для всіх елементів:

// function imagesTemplate(items) {
//   return items.map(imageTemplate).join('');
// }

// const markup = imagesTemplate(images);

// imgGallery.insertAdjacentHTML("afterbegin", markup);

// ================================================

const gallery = images.map(el => `<li class="gallery-item">
<a href="#">
<img class="gallery-img" src="${el.url}" alt="${el.alt}" />
</a>
</li>`).join("");

const ulFind = document.querySelector(".gallery");

ulFind.innerHTML = gallery;