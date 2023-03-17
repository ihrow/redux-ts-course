import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
  const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  console.log(page);

  return (
    <div>
      {todos.map(todo =>
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly={true}/>
          {todo.title}
        </div>
      )}
      {pages.map(p =>
        <button onClick={() => setTodoPage(p)}
                key={p}
                style={{border: p === page ? '2px solid green' : '1px solid gray'}}
        >
          Page: {p}
        </button>
      )}

    </div>
  );
};

export default TodoList;