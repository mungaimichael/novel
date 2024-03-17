import React, { FC, useState, ChangeEvent } from 'react'
import { Text, TextInput, View } from 'react-native'

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label?: string
    name: string
    error: boolean
    disabled?: boolean
    onChangeText: (text: string) => void 
}

const Input: FC<InputProps> = ({
    label,
    error,
    onChangeText
}) => {
    const [text, setText] = useState<string>('') 
    return (
        <View>
            <Text style={{ fontSize: 16, color: '#344054' }}>{label}</Text>
            <TextInput
                placeholder='Book Name'
                placeholderTextColor={'#d3d3d3'}
                onChangeText={(inputText) => {
                    setText(inputText)
                    onChangeText(inputText)
                }}
                style={{
                    borderWidth: 0,
                    borderRadius: 8,
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    width: 350,
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#344054',
                    backgroundColor: '#ffffffe1',
                    shadowColor: '#101828',
                    shadowOpacity: 0.05,
                    shadowRadius: 2,
                    shadowOffset: { width: 0, height: 1 }
                }}
            />
            {error && <Text style={{ fontSize: 12, color: 'red' }}>Input field can't be empty!</Text>}
        </View>
    )
}

export default Input
