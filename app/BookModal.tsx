import { View, Text, Pressable, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
// interface BookModalProps {
//     // imageUrl: string, 
//     title: string, 
//     price: number, 
//     // category: string, 
//     // pages: number, 
//     // language:string
// }


const BookModal = () => {
  const { cover_i, title } = useLocalSearchParams()



  return (
    <View
      className='flex-1 '
    >


      {/* Title  Section */}
      <View
        className='h-20 bg-black flex-row justify-between items-center'
      >
        <Text>{title}</Text>

      </View>

    </View>
  )
}

export default BookModal