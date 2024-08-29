import { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';
import handleBackButton from "../utils/handleBackButton";

const useBackButton = (webViewRef) => {

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', () => handleBackButton(webViewRef));
        }

        return () => {
            if (Platform.OS === 'android') {
                BackHandler.removeEventListener('hardwareBackPress', () => handleBackButton(webViewRef));
            }
        };
    }, [webViewRef]);
};

export default useBackButton;
