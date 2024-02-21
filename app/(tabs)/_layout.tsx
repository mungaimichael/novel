import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Ionicons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/


function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => {
            let iconName:any 
        
        return {
         tabBarActiveTintColor: Colors[colorScheme ?? 'light']?.tint,
          headerShown: useClientOnlyValue(false, true),
          tabBarIcon: ({ focused }) => {
            
            if (route.name === 'Home')
            {
              iconName = focused ? 'home' :'home-outline'
            }
            else if (route.name === 'Library') {
                iconName = focused ? 'library' : 'library-outline'
            }
                else if (route.name === 'Favourites') {
                iconName = focused ? 'heart' : 'heart-outline'
            }
            return <Ionicons name={iconName} size={22} />
        }
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="search-outline"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 25, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="menu"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 25, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ), 
          headerStyle:{},
          headerTitle: '',
          headerTitleAlign:'center'
        }}
      />
      <Tabs.Screen
        name="Favourites"
        options={{
          title: 'Favourites',
        }}
      />
      <Tabs.Screen
        name='Library'

      />
    </Tabs>
  );
}
