import { View, Text } from 'react-native'
import React from 'react'


interface BookProps  {
    title: string,
  author: string, 
  price:number
        
}
const Book:React.FC<BookProps> = ({title, author, price}) => {
  return (
      <View
        className='h-[300px] w-[200px] bg-red-400/10 mx-3 mt-4'
      > 
          <Text>{title}</Text>
          <Text>{ author }</Text>
    </View>
  )
}

export default Book