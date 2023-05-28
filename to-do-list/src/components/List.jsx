const List = (props) => {
    const todoClass = ["bold", "italic"];

        if (props.todo.complete) {
            todoClass.push("line-through");
        }


    return <div className="card" key={props.i}>
        <span className={todoClass.join(" ")}>
        {props.todo.text}</span>
        
        <input className="check" onChange={(e) => {
        props.handleTodoCheck(props.i);
        
        }} checked={props.todo.complete} type="checkbox" />

        <button className="btn-primary" onClick={(e) => {
        props.handleTodoDelete(props.i);
        }}>Delete</button>

    </div>;
}

export default List