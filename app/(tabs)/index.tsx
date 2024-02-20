
import Book from '@/components/Home/Book';
import Genre from '@/components/Home/Genre';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, TouchableHighlight } from 'react-native';

export default function HomeScreen() {

  const router = useRouter()
  const [genres] = useState(['Thriller', 'Fantasy', 'Mystery', 'Romance', 'Adventure', 'SciFi', 'Medical Related'])
  return (
    <View className="flex-1  ">

      {/* Title Section */}
      <View
        className='flex-row justify-between w-[90%] mx-auto items-center '
      >
        <Text
          className='font-semiBold text-lg'
        >
          Book Category
        </Text>
        <TouchableHighlight
          className='bg-blue-900/10 h-8 w-20 flex justify-center items-center rounded-md'
        >
          <Text
            className='font-regular '
          >See All</Text>
        </TouchableHighlight>
      </View>

      {/* Genres ScrollView */}
      <View
        className='mt-8 bg-transparent'
        >
      <ScrollView
        bouncesZoom
        horizontal
        showsHorizontalScrollIndicator={false}
        className=''

      >

          {
            genres.map((item, index) => {
              return (
                <Genre title={item}  index={index} key={index}/>
              )
            }
            )
          }
        </ScrollView>
      </View>
      
      {/* Trending Books Title Section */}

      <View
        className='flex-row justify-between w-[90%] mx-auto items-center mt-8'
      >
        <Text
          className='font-semiBold text-lg'
        >
          Trending Now
        </Text>
            <TouchableHighlight
          className='bg-blue-900/10 h-8 w-20 flex justify-center items-center rounded-md'
        >
          <Text
            className='font-regular '
          >See All</Text>
        </TouchableHighlight>
      </View>
      {/* Trending Books  Section */}

      <View>
        <ScrollView
          horizontal 
          showsHorizontalScrollIndicator={false}
        >
          {
            [1, 2, 3, 4, 5].map((index) => (
              <Pressable
                onPress={()=>router.navigate('/BookModal')}
              >
                <Book author='Michael Ndichu' title='Book Titil' key={index} price={4000}  />
                </Pressable>
            ))
          }
        </ScrollView>
      </View>
    </View>

    
  );
}

