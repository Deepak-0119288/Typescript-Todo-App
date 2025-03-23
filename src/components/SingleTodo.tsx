// src/components/SingleTodo.tsx
import React, { useEffect, useState, useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../models/models";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Added prop
}

const SingleTodo: React.FC<Props> = ({
  index,
  todo,
  todos,
  setTodos,
  setCompletedTodos,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editTodo.trim()) {
      setTodos(
        todos.map((t) => (t.id === todo.id ? { ...t, todo: editTodo } : t))
      );
    }
    setEdit(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleDone = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!todo.isDone) {
      // Remove from active todos
      const updatedTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(updatedTodos);
      // Add to completed todos
      setCompletedTodos((prev) => [...prev, { ...todo, isDone: true }]);
    }
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!todo.isDone) {
      setEdit(true);
    }
  };

  const handleInputBlur = () => {
    if (editTodo.trim()) {
      setTodos(
        todos.map((t) => (t.id === todo.id ? { ...t, todo: editTodo } : t))
      );
    }
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={handleEdit}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`todos__single ${snapshot.isDragging ? "drag" : ""} task`}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              onBlur={handleInputBlur}
              className="todos__single--text"
              ref={inputRef}
              autoFocus
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            <span className="icon" onMouseDown={handleEditClick}>
              <AiFillEdit />
            </span>
            <span className="icon" onMouseDown={handleDelete}>
              <AiFillDelete />
            </span>
            <span className="icon" onMouseDown={handleDone}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;