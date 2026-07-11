// Simple Todo app with localStorage
const STORAGE_KEY = 'todo-localstorage-items'
let todos = []
let filter = 'all' // all | active | completed

// Elements
const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')
const remaining = document.getElementById('remaining')
const btnAll = document.getElementById('filter-all')
const btnActive = document.getElementById('filter-active')
const btnCompleted = document.getElementById('filter-completed')
const btnClear = document.getElementById('clear-completed')

function loadTodos(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    todos = raw ? JSON.parse(raw) : []
  }catch(e){
    console.error('Failed to load todos', e)
    todos = []
  }
}

function saveTodos(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

function render(){
  list.innerHTML = ''
  const visible = todos.filter(t => {
    if(filter === 'active') return !t.completed
    if(filter === 'completed') return t.completed
    return true
  })

  visible.forEach(todo => {
    const li = document.createElement('li')
    li.className = 'todo-item' + (todo.completed ? ' completed' : '')
    li.dataset.id = todo.id

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', () => toggleTodo(todo.id))

    const span = document.createElement('div')
    span.className = 'text'
    span.textContent = todo.text
    span.title = 'Double-click to edit'
    span.addEventListener('dblclick', () => editTodo(todo.id, span))

    const del = document.createElement('button')
    del.className = 'delete'
    del.textContent = 'Delete'
    del.addEventListener('click', () => removeTodo(todo.id))

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(del)
    list.appendChild(li)
  })

  const remainingCount = todos.filter(t=>!t.completed).length
  remaining.textContent = `${remainingCount} item${remainingCount!==1?'s':''} left`
}

function addTodo(text){
  const trimmed = text.trim()
  if(!trimmed) return
  const todo = { id: Date.now().toString(), text: trimmed, completed:false }
  todos.unshift(todo)
  saveTodos()
  render()
}

function toggleTodo(id){
  const t = todos.find(x => x.id === id)
  if(!t) return
  t.completed = !t.completed
  saveTodos()
  render()
}

function removeTodo(id){
  todos = todos.filter(x => x.id !== id)
  saveTodos()
  render()
}

function editTodo(id, spanEl){
  const t = todos.find(x => x.id === id)
  if(!t) return
  const input = document.createElement('input')
  input.type = 'text'
  input.value = t.text
  input.className = 'editable'
  spanEl.replaceWith(input)
  input.focus()
  input.select()

  function commit(){
    const v = input.value.trim()
    if(v) t.text = v
    input.replaceWith(spanEl)
    saveTodos()
    render()
  }

  input.addEventListener('blur', commit)
  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') commit()
    if(e.key === 'Escape') { input.replaceWith(spanEl) }
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()
  addTodo(input.value)
  input.value = ''
})

btnAll.addEventListener('click', ()=>{filter='all'; setActiveFilter(btnAll); render()})
btnActive.addEventListener('click', ()=>{filter='active'; setActiveFilter(btnActive); render()})
btnCompleted.addEventListener('click', ()=>{filter='completed'; setActiveFilter(btnCompleted); render()})
btnClear.addEventListener('click', ()=>{
  todos = todos.filter(t=>!t.completed)
  saveTodos()
  render()
})

function setActiveFilter(activeBtn){
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'))
  activeBtn.classList.add('active')
}

// Initialize
loadTodos()
render()
