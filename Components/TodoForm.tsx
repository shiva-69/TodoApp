import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    onAddTodo(text);
    setText('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        style={styles.input}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
});
