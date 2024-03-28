import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Login = () => {
    const images = [require('@/assets/images/6.jpg'), require('@/assets/images/1.jpg'), require('@/assets/images/2.webp'), require('@/assets/images/1.jpg'), require('@/assets/images/3.jpeg'), require('@/assets/images/6.jpg'), require('@/assets/images/1.jpg'), require('@/assets/images/3.jpeg'), require('@/assets/images/4.webp')];
    return (
        <SafeAreaView
            className="flex-1 "
        >
            <View
                className="flex-1  mt-[20%]"

            >

                <View className=" flex-row space-x-1 justify-between flex-wrap h-2/2">
                    {images.map((image, index) => (
                        <View
                            className="h-300"
                            key={index}>
                            <Image
                                source={image}
                                className="h-[120] w-[80] object-cover m-3"
                            />
                        </View>
                    ))}
                </View>
                <View
                    className="w-[90%] mx-auto items-center mt-4  "
                    >
                    <View
                        className='w-5/6 ml-2 flex space-y-3'
                    >
                        <Text
                            className="text-3xl font-semiBold capitalize "
                        >
                            Unlock the power of digital literature
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, molestiae. Voluptatem officiis ipsam, reiciendis magnam
                        </Text>
                    </View>
            
                        <Pressable
                            className="w-5/6 mt-3 bg-green-500/50 h-[40] flex justify-center items-center"
                        ><Text
                            className="font-semiBold text-md"
                        >Get Started</Text></Pressable>
                    <Pressable
                        className="w-5/6 mt-1 bg-slate-200/90 h-[40] flex justify-center items-center"
                    ><Text
                        className="font-semiBold text-md"
                    >Login</Text></Pressable>
                    </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({})
export default Login