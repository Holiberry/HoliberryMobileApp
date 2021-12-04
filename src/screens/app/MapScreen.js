import * as React from 'react';
import {useRef} from 'react';
import MapView from 'react-native-maps';
import {Dimensions, Platform, StatusBar, StyleSheet, View} from 'react-native';
import RoundIconButton from "../../components/buttons/RoundIconButton";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

const MapScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const mapRef = useRef(null);
    const navigate = (screenName) => () => {
        navigation.navigate(screenName);
    };
    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                initialRegion={{
                    latitude: 51.1,
                    longitude: 17.0333,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
                style={styles.map}

            />
            <View style={styles.topRightContainer}>
                <RoundIconButton
                    icon="user-circle"
                    onPress={navigate("Profile")}
                />
                <RoundIconButton
                    icon="tasks"
                />
                <RoundIconButton
                    icon="exclamation"
                />
            </View>
            <View style={styles.bottomRightContainer}>
                <RoundIconButton
                    icon="crosshairs"
                />
                <RoundIconButton
                    size="lg"
                    icon="location-arrow"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    topRightContainer: {
        position: 'absolute',
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        right: 0,
        padding: 10
    },
    bottomRightContainer: {
        position: 'absolute',
        alignItems: "flex-end",
        bottom: 0,
        right: 0,
        padding: 10
    },
});

export default MapScreen;