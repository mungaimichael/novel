import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface SearchListProps {
  cover_i?: number,
  author?: string | string[],
  title: string
}

const SearchListItem: FC<SearchListProps> = ({ cover_i, author, title }) => {
  return (
    <View
      className=" flex-row justify-start items-end space-x-2 my-3 ml-4  w-full"
    >
      {
        cover_i === undefined ? (
          <View
            className=" bg-[#808080]/40 w-[50px] h-[80px] justify-center items-center"
          >
            <MaterialCommunityIcons name="image-remove" size={20} color="#808080" />
          </View>
        )
          : (
            <Image
              source={{ uri: `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` }}
              className=' w-[50px] h-full rounded-t-lg  '
              style={{ resizeMode: 'contain' }}

            />
          )
      }
      <View
        className="flex justify-start space-y-2"
      >
        <Text
          className="font-regular w-2/3 "
        >
          {title}
        </Text>
        <Text
          className="font-regular text-sm "
        >
          {author}
        </Text>
      </View>
    </View>
  )
}

export default SearchListItem