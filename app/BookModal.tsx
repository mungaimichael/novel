import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
interface BookModalProps {
    // imageUrl: string, 
    title: string, 
    price: number, 
    // category: string, 
    // pages: number, 
    // language:string
}


const BookModal: React.FC<BookModalProps> = ({ title, price }) => {
      const { author}  = useLocalSearchParams()
    
  useEffect(() => { console.log(author) }, [])
  
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