import React, { useEffect } from "react";

const DragAndDrop = () => {
  const [loading, setLoading] = React.useState(false);
  const [todos, setTodos] = React.useState([]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://dummyjson.com/todos?limit=5&skip=0"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const updatesTotos = data?.todos.map((todo) => ({
        ...todo,
        status: "wip",
      }));
      console.log(updatesTotos);
      setTodos(updatesTotos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDrop = (ev, status) => {
    const id = ev.dataTransfer.getData("id");
    let updatedTodos = todos.filter((todo) => {
      if (todo.id.toString() === id) {
        todo.status = status;
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  const renderTodos = () => {
    const todoListToRender = {
      wip: [],
      completed: [],
    };
    todos.forEach((todo) => {
      todoListToRender[todo.status].push(
        <div
          onDragStart={(ev) => onDragStart(ev, todo.id)}
          draggable
          className="todo-card "
          key={todo.id}
        >
          {todo.todo}
        </div>
      );
    });
    return todoListToRender;
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="w-full h-[100vh] bg-blue-300 flex items-center justify-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="drag-drop-board flex w-full items-center justify-evenly">
          <div
            onDrop={(ev) => onDrop(ev, "wip")}
            onDragOver={(ev) => ev.preventDefault()}
            className="work in progress bg-red-300 w-1/2 flex flex-col items-center"
          >
            <h3>In Progress</h3>
            <div className="flex flex-col">{renderTodos().wip}</div>
          </div>
          <div
            onDrop={(ev) => onDrop(ev, "completed")}
            onDragOver={(ev) => ev.preventDefault()}
            className="completed bg-yellow-300 w-1/2 flex flex-col items-center"
          >
            <h3>Completed</h3>
            <div className="flex flex-col">{renderTodos().completed}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
