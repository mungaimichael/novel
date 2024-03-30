import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const SignUp = () => {
    const leaf = require("@/assets/images/leaf.png")
    const leaf2 = require("@/assets/images/leaf2.png")
    

    return (
        <SafeAreaView
            className="flex-1  bg-white"
        >

            {/* Image Section  */}
            <View
                className="h-1/2 relative  bg-green-800/90"
            >
                <Image
                    className="opacity-10 absolute -left-40 w-[100%] h-[100%]"
                    source={leaf}
                />
                <Image
                    className="opacity-10 absolute right-12 top-10-40 w-[40%] h-[40%]"
                    source={leaf}
                />
                <Image
                    className="opacity-10 absolute right-20 top-[70%] w-[20%] h-[20%]"
                    source={leaf2}
                />

                <View
                    className="absolute left-[10%] top-[20%]   justify-around h-1/3"
                >
                    <Image
                        className="  w-[40%] h-[40%]"
                        source={leaf}
                    />
                    <Text
                        className="font-semiBold text-white text-3xl"
                    >Welcome</Text>
                    <Text
                        className="font-regular text-md text-white"
                    >Sign In To Continue</Text>
                </View>
            </View>

            {/* Form Section */}

        <View></View>
        </SafeAreaView>
    )
}

export default SignUp