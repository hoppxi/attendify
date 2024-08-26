import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as NavigationBar from 'expo-navigation-bar';
import Constants from 'expo-constants';

const serverUrl = Constants.expoConfig.extra.SERVER;

const App = () => {
    const [theme, setTheme] = useState('light'); // Default theme is light
    const webViewRef = useRef(null);

    const handleWebViewMessage = (event) => {
        const { data } = event.nativeEvent;
        if (data === 'dark-mode') {
            setTheme('dark');
        } else if (data === 'light-mode') {
            setTheme('light');
        }
    };

    const handleBackButton = () => {
        if (webViewRef.current) {
            webViewRef.current.goBack(); // Go back in WebView history
            return true; // Prevent the default back action (closing the app)
        }
        return false; // Allow default back action (closing the app) if no history
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        }

        return () => {
            if (Platform.OS === 'android') {
                BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
            }
        };
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            StatusBar.setBarStyle('light-content');
            NavigationBar.setBackgroundColorAsync('#1a1a1a');
            NavigationBar.setButtonStyleAsync('light');
        } else {
            StatusBar.setBarStyle('dark-content');
            NavigationBar.setBackgroundColorAsync('#e7f0ff');
            NavigationBar.setButtonStyleAsync('dark');
        }
    }, [theme]);

    return (
        <SafeAreaView style={styles.container}>
            <WebView
                ref={webViewRef}
                source={{ uri: serverUrl }} // Next.js server address (e.g., http://localhost:3000)
                style={{ flex: 1 }}
                injectedJavaScript={`
                    (function() {
                        const htmlClass = document.documentElement.className;
                        if (htmlClass.includes('dark-mode')) {
                            window.ReactNativeWebView.postMessage('dark-mode');
                        } else if (htmlClass.includes('light-mode')) {
                            window.ReactNativeWebView.postMessage('light-mode');
                        }
                    })();
                `}
                onMessage={handleWebViewMessage}
                bounces={false}
            />
            <StatusBar backgroundColor={theme === 'dark' ? "#1a1a1a" : "#e7f0ff"} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default App;
