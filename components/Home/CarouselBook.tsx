import { View, Text, useColorScheme, Pressable, Image, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'


interface BookProps {
  title: string,
  author: string[],
  coverUrl?: number,


}
const Book: React.FC<BookProps> = ({ title, author, coverUrl }) => {



  const text = 'font-regular text-sm '

  return (

    <View
      className={` bg-slate-100/40 dark:bg-slate-500/40  h-[400px] w-[250px]  mx-3 mt-4 justify-around   rounded-xl `}
    >
      <View
        className='flex-1 justify-center items-center'
      >
        {
          coverUrl === undefined ? (
            <View
              className="rounded-lg bg-[#808080]/20 w-full flex-1 justify-center items-center"
            >
              <MaterialCommunityIcons name="image-remove" size={50} color="#808080" />
            </View>
          )
            : (
              <Image
                source={{ uri: `https://covers.openlibrary.org/b/id/${coverUrl}-L.jpg` }}
                className=' w-full h-full rounded-t-lg '
              />
            )
        }
      </View>

      <View
        className='justify-start space-y-4 pl-1 items-start h-1/5'
      >

        <Text
          className={`${text}`}
        >{title}</Text>
        <Text
          className={`${text}`}
        >{author}</Text>
      </View>
    </View>

  )
}

export default Book