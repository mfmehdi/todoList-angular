app.component('todo', {
    controller: function () {

        this.todos = ['make a cake', 'play game'];

        this.note = "todo component";

        this.newTodo = "";

        this.add = () => {
            this.todos.push(this.newTodo)
        }

        this.test = () => {
            console.log(this.note)
        }


    },
    templateUrl: "../views/todo.html"
})