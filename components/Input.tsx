import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Text, TextInput, View } from 'react-native'

interface InputTypes {
  label: string,
  icon?:boolean
}

export const Input: FC<InputTypes> = ({ label,icon }) => {
  return (
    <View
      className=" w-full my-5 relative  "
    >
      <Text
        className="absolute capitalize -top-7 font-semiBold"
      >{label}</Text>
      <TextInput
        className="w-full h-12 border  border-black/40 rounded-md pl-4"
      />
      {
        icon ? <View
          className="absolute right-3 top-[27%]"
        ><Ionicons name="eye" size={18} color={"green"}/></View> : null
      }
    </View>
  )
}
