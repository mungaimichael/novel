import { Stack } from 'expo-router'
import React from 'react'

const StacksLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='Login'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        options={{ headerShown: false }}
      />
    </Stack>
  )
}

export default StacksLayout