const content = document.getElementById('content');

const menu = [
  {
    name: 'item1',
    description: 'a description for item1',
    price: '$0.00',
  },
  {
    name: 'item2',
    description: 'a description for item2',
    price: '$0.00',
  },
  {
    name: 'item3',
    description: 'a description for item3',
    price: '$0.00',
  },
];

const pages = {
  home: {
    title: 'Home',
    description:
      'Nam ullamcorper mauris ac quam consectetur, quis tempor tellus pretium. In hac habitasse platea dictumst. Nulla eget sagittis nulla...'
  },
  menu: {
    title: 'Menu',
    description:
      'Cras eget enim et libero consectetur maximus sit amet et nunc. Suspendisse posuere tortor vitae vehicula mollis...'
  },
  about: {
    title: 'About',
    description:
      'Mauris facilisis, sem in bibendum pellentesque, nulla justo ultrices libero, a dictum nisi ex vitae mi...'
  }
};

const pageTitle = content.appendChild(document.createElement('h2'));
const pageDescription = content.appendChild(document.createElement('p'));

const menuList = content.appendChild(document.createElement('div'));
menuList.id = 'menu-list';
menu.forEach((item) => {
  const itemDiv = menuList.appendChild(document.createElement('div'));

  const itemTitle = itemDiv.appendChild(document.createElement('h3'));
  itemTitle.textContent = `${item.name} - ${item.price}`;

  const itemDescription = itemDiv.appendChild(document.createElement('p'));
  itemDescription.textContent = item.description;
});

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

const renderContent = (page) => {
  switch (page) {
    case 'home':
      pageTitle.textContent = 'Home';
      pageDescription.textContent =
        'Nam ullamcorper mauris ac quam consectetur, quis tempor tellus pretium. In hac habitasse platea dictumst. Nulla eget sagittis nulla. Morbi tortor dui, ullamcorper sed enim ut, convallis gravida metus. Quisque tristique vitae est eget vestibulum. Donec lobortis hendrerit iaculis. Curabitur vitae dolor justo. Suspendisse ultrices mollis suscipit. Sed elementum ante.';
      break;
    case 'menu':
      pageTitle.textContent = 'Menu';
      pageDescription.textContent =
        'Cras eget enim et libero consectetur maximus sit amet et nunc. Suspendisse posuere tortor vitae vehicula mollis. Aenean tempus ultricies neque vel mattis. Mauris iaculis faucibus accumsan. In semper sit amet purus ut efficitur. Sed sollicitudin mi massa, quis dignissim sem consequat non. Duis placerat, nulla sit amet finibus pharetra.';
      break;
    case 'about':
      pageTitle.textContent = 'About';
      pageDescription.textContent =
        'Mauris facilisis, sem in bibendum pellentesque, nulla justo ultrices libero, a dictum nisi ex vitae mi. Nunc dictum ut sem eu dapibus. Duis sit amet orci malesuada, eleifend metus sed, feugiat libero. Praesent viverra consequat congue. Fusce a eros vitae purus hendrerit sagittis. Proin pharetra lacus vitae rhoncus rutrum. Proin.';
      break;
    default:
      break;
  }

  menuList.style.display = page !== 'menu' ? 'none' : 'flex';
};

// initial render
renderContent('home');

homeBtn.addEventListener('click', () => renderContent('home'));
menuBtn.addEventListener('click', () => renderContent('menu'));
aboutBtn.addEventListener('click', () => renderContent('about'));
