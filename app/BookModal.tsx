import { View, Text, Pressable, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import useImageFetch from '@/hooks/useImageFetch'
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

  const image = useImageFetch()


  return (
    <View
      className='flex-1 '
    >
      {/* Image Section */}
      <View
        className="w-screen h-1/3 rounded-br-lg bg-slate-200"
      >
        <Image
          source={{ uri: `https://covers.openlibrary.org/b/oclc/${image}-L.jpg` }} 
          className='w-[100%] h-[100%] '
        />
      </View>

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