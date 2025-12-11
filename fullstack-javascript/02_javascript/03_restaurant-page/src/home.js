const loadHome = () => {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const title = content.appendChild(document.createElement('h2'));
  title.textContent = 'Home';

  const description = content.appendChild(document.createElement('p'));
  description.textContent = 'Nam ullamcorper mauris ac quam consectetur, quis tempor tellus pretium. In hac habitasse platea dictumst. Nulla eget sagittis nulla. Morbi tortor dui, ullamcorper sed enim ut, convallis gravida metus. Quisque tristique vitae est eget vestibulum. Donec lobortis hendrerit iaculis. Curabitur vitae dolor justo. Suspendisse ultrices mollis suscipit. Sed elementum ante.';

  return content;
};

export default loadHome;
