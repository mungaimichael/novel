import { View, Text, useColorScheme, Pressable, Image, ImageBackground } from 'react-native'
import React from 'react'


interface BookProps {
  title: string,
  author: string[],
  coverUrl?: number,


}
const Book: React.FC<BookProps> = ({ title, author, coverUrl }) => {



  const text = 'font-regular text-sm '

  return (

    <View
      className={` bg-slate-400/70 dark:bg-slate-500/40  h-[300px] w-[200px]  mx-3 mt-4 justify-around space-y-3 px-2 rounded-xl `}
    >
      <View
        className='flex-1 justify-center items-center'
      >
        {
          coverUrl === undefined ? (
          <Text>Image unavailble</Text>
          )
            : (
              <Image
                source={{ uri: `https://covers.openlibrary.org/b/id/${coverUrl}-L.jpg` }}
                className=' aspect-auto '
              />
          )
        }
        </View>

      <View
        className='justify-start space-y-4 bg-red-400/10 items-start h-1/3'
      >

        <Text
          className={`${text}`}
        >{title}</Text>
        <Text
          className={`${text}`}
        >{author}</Text>
        <Text>{coverUrl}</Text>
      </View>
    </View>

  )
}

export default Book