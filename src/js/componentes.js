import { Todo } from "../classes";
import {TodosLista} from "../index.js";


const todoList= document.querySelector('.todo-list');
const textInput= document.querySelector('.new-todo');
const buttonEliminar= document.querySelector('.clear-completed');
const ulFiltro= document.querySelector('.filters');
const anchorTag= document.querySelectorAll('.filtro');

export const  tareaHtml = ( todo)=>{


    const htmlItems= `<li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox"  ${(todo.completado) ? 'checked' : ''}/> 
                            <label> ${todo.tarea}</label>
                            <button class="destroy"> </button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template"/>
                    </li>`;

    const divElement= document.createElement('div');

    

    divElement.innerHTML= htmlItems;

    todoList.append(divElement.firstElementChild);


    return divElement.firstElementChild;


}


//Eventos 

// agrega una nueva tarea a la lista ul
textInput.addEventListener("keyup",(event)=>{


if(event.keyCode == 13 && textInput.value.length >0 ){

        const nuevaTarea= new Todo(textInput.value);
        TodosLista.nuevoTodos(nuevaTarea);
        tareaHtml(nuevaTarea);
        textInput.value= "";
}
  

});



// toggle del checkbox camibar estado de completado(true/false)
// eliminar un todo seleccionando una tarea en el button 
todoList.addEventListener("click",(event)=>{

        const elementName = event.target.localName; // input, label, button 
        const  todoElement= event.target.parentElement.parentElement;
        const todoId=  todoElement.getAttribute('data-id');

        if(elementName.includes('input')){

            TodosLista.toggleTodosCompletado(todoId);
            todoElement.classList.toggle('completed');

        }else if(elementName.includes('button')){

            TodosLista.eliminarTodo(todoId);
            todoElement.parentElement.removeChild(todoElement);
        }

});


//evento eliminar tareas completadas
buttonEliminar.addEventListener('click',(event)=>{
        let todoCompletados;
     
        let eliminados=  TodosLista.eliminarCompletados();
         for(let i=0 ; i< eliminados; i++ ){
        
            todoCompletados= document.querySelector('.completed');
            todoList.removeChild(todoCompletados);
          }

      

})


//evento para filtro para mostrar todos, pendientes y completados

ulFiltro.addEventListener("click",(event)=>{
            
   const  textFiltro = event.target.text;

   if(!textFiltro) return;

      anchorTag.forEach(elemento => elemento.classList.remove('selected'));

       event.target.classList.add('selected');


   for(const elemento of todoList.children){


      elemento.classList.remove('hidden');
      const completado=  elemento.classList.contains('completed')
            
     
         switch(textFiltro){

            case 'Pendientes':
                if(completado) elemento.classList.add('hidden');

                break;

            case 'Completados':
                if(!completado) elemento.classList.add('hidden');
    
                    break;
         }

   }

   

})