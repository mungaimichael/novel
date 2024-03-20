import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'

interface SearchListProps {
    cover_i?: number, 
    author: string, 
    title: string
}

const SearchListItem:FC<SearchListProps> = ({cover_i, author ,title}) => {
  return (
      <View
        className=" flex-row justify-start space-x-2"
      >
          <Image
        source={{ uri: `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}}
              style={{width:60, height:70, objectFit:'contain'}}
          />
          <View
            className="flex justify-start"
          >
              <Text>
                  { title }
              </Text>
              <Text>
                  {author}
              </Text>
          </View>
    </View>
  )
}

export default SearchListItem