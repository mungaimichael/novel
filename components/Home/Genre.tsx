import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'

interface GenresProps {
  title: string;
  index:number
}

const Genre: React.FC<GenresProps> = ({ title, index }) => {

  const [active, setActive] = useState(false)


  return (
    <Pressable
      onPress={()=>setActive(prev=>!prev)}
      key={index}
      className={`
      w-24 p-2  flex justify-center items-center mx-3 rounded-md  ${active ? 'bg-orange-900/10' : 'bg-slate-900/10'} transition-all ease-in-out duration-75 `}
                >
                  <Text
        className={`font-regular`}
                  >{title}</Text>
                </Pressable>
  );
}

export default Genre;
