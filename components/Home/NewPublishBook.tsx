import React, { useEffect } from 'react'
import { View } from '../Themed'
import { Text } from 'react-native'


interface Props  {
    heading: string, 
    author: string,
}

const NewPublishBook: React.FC<Props> = ({ heading, author }) => {


  return (
      <View
        className='w-screen h-[200px] bg-orange-300/10 mr-2 mb-4 rounded-md'
      > 
          <Text>
              {heading}, { author }
          </Text>
    </View>
  )
}

export default NewPublishBook