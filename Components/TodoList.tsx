import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TodoItem} from './TodoItem';
import {TodoForm} from './TodoForm';
interface Todo {
  text: string;
  isCompleted: boolean;
}
export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {text: 'Buy milk', isCompleted: false},
    {text: 'Take out the trash', isCompleted: true},
    {text: 'Write todo list app', isCompleted: false},
  ]);

  const handleAddTodo = (text: string) => {
    const newList = [...todos, {text, isCompleted: false}];
    setTodos(newList);
  };

  return (
    <View style={styles.todoList}>
      <TodoForm onAddTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} isCompleted={todo.isCompleted} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoList: {
    padding: 16,
    marginTop: 20,
  },
});
