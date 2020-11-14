import { Todo } from "./todo.class";


export class TodosList{

    constructor(){
         this.obtenerLocalStorage();
    }


    nuevoTodos(todo){
         this.todos.push(todo);
         this.guardarLocalStorage();
    }


    eliminarTodo(id){
            
            for(const i in this.todos){

                if(id == this.todos[i].id){
                    this.todos.splice(i,1);
                }
                
            }

            this.guardarLocalStorage();

    // this.todos= this.todos.filter(todo => todo.id!=id);

    }

    toggleTodosCompletado(id){

      const identificador= parseInt(id);
           
        for (const todo of this.todos){

            if(todo.id === identificador){


                todo.completado= !todo.completado;

                break;
                
            }

        }
        this.guardarLocalStorage();
        
    }

    eliminarCompletados(){

        let eliminados=0;
        let arrayId=[];
    
        for(let i in this.todos){
            
            if(this.todos[i].completado== true){
               
                arrayId[eliminados]= this.todos[i].id;
                eliminados++;
            }
        }

        for(let id of arrayId){
           this.eliminarTodo(id);
        }
        this.guardarLocalStorage();
        // this.todos= this.todos.filter(todo => !todo.completado); esta es otra alternativa de obterner todas la tareas que no estan completadas
        return eliminados;
    }

    guardarLocalStorage(){
       localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    obtenerLocalStorage(){

       this.todos= (localStorage.getItem("todos")) 
        ? JSON.parse(localStorage.getItem("todos")) 
        : [];

        this.todos= this.todos.map(obj => Todo.jsonObj(obj));

    }

}