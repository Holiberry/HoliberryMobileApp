import * as React from 'react';
import {Dimensions, Platform, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from "react-redux";
import {LinearGradient} from "expo-linear-gradient";
import colors from "../../constants/colors";
import Card from "../../components/card/Card.component";
import * as authActions from "../../store/actions/auth";
import Header from "../../components/general/Header";
import {LinearProgress} from 'react-native-elements';
import Badge from "../../components/general/Badge";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const UserChallengesScreen = () => {


    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    }

    return (
        <View style={styles.container}>
            <View style={[styles.container]}>
                <LinearGradient
                    colors={[colors.darkPrimary, colors.secondary]}
                    style={styles.gradient}
                    start={[0, 1]}
                    end={[1, 0]}
                >
                </LinearGradient>
                <Header back light title={"WYZWANIA"}/>
                <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: "center", padding: 10}}>
                    <Card>
                        <View style={styles.ptsContainer}>
                            <Badge
                                size={'lg'}
                                icon={"running"}
                            />
                        </View>
                        <View style={styles.ptsContainer}>
                            <Text style={styles.ptsText}>Przejdź pieszo 3km</Text>
                        </View>
                        <View style={styles.ptsContainer}>
                            <LinearProgress
                                color={colors.primary}
                                variant={'determinate'}
                                value={0.67}
                            />
                            <Text>{(0.67 * 3).toFixed(2)}km / 3km</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.ptsContainer}>
                            <Badge
                                size={'lg'}
                                icon={"bike-fast"}
                                IconFamily={MaterialCommunityIcons}
                            />
                        </View>
                        <View style={styles.ptsContainer}>
                            <Text style={styles.ptsText}>Przejedź 5km rowerem lub hulajnogą</Text>
                        </View>
                        <View style={styles.ptsContainer}>
                            <LinearProgress
                                color={colors.primary}
                                variant={'determinate'}
                                value={0.24}
                            />
                            <Text>{(0.24 * 5).toFixed(2)}km / 5km</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.ptsContainer}>
                            <Badge
                                size={'lg'}
                                icon={"calendar-check"}
                            />
                        </View>
                        <View style={styles.ptsContainer}>
                            <Text style={styles.ptsText}>Idź pieszo do szkoły 3 dni z rzędu</Text>
                        </View>
                        <View style={styles.ptsContainer}>
                            <LinearProgress
                                color={colors.primary}
                                variant={'determinate'}
                                value={0.67}
                            />
                            <Text>2 / 3</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.ptsContainer}>
                            <Badge
                                size={'lg'}
                                icon={"user-plus"}
                            />
                        </View>
                        <View style={styles.ptsContainer}>
                            <Text style={styles.ptsText}>Dodaj Znajomego</Text>
                        </View>
                        <View style={styles.ptsContainer}>
                            <LinearProgress
                                color={colors.primary}
                                variant={'determinate'}
                                value={0}
                            />
                            <Text>0 / 1</Text>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        </View>
    );
}

const multiplier = 2;

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        width: Dimensions.get('window').width * multiplier,
        height: Dimensions.get('window').width * multiplier,
        borderRadius: Dimensions.get('window').width * multiplier * 0.5,
        left: -Dimensions.get('window').width * multiplier * 0.25,
        top: -Dimensions.get('window').width * multiplier * 0.75,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    cardContainer: {
        padding: 10,
        alignItems: 'center'
    },
    ptsContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    menuContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    },
    ptsText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    menuText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default UserChallengesScreen;
