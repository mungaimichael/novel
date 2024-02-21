
import Book from '@/components/Home/CarouselBook';
import Genre from '@/components/Home/Genre';
import NewPublishBook from '@/components/Home/NewPublishBook';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, TouchableHighlight } from 'react-native';

export default function HomeScreen() {

  const router = useRouter()
  const [genres] = useState(['Thriller', 'Fantasy', 'Mystery', 'Romance', 'Adventure', 'SciFi', 'Medical Related'])

  let heading = "font-semiBold text-lg"
  let genericContainer = 'flex-row justify-between w-[90%] mx-auto items-center mt-8'
  return (
    <View className="flex-1  ">
      <ScrollView>

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
        className={`${genericContainer}`}
      >
        <Text
          className={`${heading}`}
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
                onPress={() => router.navigate('/BookModal')}
                key={index}
              >
                <Book author='Michael Ndichu' title='Book Titil'  price={4000}  />
                </Pressable>
            ))
          }
        </ScrollView>
      </View>

      {/* New Publishes Section */}

      <View
        className={`${genericContainer} flex-col items-start`}

      >

        <Text
          className={`${heading}`}
          >New Publish</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToStart
          >
            {
              [1, 2, 3, 45, 9].map((index) => (
                <Pressable
                  key={index}
                  // onPress={()=>router.navigate('BookModal', params: {author:'Michael Ndichu', heading:'Not a Problem'})}
                  onPress={() => router.navigate({
                    pathname: 'BookModal', 

                    params: {
                      author: 'Michael Mungai', 
                      title:'Not Your Business'
                    }
                  })}
                >
                  <NewPublishBook author='Michael Ndichu' heading='Hairy Porter' />
                </Pressable>
              ))
          }
            
          </ScrollView>
          
      
        </View>
        </ScrollView>
    </View>

    
  );
}

