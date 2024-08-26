import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import * as NavigationBar from 'expo-navigation-bar';
import Constants from 'expo-constants';

const serverUrl = Constants.expoConfig.extra.SERVER;

const App = () => {
    const [theme, setTheme] = useState('light'); // Default theme is light

    const handleWebViewMessage = (event) => {
        const { data } = event.nativeEvent;
        if (data === 'dark-mode') {
            setTheme('dark');
        } else if (data === 'light-mode') {
            setTheme('light');
        }
    };

    useEffect(() => {
        if (theme === 'dark') {
            StatusBar.setBarStyle('light-content');
            NavigationBar.setBackgroundColorAsync('#1a1a1a');
            NavigationBar.setButtonStyleAsync("light");
        } else {
            StatusBar.setBarStyle('dark-content');
            NavigationBar.setBackgroundColorAsync('#e7f0ff');
            NavigationBar.setButtonStyleAsync("dark");
        }
    }, [theme]);

    return (
        <SafeAreaView style={styles.container}>
            <WebView
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
