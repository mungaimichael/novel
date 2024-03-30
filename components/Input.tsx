import React, { FC } from 'react'
import { View } from 'react-native'

interface InputTypes {
    label: string, 
}

export const Input:FC <InputTypes> = () => {
  return (
      <View
        className="h-[100] w-[130]"
      ></View>
  )
}
