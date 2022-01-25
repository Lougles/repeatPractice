console.group('Task -2');
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const reflist = (arr) => {
    const ulRef = document.querySelector('#ingredients');
    return arr.map((item) => {
      const liRef = document.createElement('li');
      liRef.textContent = item;
      ulRef.append(liRef);
    });
  }

 reflist(ingredients);

  console.groupEnd();