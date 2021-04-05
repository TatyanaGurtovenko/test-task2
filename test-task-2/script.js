let data = {
  'Катал ог товаров': {
    'Мойки': {
      'Ulgran': {
        'Smth': {},
        'Smth': {}
      },
      'Vigro Mramor': {},
      'Handmade': {
        'Smth': {},
        'Smth': {}
      },
      'Vigro Glass': {}
    },
    'Фильтры': {
      'Ulgran': {
        'Smth': {},
        'Smth': {}
      },
      'Vigro Mramor': {},
    },
  },
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}
console.log(data)
function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');
  ul.className = 'tree-ul';

  let img = document.createElement('img');
  img.className = 'tree-img';
  img.src = './folder-black-18dp.svg'

  ul.append(img);

  for (let key in obj) {
    let li = document.createElement('li');
    
    li.innerHTML = key;
    li.className = 'tree-li';
    
    let childUl = createTreeDom(obj[key]);
    if (childUl) {
      li.append(childUl);
    }
    ul.append(li);
  }
  return ul;
}


let container = document.getElementById('container');

createTree(container, data);

tree = document.getElementById('container');


for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  let img = document.createElement('img');
  img.className = 'tree-img';
  img.src = './folder-black-18dp.svg';
  li.prepend(span);
  li.prepend(img);
  span.append(span.nextSibling); 
}

tree.onclick = function(event) {

  if (event.target.tagName != 'SPAN') return;
  
  let childContainer = event.target.parentNode.querySelector('ul');

  if (!childContainer) return;

  childContainer.hidden = !childContainer.hidden;
}
