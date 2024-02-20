import { View, Text, Pressable } from 'react-native'
import React from 'react'
interface BookModalProps {
    // imageUrl: string, 
    title: string, 
    price: number, 
    // category: string, 
    // pages: number, 
    // language:string
}


const BookModal: React.FC<BookModalProps> = ({title,price}) => {
  return (
    <View>
      <Pressable
        onPress={()=>console.log(price, title)}

      >
         <Text
      >BookModal</Text>
     </Pressable>
    </View>
  )
}

export default BookModal