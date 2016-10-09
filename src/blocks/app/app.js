import NewTodo from './../new-todo/new-todo'
import TodoList from './../todo-list/todo-list'

const todo = new TodoList({
    el: document.querySelector('.js-todo-list'),
    tmpl: '#todo-list',
    data: {
        items: []
    }
});

const newTodo = new NewTodo({
    el: document.querySelector('.js-new-todo'),
    tmpl: '#new-todo'
});

newTodo.el.addEventListener('add', ev => {
    todo.addItem(ev.detail);
});

todo.el.addEventListener('remove', ev => {
    todo.removeItem(ev.detail)
});

