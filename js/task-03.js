 const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const ulRef = document.querySelector('#gallery');
const listOfImg = (url, alt) => {
  const liItem = document.createElement('li');
  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;
  liItem.appendChild(img);
  return liItem;
}
const gallImages = images.map(item => listOfImg(item.url, item.alt));
ulRef.append(...gallImages);