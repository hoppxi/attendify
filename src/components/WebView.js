import React from 'react';
import { WebView } from 'react-native-webview';
import styles from '../styles';

const WebViewComponent = React.forwardRef((props, ref) => {
    return (
        <WebView
            ref={ref}
            source={props.source}
            style={styles.webView}
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
            onMessage={props.onMessage}
            onError={props.onError}
            onLoadEnd={props.onLoadEnd}
            bounces={false}
            setBuiltInZoomControls={false}
        />
    );
});

export default WebViewComponent;
