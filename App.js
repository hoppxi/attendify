import React, { useState, useRef } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import useTheme from './src/hooks/useTheme';
import useBackButton from './src/hooks/useBackButton';
import WebViewComponent from './src/components/WebView';
import ErrorComponent from './src/components/Error';
import styles from './src/styles';
import { SERVER_URL } from './src/constants';

const App = () => {
    const [theme, setTheme] = useTheme();
    const [error, setError] = useState(null);
    const webViewRef = useRef(null);

    const handleWebViewMessage = (event) => {
        const { data } = event.nativeEvent;
        if (data === 'dark-mode' || data === 'light-mode') {
            setTheme(data);
        }
    };

    useBackButton(webViewRef);

    return (
        <SafeAreaView style={styles.container}>
            <WebViewComponent
                ref={webViewRef}
                source={{ uri: SERVER_URL }}
                onMessage={handleWebViewMessage}
                onError={() => setError('Failed to load content. Please check your internet connection.')}
                onLoadEnd={() => setError(null)}
            />
            {error && <ErrorComponent message={error} />}
            <StatusBar backgroundColor={theme === 'dark' ? "#1a1a1a" : "#e7f0ff"} />
        </SafeAreaView>
    );
};

export default App;
