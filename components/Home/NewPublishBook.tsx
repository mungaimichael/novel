import React, { useEffect } from 'react'
import { View } from '../Themed'
import { Image, ImageBackground, Text } from 'react-native'


interface Props  {
  title: string
  
  cover_i:string
  author_name:string
}

const NewPublishBook: React.FC<Props> = ({ title, cover_i, author_name, }) => {


  return (
      <View
        className='w-screen h-[200px] bg-orange-300/10 mr-2 mb-4 rounded-md flex flex-row'
      > 
      <Image
        source={{ uri: `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` }}
        
        className="h-full w-1/3"
        style={{resizeMode:'contain'}}
        
      />
        <Text>
          { title }
        </Text>
        
    </View>
  )
}

export default NewPublishBook