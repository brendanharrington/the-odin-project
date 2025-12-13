const ITEMS = [
  {
    id: 't-001',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, and vegetables',
    dueDate: '2025-01-15',
    priority: 2,
    complete: false,
    project: 'Personal',
    tags: ['errands', 'shopping'],
    createdAt: '2025-01-10',
    updatedAt: '2025-01-10',
    notes: ''
  },
  {
    id: 't-002',
    title: 'Finish todo app UI',
    description: 'Implement list view and item detail modal',
    dueDate: '2025-01-18',
    priority: 5,
    complete: false,
    project: 'Side Projects',
    tags: ['coding', 'frontend'],
    createdAt: '2025-01-09',
    updatedAt: '2025-01-12',
    notes: 'Focus on accessibility and keyboard navigation'
  },
  {
    id: 't-003',
    title: 'Refactor task logic',
    description: 'Extract task creation and validation into a module',
    dueDate: '2025-01-20',
    priority: 4,
    complete: true,
    project: 'Side Projects',
    tags: ['refactor', 'javascript'],
    createdAt: '2025-01-05',
    updatedAt: '2025-01-11',
    notes: ''
  },
  {
    id: 't-004',
    title: 'Submit job application',
    description: 'Complete application and upload resume',
    dueDate: '2025-01-14',
    priority: 5,
    complete: true,
    project: 'Career',
    tags: ['career'],
    createdAt: '2025-01-07',
    updatedAt: '2025-01-08',
    notes: 'Tailored resume for frontend role'
  },
  {
    id: 't-005',
    title: 'Workout',
    description: '45-minute strength training session',
    dueDate: '2025-01-13',
    priority: 1,
    complete: false,
    project: 'Health',
    tags: ['fitness'],
    createdAt: '2025-01-13',
    updatedAt: '2025-01-13',
    notes: ''
  },
  {
    id: 't-006',
    title: 'Read documentation',
    description: 'Review MDN modules on ES modules and bundlers',
    dueDate: '2025-01-22',
    priority: 3,
    complete: false,
    project: 'Learning',
    tags: ['reading', 'javascript'],
    createdAt: '2025-01-10',
    updatedAt: '2025-01-10',
    notes: 'Take notes for future reference'
  }
];

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
