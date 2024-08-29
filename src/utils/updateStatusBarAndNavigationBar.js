import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

const updateStatusBarAndNavigationBar = (theme) => {
    if (theme === 'dark') {
        StatusBar.setBarStyle('light-content');
        NavigationBar.setBackgroundColorAsync('#1a1a1a');
        NavigationBar.setButtonStyleAsync('light');
    } else {
        StatusBar.setBarStyle('dark-content');
        NavigationBar.setBackgroundColorAsync('#e7f0ff');
        NavigationBar.setButtonStyleAsync('dark');
    }
};

export default updateStatusBarAndNavigationBar;
