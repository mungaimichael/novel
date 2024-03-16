import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';

interface BookSearchParams {
  title?: string;
  cover_i?: string;
  author_name?: string;
}

const BookModal = () => {
  const params: BookSearchParams = useLocalSearchParams();
  const { title = "", cover_i = "", author_name = "" } = params || {};

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>{cover_i}</Text>
      <Text>{title}</Text>
      <Text>{author_name}</Text>
    </View>
  );
};


export default BookModal;