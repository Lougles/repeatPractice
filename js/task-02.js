console.group('Task -2');
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

// метод который возвращает li elem (лучше чем нижний)
  const reflist = item => { 
    const liRef = document.createElement('li');
    liRef.textContent = item;
    return liRef;
  }
  //перебор массива с вызовом метода
const ingredient = ingredients.map(item => reflist(item));
const ulRef = document.querySelector('#ingredients');
// вставка в дом происходит за одну операцию.
ulRef.append(...ingredient);



// Этот способ добавляет в ДОМ не за одну операцию вставки.
  // const reflist = (arr) => {
    // const ulRef = document.querySelector('#ingredients');
    // return arr.map((item) => {
    //   const liRef = document.createElement('li');
    //   liRef.textContent = item;
    //   ulRef.append(liRef);
    // });
  // }
//  reflist(ingredients);

  console.groupEnd();