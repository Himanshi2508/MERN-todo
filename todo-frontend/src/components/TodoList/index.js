import React from "react";
import axios from "../../axios";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";

function TodoList({ todos = [], fetchData }) {
  // Log todos and its type to inspect the incoming data
  console.log("Todos:", todos);
  console.log("Type of todos:", typeof todos);

  // Enforce todos as an array using Array.isArray()
  const validTodos = Array.isArray(todos) ? todos : [];

  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, { id });
      fetchData();
      return response.data.json;
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, { id });
      fetchData();
      return response.data.json;
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <ListContainer>
        {validTodos.length > 0 ? (
          validTodos.map((todo) => (
            <Row key={todo._id}>
              <Text
                onClick={() => updateTodo(todo._id)}
                isCompleted={todo.completed}
              >
                {todo.text}
              </Text>
              <DeleteIcon
                data-testid="close"
                onClick={() => deleteTodo(todo._id)}
              >
                X
              </DeleteIcon>
            </Row>
          ))
        ) : (
          <p>No todos available</p>
        )}
      </ListContainer>
    </div>
  );
}

export default TodoList;
