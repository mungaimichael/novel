import React from 'react'
import {View, Text} from "react-native"

interface SearchBookProps {
    showSearch:boolean 
}
const SearchBook:React.FC<SearchBookProps> = ({showSearch}) => {
  return (
      <View
        className={`absolute w-screen mx-auto h-[80px] bg-slate-700 ${showSearch?'top-0':'-top-40'} justify-center items-center right-0 z-10`}
      >
          <Text>SearchBook</Text>
    </View>
  )
}

export default SearchBook