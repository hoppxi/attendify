
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    errorContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
    },
    errorText: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;