import { View, Text, Image, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface BookSearchParams {
  title?: string;
  cover_i?: string;
  author_name?: string;
}

const BookModal = () => {
  const params: BookSearchParams = useLocalSearchParams();
  const { title = "", cover_i = "", author_name = ""} = params || {};

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {
        cover_i === undefined ? (
          <View
            className="rounded-lg bg-[#808080]/20 w-full flex-1 justify-center items-center"
          >
            <MaterialCommunityIcons name="image-remove" size={30} color="#808080" />
          </View>
        )
          : (
            <View
              className="w-screen h-1/2 flex justify-center items-center  "
            >
                <Image
                  source={{ uri: `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` }}
                  className=' w-full h-[100%]  '
                />
              
            </View>
          )
      }
      <View
        className="pl-4 mt-3 flex space-y-5"
      >
        <Text
          className=" font-regular text-xl"
        >{title}</Text>
        <Text>{author_name}</Text>

     </View>
    </View>
  );
};


export default BookModal;