var todos = [];
window.setTimeout(function() 
{
    var input = prompt("What would you like to do?");
    while(input !== "quit")
    {
        if(input === "list")
        {
            listTodo();
        }
        else if(input === "new")
        {
           addTodo();
        }
        else if(input === "delete")
        {
            deleteTodo();
        }
    
        var input = prompt("What would you like to do?");
    }
    console.log("You quit the app.")

    function listTodo()
    {
        console.log("*********")
        todos.forEach(function(todo , i){
            console.log(i + ": " + todo);
        });
        console.log("*********")
    }
    function addTodo()
    {
        var newtodo = prompt("Enter a new todo");
        todos.push(newtodo);
        console.log("Todo Added");
    }
    function deleteTodo()
    {
        var index = prompt("Enter the index to be deleted");
        todos.splice(index,1);
        console.log("Todo Deleted");
    }
}, 500);