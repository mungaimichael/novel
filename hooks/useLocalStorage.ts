import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ItemData {
    id: number;
    title: string;
    cover_i: string;
    author_name: string;
}

interface userDetails {
    email: string, 
    token : string
}

const useLocalStorage = () => {
    const [favourites, setFavourites] = useState<ItemData[]>([]);
    const [allItems, setAllItems] = useState<ItemData[] | null>(null);
    const [loading, setLoading] = useState(false);

    const addToFavourites = async (title: string, cover_i: string, author_name: string): Promise<void> => {
        try {
            const lastIdString = await AsyncStorage.getItem('lastId');
            let lastId = lastIdString ? parseInt(lastIdString, 10) : 0;

            // Retrieve existing favourites
            const existingFavourites = await AsyncStorage.getAllKeys();

            const newId = lastId + 1;

            const jsonData = JSON.stringify({ id: newId, title, cover_i, author_name });

            // Check if the new item already exists in favourites
            const itemExists = existingFavourites.includes(newId.toString());
            if (itemExists) {
                console.log('Item already exists in favourites.');
                return; // Exit function if item already exists
            }

            // Add new item to favourites
            await AsyncStorage.setItem('lastId', newId.toString());
            await AsyncStorage.setItem(newId.toString(), jsonData);
            console.log('Item added to favourites.');

        } catch (error) {
            console.error('Error adding item to favourites:', error);
        }
    }


    const removeFromFavourites = async (id: number): Promise<void> => {
        try {
            // Implementation omitted for brevity
        } catch (error) {
            console.error('Error removing item from favourites:', error);
        }
    };

    const getAllItems = async (): Promise<ItemData[]> => {
        try {
            setLoading(true);
            const keys: readonly string[] = await AsyncStorage.getAllKeys();
            const values: readonly [string, string | null][] = await AsyncStorage.multiGet(keys);

            const parsedItems: ItemData[] = values
                .filter(([_, value]) => value !== null)
                .map(([_, value]) => JSON.parse(value!));

            setAllItems(parsedItems);
            setLoading(false);
            return parsedItems;

        } catch (error) {
            console.error('Error retrieving items from AsyncStorage', error);
            throw error;
        }
    };

    const addUserToLocalStorage = async (email: string): Promise<void> => {
        try {
            const details: userDetails = {
                email, 
                token:email
            }; 
            await AsyncStorage.setItem('token', JSON.stringify(details), (error)=>error === undefined ? console.log("item added"): null); 
            
        } catch (error) {
            console.log(error)
        }
     }
    
    const getUserFromLocalStorage = async (): Promise<userDetails | null> => {
        try {
            const res = await AsyncStorage.getItem('token');

            const data: userDetails | null = res === null ? null : JSON.parse(res)

            console.log('from hook',data)

            if (data === null) return null; 
            
            return data; 

        } catch (error) {
            console.log(error);
            return null;
        }
    }



    return {
        favourites,
        allItems,
        loading, 
        addToFavourites,
        removeFromFavourites,
        getAllItems, 
        addUserToLocalStorage, 
        getUserFromLocalStorage
    };
};

export default useLocalStorage;
