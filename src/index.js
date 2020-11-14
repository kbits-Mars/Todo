// import {saludar} from "./js/saludar.js"
import{TodosList,Todo} from "./classes/"
import {tareaHtml}from "./js/componentes";
import "./style.css";


const Desarrollo = new Todo('Terminar curso de javaScript');
// const Desarrollo2 = new Todo('Terminar curso de reactNative');
export const TodosLista= new TodosList();

// TodosLista.nuevoTodos(Desarrollo);

console.log(TodosLista.todos);


// TodosLista.todos.forEach(todo => tareaHtml(todo));
TodosLista.todos.forEach(tareaHtml);

// TodosLista.todos[0].imprimirTodo();








// TodosLista.nuevoTodos(Desarrollo);
// TodosLista.nuevoTodos(Desarrollo2);

// Desarrollo.completado=false;

// tareaHtml(Desarrollo);


// console.log(TodosLista);



// localStorage.setItem('my-key','Hola Mundo');
// sessionStorage.setItem('saludo', 'hola a todos');


// setTimeout(()=>{
//  localStorage.removeItem('my-key');
// }, 1500)




