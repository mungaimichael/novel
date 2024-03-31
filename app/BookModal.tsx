import { View, Text, Image, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLocaStorage from '@/hooks/useLocalStorage';

interface BookSearchParams {
  title?: string;
  cover_i?: string;
  author_name?: string;
}

const BookModal = () => {
  const params: BookSearchParams = useLocalSearchParams();

  const { title = "", cover_i = "", author_name = "" } = params || {};


  const { addToFavourites } = useLocaStorage()


  return (
    <View
      className="flex-1  relative  ">
      <Pressable
        onPress={() => addToFavourites(title, cover_i, author_name)}
        className="absolute top-[2%] right-4   z-10"
      >
        <Ionicons

          name='heart' color={"#fff"} size={30} />
      </Pressable>
      {/* Favourite ICon */}

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
              className="w-screen h-1/2 flex justify-center items-center   "
            >

              <Image
                source={{ uri: `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` }}
                className=' w-full h-[100%]  '
              />

            </View>
          )
      }
      <View
        className="pl-4 mt-3 flex  space-y-2"
      >
        <View
          className=" mt-3 flex space-y-2"

        >
          <Text
            className=" font-semiBold text-xl"
          >{title}</Text>
          <Text>{author_name}</Text>
        </View>

        <View
          className="flex-row items-center justify-between w-1/3"
        >
          <AntDesign name="star" size={18} color="black" />
          <Text>
              3.8
          </Text>
          <Text>.</Text>
          <Text
          >
            5 Reviews
          </Text>
        </View>

        {/* Book Description  */}
        <View
          className=""
        >
          <Text
            className="text-xl font-regular"
          >
            Description
          </Text>
          <Text
            className="font-regular text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium impedit hic! Earum veritatis, ut quis quo sint ab. Vel explicabo dolore voluptas voluptates animi cupiditate, iusto ratione culpa facere!
            Velit ipsam laborum error debitis ad repudiandae numquam, temporibus quis, aperiam, quos blanditiis aut non dolores. Ut tempore minima maiores dignissimos et veritatis ipsa, iusto nisi voluptates autem, excepturi aperiam?
          </Text>
        </View>

      </View>
    </View>
  );
};


export default BookModal;
