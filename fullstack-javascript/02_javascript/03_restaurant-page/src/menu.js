import { menuData } from './menuData.js';

const loadMenu = () => {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const title = content.appendChild(document.createElement('h2'));
  title.textContent = 'Menu';

  const description = content.appendChild(document.createElement('p'));
  description.textContent = 'Cras eget enim et libero consectetur maximus sit amet et nunc. Suspendisse posuere tortor vitae vehicula mollis. Aenean tempus ultricies neque vel mattis. Mauris iaculis faucibus accumsan. In semper sit amet purus ut efficitur. Sed sollicitudin mi massa, quis dignissim sem consequat non. Duis placerat, nulla sit amet finibus pharetra.';

  const menuList = content.appendChild(document.createElement('div'));
  menuList.id = 'menu-list';

  Object.entries(menuData).forEach(([sectionName, items]) => {
    const sectionHeader = menuList.appendChild(document.createElement('h3'));
    sectionHeader.textContent = sectionName;

    items.forEach((item) => {
      const itemDiv = menuList.appendChild(document.createElement('div'));
      const itemTitle = itemDiv.appendChild(document.createElement('h4'));
      itemTitle.textContent = `${item.name} - ${item.price}`;
      const itemDescription = itemDiv.appendChild(document.createElement('p'));
      itemDescription.textContent = item.description;
    });
  });

  return content;
};

export default loadMenu;
