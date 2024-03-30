import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Index from './(auth)/Login';
import AuthProvider from '@/context/AuthContext';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    black: require('../assets/fonts/Montserrat-Black.ttf'),
    regular: require('../assets/fonts/Montserrat-Regular.ttf'),
    thin: require('../assets/fonts/Montserrat-Thin.ttf'),
    semiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),


    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const [authenticated, setAuthenticated] = useState<boolean>(false)

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          {
            authenticated ? (
              <>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name='BookModal' options={{ presentation: 'modal' }} />
                <Stack.Screen name='SearchPage' options={
                  {
                    headerTitle: '',
                    presentation: 'modal'
                  }} />
              </>

            ) :
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />

          }
        </Stack>
      </AuthProvider>

    </ThemeProvider>
  );
}
