import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '@/components/Search/Input'
import { Ionicons } from '@expo/vector-icons'
import useDataFetch from '@/hooks/useDataFetch'

import SearchListItem from '@/components/Search/SearchListItem'

const SearchPage: React.FC = () => {


    const [searchValue, setSearchValue] = useState<string>('')

    const [recentSearches, setRecentSearches] = useState<{ text: string, color: string }[]>([])
    
    const addSearches = (value: string) => {
        const newSearch = { text: value, color: rand() };
        setRecentSearches(prevSearches => [newSearch, ...prevSearches]);
    }


    const rand = (): string => {
        const randomHue = Math.floor(Math.random() * 360); // Random hue value
        const randomSaturation = Math.floor(Math.random() * 50) + 10; // Random saturation between 50 and 100
        const randomLightness = Math.floor(Math.random() * 20) + 30; // Random lightness between 60 and 80 for readability

        return `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
    }


    const {data, loading} = useDataFetch('java')




    useEffect(() => {
        // Generate initial colors for existing recent searches
        setRecentSearches(prevSearches => {
            return prevSearches.map(search => ({
                ...search,
                color: rand()
            }));
        });
    }, []);

    return (
        <

            >
            <ScrollView
                className=""

            >

                {/* Input Section */}
                <View
                    className=" bg-slate-400/5 border-0 justify-center items-center h-[100px] relative"
                >
                    <Input
                        type='text'
                        onChangeText={(text: string) => setSearchValue(text)}
                    />
                    <Pressable
                        onPress={() => { addSearches(searchValue); console.log(loading ? loading :  searchValue,data) }}
                        className="absolute right-5 bg-slate-800/70 w-14 h-[48] top-[36] flex justify-center items-center rounded-lg"
                    >
                        <Ionicons
                            name='search'
                            color="#fff"
                            size={20}
                        />
                    </Pressable>

                </View>

                {/* Recent Searches  */}
                <View
                    className="w-[90%] mx-auto  flex-row justify-start space-x-4 space-y-1 items-center flex-wrap flex-grow "
                >
                    {
                        recentSearches.map(({color,text}, index) => (
                            <Pressable
                                key={index}

                            >
                                <Text
                                    className="font-regular text-[16px] px-2 py-1 text-white bg-opacity-5 rounded-lg"
                                    style={{ backgroundColor: color }}
                                >
                                    {text}
                                </Text>
                            </Pressable>
                        ))

                        }
                </View>

                {/* Searched Books section  */}

                <View
                    className="w-[90%] flex-row flex-wrap justify-start space-x-8"
                >
                    {
                        data && data.docs.map(({title, author_name, cover_i}, index) => (
                            <SearchListItem
                                key={index}
                                title={title}
                                author={author_name}
                                coverUrl={cover_i}
                                
                            />
                        ))
                        }
                </View>

            </ScrollView>


        </>
    )
}

export default SearchPage
