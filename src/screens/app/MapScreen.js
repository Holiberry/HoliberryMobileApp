import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {
    Dimensions,
    Image,
    Modal,
    Platform,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import RoundIconButton from "../../components/buttons/RoundIconButton";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useGetScooters} from "../../crud/list/getScooters";
import * as Location from 'expo-location';
import avatar from "../../../assets/icons/avatar.png"
import avatar2 from "../../../assets/icons/avatar2.png"
import avatar3 from "../../../assets/icons/avatar3.png"
import bike from "../../../assets/icons/bike.png"
import myStyles from "../../constants/myStyles";
import {FontAwesome5} from "@expo/vector-icons";
import colors from "../../constants/colors";
import {useGetThreats} from "../../crud/list/getThreats";

const MapScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalDangerVisible, setModalDangerVisible] = useState(false);
    const [modalRouteVisible, setModalRouteVisible] = useState(false);
    const [selectedMeansOfTransport, setSelectedMeansOfTransport] = useState(0);
    const [selectedDestination, setSelectedDestination] = useState(0);
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.watchPositionAsync({
                timeInterval: 1000,
            }, ({coords}) => {
                console.log(coords);
                setLocation(coords)
            })
            setLocation(location.coords);
        })();
    }, []);
    const {data} = useGetScooters();
    const {data: threats} = useGetThreats();
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const navigate = (screenName) => () => {
        navigation.navigate(screenName);
    };

    useEffect(() => {
        typeof markerRef?.current?.redraw === "function" && markerRef.current.redraw();
    }, [location])

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalDangerVisible}
                onRequestClose={() => {
                    setModalDangerVisible(!modalDangerVisible);
                }}
                statusBarTranslucent
            >
                <View style={styles.centeredView}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.bumpySidewalk} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Nierówny
                                    Chodnik</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.dangerousCrosswalk} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Niebezpieczne
                                    przejście</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.noise} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Hałas</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.accident} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Wypadek</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.noSidewalk} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Brak
                                    chodnika</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.dangerousPlace} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Niebezpieczne
                                    miejsce</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.poorlyLitRoad} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Słabe
                                    oświetlenie</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.roadWorks} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Roboty
                                    drogowe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.otherDangers} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Inne
                                    zagrożenie</Text>
                            </TouchableOpacity>
                        </View>
                        <Pressable style={{
                            justifyContent: 'flex-end',
                            alignItems: "center",
                            paddingTop: 40,
                        }}
                                   onPress={() => {
                                       setModalDangerVisible(false)
                                   }}
                        >
                            <View
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}
                            >
                                <FontAwesome5
                                    size={50}
                                    name="times-circle"
                                    color={colors.white}
                                    // color={colors.primary}
                                />

                                <Text
                                    style={{
                                        color: colors.white,
                                        fontWeight: "bold"
                                    }}
                                >Anuluj</Text>
                            </View>
                        </Pressable>


                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalDangerVisible}
                onRequestClose={() => {
                    setModalDangerVisible(!modalDangerVisible);
                }}
                statusBarTranslucent
            >
                <View style={styles.centeredView}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.bumpySidewalk} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Nierówny
                                    Chodnik</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.dangerousCrosswalk} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Niebezpieczne
                                    przejście</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.noise} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Hałas</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.accident} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Wypadek</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.noSidewalk} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Brak
                                    chodnika</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.dangerousPlace} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Niebezpieczne
                                    miejsce</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.poorlyLitRoad} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Słabe
                                    oświetlenie</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.roadWorks} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Roboty
                                    drogowe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}>
                                <Image source={threats.otherDangers} style={styles.threat}/>
                                <Text style={{fontWeight: "bold", color: "white", textAlign: "center"}}>Inne
                                    zagrożenie</Text>
                            </TouchableOpacity>
                        </View>
                        <Pressable style={{
                            justifyContent: 'flex-end',
                            alignItems: "center",
                            paddingTop: 40,
                        }}
                                   onPress={() => {
                                       setModalDangerVisible(false)
                                   }}
                        >
                            <View
                                style={{width: "30%", justifyContent: "flex-start", alignItems: "center"}}
                            >
                                <FontAwesome5
                                    size={50}
                                    name="times-circle"
                                    color={colors.white}
                                    // color={colors.primary}
                                />

                                <Text
                                    style={{
                                        color: colors.white,
                                        fontWeight: "bold"
                                    }}
                                >Anuluj</Text>
                            </View>
                        </Pressable>


                    </View>
                </View>
            </Modal>
            <MapView
                ref={mapRef}
                initialRegion={{
                    latitude: 51.1,
                    longitude: 17.0333,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
                style={styles.map}

            >
                {data.map(scooter => {
                    return <Marker key={scooter.lat + scooter.lng} coordinate={{
                        latitude: scooter.lat,
                        longitude: scooter.lng,
                    }
                    }
                                   image={bike}
                    />
                })}

                {location && <Marker ref={markerRef} coordinate={location}>
                    <Image source={avatar}
                           style={{width: 30, height: 30}}
                           resizeMode="center"
                           resizeMethod="resize"
                    />

                </Marker>}
                {/*{!!threats && threats.map(scooter => {*/}
                {/*    return <Marker key={scooter.position?.lng + scooter.position?.lat} coordinate={{*/}
                {/*        latitude: scooter.position?.lng,*/}
                {/*        longitude: scooter.position?.lat,*/}
                {/*    }*/}
                {/*    }*/}
                
                {/*    >*/}
                {/*        <Image source={{uri: scooter.photoUrl}}*/}
                {/*               style={{width: 50, height: 50}}*/}
                {/*               resizeMode="center"*/}
                {/*               resizeMethod="resize"*/}
                {/*        />*/}
                {/*    </Marker>*/}
                {/*})}*/}
                {/*<Marker coordinate={{latitude: 51.106380, longitude: 17.096980}}>*/}
                {/*    <Image source={avatar}*/}
                {/*           style={{width: 30, height: 30}}*/}
                {/*           resizeMode="center"*/}
                {/*           resizeMethod="resize"*/}
                {/*    />*/}
                
                {/*</Marker>*/}
                {/*<Marker coordinate={{latitude: 51.107920, longitude: 17.098303}}>*/}
                {/*    <Image source={avatar2}*/}
                {/*           style={{width: 30, height: 30}}*/}
                {/*           resizeMode="center"*/}
                {/*           resizeMethod="resize"*/}
                {/*    />*/}
                
                {/*</Marker>*/}
                {/*<Marker coordinate={{latitude: 51.106380, longitude: 17.099778}}>*/}
                {/*    <Image source={avatar3}*/}
                {/*           style={{width: 30, height: 30}}*/}
                {/*           resizeMode="center"*/}
                {/*           resizeMethod="resize"*/}
                {/*    />*/}
                
                {/*</Marker>*/}

            </MapView>
            <View style={styles.topRightContainer}>
                <RoundIconButton
                    icon="user-circle"
                    onPress={navigate("Profile")}
                />
                <RoundIconButton
                    icon="tasks"
                    onPress={navigate("Challenges")}
                />
                <RoundIconButton
                    onPress={() => setModalDangerVisible(true)}
                    icon="exclamation"
                />
            </View>
            <View style={styles.bottomRightContainer}>
                <RoundIconButton
                    onPress={() => {
                        mapRef.current.animateToRegion({
                            latitude: location.latitude ?? 51.1,
                            longitude: location.longitude ?? 17.0333,
                            latitudeDelta: 0.04,
                            longitudeDelta: 0.04,
                        })
                    }
                    }
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
        height: Dimensions.get('window').height + 100,
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
    centeredView: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    threat: {
        width: myStyles.screenWidth * 0.25,
        height: myStyles.screenWidth * 0.25,
    }
});


export default MapScreen;