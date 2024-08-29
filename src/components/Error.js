
import { View, Text } from "react-native";
import styles from "../styles";

const ErrorComponent = ({ message }) => (
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{message}</Text>
    </View>
);

export default ErrorComponent;