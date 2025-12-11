const loadAbout = () => {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const title = content.appendChild(document.createElement('h2'));
  title.textContent = 'About';

  const description = content.appendChild(document.createElement('p'));
  description.textContent = 'Mauris facilisis, sem in bibendum pellentesque, nulla justo ultrices libero, a dictum nisi ex vitae mi. Nunc dictum ut sem eu dapibus. Duis sit amet orci malesuada, eleifend metus sed, feugiat libero. Praesent viverra consequat congue. Fusce a eros vitae purus hendrerit sagittis. Proin pharetra lacus vitae rhoncus rutrum. Proin.';

  return content;
};

export default loadAbout;
