import React, { useEffect, FC } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import useFavourites from '@/hooks/useLocalStorage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Loader from '@/components/Home/Loader';
import { Svg } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favourites: React.FC = () => {
  const { allItems, getAllItems, loading } = useFavourites();

  useEffect(() => {
    const getAll = async () => {
      const data = await getAllItems()
      return data
    }
getAll()
  }, []);



  return (
    <>
      {
        allItems && allItems.length <= 0 ? (
          <View
            className="flex-1 bg-[#fff] justify-center items-center "
          >
            <Text
              className=" text-xl font-regular"
            >
              No Favourites available
            </Text>
            <Image
              source={require('@/assets/images/heart.png')}
              style={styles.imageIcon}
            />
          </View>
        ) : (
          <ScrollView style={styles.container}>
            {
              loading ? (
                <View
                  className="flex-1 justify-center items-center"
                >

                  <Loader
                    loading={loading}
                  />
                </View>) : (
                <View style={styles.bookContainer}>
                  {allItems &&
                    allItems.map(({ author_name, title, cover_i }, index) => (
                      <ListBook

                        key={index}
                        title={title}
                        author={author_name}
                        coverUrl={cover_i}
                      />
                    ))}
                </View>
              )
            }
          </ScrollView >
        )
      }
    </>
  );
};

interface ListBooksProps {
  coverUrl: string,
  title: string,
  author: string
}
const ListBook: React.FC<ListBooksProps> = ({ coverUrl, title, author }) => {
  return (
    <View style={styles.listBook}>
      <View style={styles.imageContainer}>
        {coverUrl === undefined ? (
          <View style={styles.placeholderContainer}>
            <MaterialCommunityIcons name="image-remove" size={50} color="#808080" />
          </View>
        ) : (
          <Image
            source={{ uri: `https://covers.openlibrary.org/b/id/${coverUrl}-L.jpg` }}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    marginHorizontal:5
  },
  listBook: {
    width: '30%', // Adjust width according to your layout
    marginBottom: 16,
  },
  imageContainer: {
    height: 150,
    overflow: 'hidden',
    marginBottom: 8,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80808040', // Semi-transparent gray
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  textContainer: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
  },
  imageIcon: {
    width: '30%', // Set width to fill the container
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
});

export default Favourites;
