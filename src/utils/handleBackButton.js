
const handleBackButton = (webViewRef) => {
    if (webViewRef.current) {
        webViewRef.current.goBack(); // Go back in WebView history
        return true; // Prevent the default back action (closing the app)
    }
    return false; // Allow default back action (closing the app) if no history
};

export default handleBackButton;
