import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { Svg, Path } from 'react-native-svg';

// Define the props type
interface LoaderProps {
    loading: boolean;
}

// Use the props type in the component
const Loader: React.FC<LoaderProps> = ({ loading }) => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (loading) {
            Animated.loop(
                Animated.timing(
                    spinValue,
                    {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                )
            ).start();
        } else {
            spinValue.setValue(0);
        }
    }, [loading, spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <Animated.View
            className={'w-[50px] h-[50px] mx-auto '}
            style={{ transform: [{ rotate: spin }] }}
        >
            <Svg
                width={50}
                height={50}
                viewBox="0 0 24 24"
            >
                <Path
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    stroke="#000000"
                    d="M12 3V6M12 18V21M6 12H3M21 12H18M5.63672 5.63672L7.75977 7.75977M16.2422 16.2422L18.3633 18.3633M18.3652 5.63477L16.2441 7.75586M7.75781 16.2422L5.63477 18.3652"
                />
            </Svg>
        </Animated.View>
    );
};

export default Loader;