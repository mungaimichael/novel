import React, { useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import useFavourites from '@/hooks/useLocalStorage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favourites: React.FC = () => {
  const { allItems, getAllItems } = useFavourites();

  useEffect(() => {
    getAllItems();
    console.log(allItems)
  }, []);

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

function ListBook({ coverUrl, title, author }) {
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    resizeMode: 'cover',
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
});

export default Favourites;
