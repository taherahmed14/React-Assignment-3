import "./Todo.css";

function Todo({ num, children }){
    return <li> {num} {children} </li>;
}

export default Todo;