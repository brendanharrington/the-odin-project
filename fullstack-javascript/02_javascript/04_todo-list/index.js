const ITEMS = [
  {
    title: 'item 1',
    description: 'description for item 1',
    dueDate: 'due date for item 1',
    priority: 1,
    complete: false
  },
  {
    title: 'item 2',
    description: 'description for item 2',
    dueDate: 'due date for item 2',
    priority: 2,
    complete: false
  },
  {
    title: 'item 3',
    description: 'description for item 3',
    dueDate: 'due date for item 3',
    priority: 3,
    complete: false
  },
  {
    title: 'item 4',
    description: 'description for item 4',
    dueDate: 'due date for item 4',
    priority: 4,
    complete: false
  },
  {
    title: 'item 5',
    description: 'description for item 5',
    dueDate: 'due date for item 5',
    priority: 5,
    complete: false
  },
]

const content = document.getElementById('content');
const dialog = document.querySelector('dialog');
const createBtn = document.getElementById('create-btn');
const closeBtn = document.getElementById('close-btn');

const inbox = content.appendChild(document.createElement('h2'));
inbox.textContent = 'Inbox';

const list = content.appendChild(document.createElement('div'));
list.id = 'list';


ITEMS.forEach(item => {
  const itemEl = list.appendChild(document.createElement('div'));
  itemEl.classList.add('item');
  
  const checkbox = itemEl.appendChild(document.createElement('button'));
  checkbox.classList.add('checkbox');
  
  const itemDiv = itemEl.appendChild(document.createElement('div'));
  
  const itemTitle = itemDiv.appendChild(document.createElement('h3'));
  itemTitle.textContent = item.title;

  const itemDescription = itemDiv.appendChild(document.createElement('p'));
  itemDescription.textContent = item.description;
});

const section = content.appendChild(document.createElement('h2'));
section.textContent = 'Section';

createBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});
