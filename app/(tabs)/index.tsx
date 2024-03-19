import React from 'react';
import Book from '@/components/Home/CarouselBook';
import Genre from '@/components/Home/Genre';
import NewPublishBook from '@/components/Home/NewPublishBook';
import { Text, View } from '@/components/Themed';
import useDataFetch from '@/hooks/useDataFetch';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, TouchableHighlight, useColorScheme, Animated, Easing, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Loader from '@/components/Home/Loader';

export default function HomeScreen() {

  const {data,loading} = useDataFetch()

  const colorScheme = useColorScheme()

  const router = useRouter()
  const [genres] = useState(['Thriller', 'Fantasy', 'Mystery', 'Romance', 'Adventure', 'SciFi', 'Medical Related'])

  let heading = "font-semiBold text-lg"
  let genericContainer = 'flex-row justify-between w-[90%] mx-auto items-center mt-8'


  // show spinner when loading 
   const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(
          spinValue,
          {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )
      ).start();
    } else {
      spinValue.setValue(0);
    }
  }, [loading, spinValue]);

    const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
    });
  
  const SvgLoader = () => (
    <Svg
      width={50}
      height={50}
viewBox="0 0 24 24"
    >
  
      <Path
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        stroke="#000000"
        d="M12 3V6M12 18V21M6 12H3M21 12H18M5.63672 5.63672L7.75977 7.75977M16.2422 16.2422L18.3633 18.3633M18.3652 5.63477L16.2441 7.75586M7.75781 16.2422L5.63477 18.3652"
      />
    </Svg>
  ); 
  
  return (
    <View className="flex-1 relative ">
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
          <Pressable
          
          className={`${colorScheme==='light' ? 'bg-blue-900/10' :'bg-slate-300/80' } h-8 w-20 flex justify-center items-center rounded-md`}
        >
          <Text
            className='font-regular '
          >See All</Text>
        </Pressable>
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
            <Pressable
          className={`  h-8 w-20 flex justify-center items-center rounded-md`}
        >
          <Text
            className='font-regular '
          >See All</Text>
        </Pressable>
      </View>
      {/* Trending Books  Section */}

      <>
          {
            loading && loading ? (
              <Loader loading={loading} />
            ) : (
                <>
        <ScrollView
          horizontal 
          showsHorizontalScrollIndicator={false}
        >
          {
            data.docs.slice(0,10).map(({title,  cover_i, author_name, ratings_count_3},index) => (
              <Pressable
                onPress={() => { 
                  console.log(ratings_count_3)
                  router.navigate({
                    pathname: '/BookModal', 
                    params: {
                      cover_i, 
                      title, 
                      author_name, 
                      ratings_count_3
                    }
                  })
                }}
                key={index}
              >
                <Book
                  author={author_name}
                  title={title}
                  coverUrl={cover_i} />
                </Pressable>
            ))
          }
        </ScrollView>
                </>
            )
          }
      </>

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
              data.docs.slice(10, 15).map(({ title, cover_i, author_name}, index) => (
                <Pressable
                  key={index}
                  onPress={() => router.navigate({
                    pathname: 'BookModal', 

                    params: {
                      author: 'Michael Mungai', 
                      title:'Not Your Business'
                    }
                  })}
                >
                  <NewPublishBook
                    author_name={author_name}
                    title={title}
                    cover_i={cover_i}
                    key={index}
                  />
                </Pressable>
              ))
          }
            
          </ScrollView>
          
      
        </View>
        </ScrollView>
    </View>

    
  );
}

