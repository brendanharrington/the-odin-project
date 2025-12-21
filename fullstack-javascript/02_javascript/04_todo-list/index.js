/* =========================
   DATA
========================= */

const PROJECTS = [
  { id: 'inbox', name: 'Inbox' },
  { id: 'work', name: 'Work' },
  { id: 'personal', name: 'Personal' }
];

const ITEMS = [
  {
    id: 't1',
    title: 'Finish UI',
    description: 'Complete layout and styles',
    dueDate: '2025-01-18',
    priority: 4,
    complete: false,
    projectId: 'work'
  },
  {
    id: 't2',
    title: 'Buy groceries',
    description: 'Milk and eggs',
    dueDate: '2025-01-15',
    priority: 2,
    complete: false,
    projectId: 'personal'
  }
];

const STORAGE_KEYS = {
  items: 'todo:items',
  projects: 'todo:projects',
  state: 'todo:state'
};

const state = {
  activeProjectId: 'inbox'
};


/* =========================
   DOM REFERENCES
========================= */

const list = document.getElementById('list');
const dialog = document.getElementById('todo-dialog');
const createBtn = document.getElementById('create-btn');
const closeBtn = document.getElementById('close-btn');
const projectsBtn = document.getElementById('projects-btn');
const inboxBtn = document.getElementById('inbox-btn');
const form = document.getElementById('todo-form');
const heading = document.querySelector('main h2');
const projectsDialog = document.getElementById('projects-dialog');
const projectsList = document.getElementById('projects-list');
const projectDialog = document.getElementById('project-dialog');
const projectForm = document.getElementById('project-form');
const projectCloseBtn = document.getElementById('project-close-btn');
const addProjectBtn = document.getElementById('add-project-btn');
const projectsCloseBtn = document.getElementById('projects-close-btn');

/* =========================
   LOCAL STORAGE
========================= */

function saveToStorage() {
  localStorage.setItem(STORAGE_KEYS.items, JSON.stringify(ITEMS));
  localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(PROJECTS));
  localStorage.setItem(STORAGE_KEYS.state, JSON.stringify({
    activeProjectId: state.activeProjectId
  }));
}

function loadFromStorage() {
  const items = JSON.parse(localStorage.getItem(STORAGE_KEYS.items));
  const projects = JSON.parse(localStorage.getItem(STORAGE_KEYS.projects));
  const savedState = JSON.parse(localStorage.getItem(STORAGE_KEYS.state));

  if (Array.isArray(items)) {
    ITEMS.length = 0;
    ITEMS.push(...items);
  }

  if (Array.isArray(projects)) {
    PROJECTS.length = 0;
    PROJECTS.push(...projects);
  }

  if (savedState?.activeProjectId) {
    state.activeProjectId = savedState.activeProjectId;
  }
}

/* =========================
   SELECT POPULATION
========================= */

function populateProjectSelect() {
  const select = form.querySelector('select[name="projectId"]');
  select.innerHTML = '';

  PROJECTS.forEach(project => {
    const option = document.createElement('option');
    option.value = project.id;
    option.textContent = project.name;
    select.appendChild(option);
  });
}


/* =========================
   STATE DERIVED DATA
========================= */

function getVisibleTodos() {
  if (state.activeProjectId === 'inbox') {
    return ITEMS;
  }

  return ITEMS.filter(
    item => item.projectId === state.activeProjectId
  );
}

function getActiveProjectName() {
  return PROJECTS.find(p => p.id === state.activeProjectId)?.name ?? 'Inbox';
}


/* =========================
   RENDERING
========================= */

function createTodoItem(item) {
  const li = document.createElement('li');
  li.className = 'item';

  const checkbox = document.createElement('button');
  checkbox.className = 'checkbox';
  checkbox.dataset.complete = item.complete;

  checkbox.addEventListener('click', () => {
    item.complete = !item.complete;
    checkbox.dataset.complete = item.complete;
    saveToStorage();
  });


  const content = document.createElement('div');
  content.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  li.append(checkbox, content);
  return li;
}

function renderTodos(items) {
  list.innerHTML = '';

  const fragment = document.createDocumentFragment();
  items.forEach(item => fragment.appendChild(createTodoItem(item)));
  list.appendChild(fragment);
}

function render() {
  heading.textContent = getActiveProjectName();
  renderTodos(getVisibleTodos());
  if (inboxBtn) inboxBtn.classList.toggle('active', state.activeProjectId === 'inbox');
}

function renderProjectsDialog() {
  projectsList.innerHTML = '';

  PROJECTS.forEach(project => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = project.name;

    btn.addEventListener('click', () => {
      state.activeProjectId = project.id;
      saveToStorage();
      render();
      projectsDialog.close();
    });

    li.appendChild(btn);
    projectsList.appendChild(li);
  });
}

/* =========================
   PROJECTS MENU
========================= */

function openProjectsMenu() {
  const menu = document.createElement('div');
  menu.style.position = 'absolute';
  menu.style.top = '3.5rem';
  menu.style.right = '1rem';
  menu.style.background = 'white';
  menu.style.border = '1px solid #ccc';
  menu.style.padding = '0.5rem';
  menu.style.zIndex = '100';

  PROJECTS.forEach(project => {
    const btn = document.createElement('button');
    btn.textContent = project.name;
    btn.style.display = 'block';
    btn.style.width = '100%';

    btn.addEventListener('click', () => {
      state.activeProjectId = project.id;
      saveToStorage();
      render();
    });


    menu.appendChild(btn);
  });

  document.body.appendChild(menu);

  document.addEventListener(
    'click',
    e => {
      if (!menu.contains(e.target) && e.target !== projectsBtn) {
        menu.remove();
      }
    },
    { once: true }
  );
}


/* =========================
   EVENTS
========================= */

createBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());
projectCloseBtn.addEventListener('click', () => projectDialog.close());
projectsCloseBtn.addEventListener('click', () => projectsDialog.close());

projectsBtn.addEventListener('click', () => {
  renderProjectsDialog();
  projectsDialog.showModal();
});

addProjectBtn.addEventListener('click', () => {
  projectsDialog.close();
  projectDialog.showModal();
});

// Inbox button behavior
if (inboxBtn) {
  inboxBtn.addEventListener('click', () => {
    state.activeProjectId = 'inbox';
    saveToStorage();
    render();
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = new FormData(form);

  ITEMS.push({
    id: crypto.randomUUID(),
    title: data.get('title'),
    description: data.get('description'),
    dueDate: data.get('dueDate'),
    priority: 1,
    complete: false,
    projectId: data.get('projectId')
  });

  saveToStorage();
  render();
  form.reset();
  dialog.close();
});

projectForm.addEventListener('submit', e => {
  e.preventDefault();

  const data = new FormData(projectForm);
  const projectName = data.get('projectName').trim();

  if (projectName) {
    PROJECTS.push({
      id: crypto.randomUUID(),
      name: projectName
    });

    saveToStorage();
    populateProjectSelect();
    projectForm.reset();
    projectDialog.close();
    
    // Reopen projects dialog to show new project
    renderProjectsDialog();
    projectsDialog.showModal();
  }
});


/* =========================
   INIT
========================= */

loadFromStorage();
populateProjectSelect();
render();
