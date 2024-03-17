import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/Search/Input'
import { Ionicons } from '@expo/vector-icons'

const SearchPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    const [recentSearches, setRecentSearches] = useState < string[] > ([]) 

    return (
        <

            >
            <ScrollView
                className=""

            >

                {/* Input Section */}
                <View
                    className="flex-1 bg-slate-400/5 border-0 justify-center items-center h-[150px] relative"
                >
                    <Input
                        type='text'
                        onChangeText={(text: string) => setSearchValue(text)}
                    />
                    <Pressable
                        onPress={() => console.log(searchValue)}
                        className="absolute right-5 bg-slate-800/70 w-14 h-[48] top-[61] flex justify-center items-center rounded-lg"
                    >
                        <Ionicons
                            name='search'
                            color="#fff"
                            size={20}
                        />
                    </Pressable>

                </View>

                {/* Recent Searches  */}

            </ScrollView>


        </>
    )
}

export default SearchPage