import { useRouter } from 'expo-router';
import React, { FC } from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Login: FC = () => {
    const router = useRouter();
    const leaf = require("@/assets/images/leaf.png")
    const leaf2 = require("@/assets/images/leaf2.png")

    // const images = [require('@/assets/images/6.jpg'), require('@/assets/images/1.jpg'), require('@/assets/images/2.webp'), require('@/assets/images/1.jpg'), require('@/assets/images/3.jpeg'), require('@/assets/images/6.jpg'), require('@/assets/images/1.jpg'), require('@/assets/images/3.jpeg'), require('@/assets/images/4.webp')];
    return (
        <SafeAreaView
            className="flex-1 bg-green-900"
        >
            <Image
                className="absolute top-[30%] opacity-5"
                source={leaf2}
            />
            <View
                className="flex-1  mt-[20%]"

            >

                <View className=" flex-row space-x-1 justify-between  h-2/2">
                    <Image
                        className="-left-20 w-[40%] h-[40%] aspect-square opacity-30"
                        source={leaf}
                    />
                    <Image
                        className="w-[200] h-[300] -right-[80] aspect-square opacity-30"

                        source={leaf}
                    />
                    <Image
                        className="w-[100] h-[100] right-[120%] opacity-30 aspect-square"

                        source={leaf2}
                    />

                </View>
                <View
                    className="w-[90%] mx-auto items-center mt-4  "
                >
                    <View
                        className='w-5/6 ml-2 flex items-center space-y-3 mt-10'
                    >
                        <Text
                            className="text-3xl font-semiBold capitalize text-white text-center"
                        >
                            Unlock the power of digital literature
                        </Text>
                        <Text
                            className="font-regular  capitalize text-white text-center"

                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, molestiae. Voluptatem officiis ipsam, reiciendis magnam
                        </Text>
                    </View>

                    <Pressable
                        onPress={() => router.navigate('SignUp')}
                        className="w-5/6 mt-3 bg-white  h-[40] flex justify-center items-center"
                    ><Text
                        className="font-semiBold text-md "
                    >Get Started</Text></Pressable>

                </View>
            </View>
        </SafeAreaView>
    )
}


export default Login