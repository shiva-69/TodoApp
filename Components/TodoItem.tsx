import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TodoItemProps {
  text: string;
  isCompleted: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({text, isCompleted}) => {
  return (
    <View style={styles.todoItem}>
      <Text
        style={[
          styles.todoText,
          isCompleted ? styles.completedText : styles.uncompletedText,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  todoText: {
    fontSize: 18,
  },
  completedText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  uncompletedText: {
    color: '##000',
  },
});
