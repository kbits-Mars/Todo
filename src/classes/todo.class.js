

export class Todo{

    static jsonObj({tarea,id,completado,creacion}){
        const temporalTodo= new Todo(tarea);
         temporalTodo.id= id;
         temporalTodo.completado= completado;
         temporalTodo.creacion= creacion;

         return temporalTodo;
        
    }

    constructor(tarea){
        this.tarea= tarea;
        this.id=  new Date().getTime();
        this.completado= false;
        this.creacion=  new Date();


    }


    imprimirTodo(){
        console.log(`Tarea: ${this.tarea} - Id: ${this.id}- Creación:${this.creacion}`);
    }
}