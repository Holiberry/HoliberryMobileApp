import * as React from 'react';
import {Dimensions, Image, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import colors from "../../constants/colors";
import Header from "../../components/general/Header";
import {Gradient} from "../../components/layout/Gradient";
import Card from "../../components/card/Card.component";
import * as ribbon from "../../../assets/ribbons"


const AchievementScreen = () => {

    console.log()
    return (<View style={styles.container}>
        <View style={[styles.container]}>
            <Gradient/>
            <Header light back title={"OSIĄGNIĘCIA"}/>
            <View style={{paddingTop: 25}}>
                <View style={styles.ptsContainer}>
                    <Card otherStyles={{width: "40%", height: '100%', alignItems: "center", padding: 20}}>
                        <Image source={ribbon.ribbon10} style={{width: "90%", height: '75%'}}/>
                        <Text style={{
                            textAlign: "center", fontWeight: "bold", marginTop: 10
                        }}>Przejdź pieszo 10km</Text>
                    </Card>
                    <Card otherStyles={{width: "40%", height: '100%', alignItems: "center", padding: 20}}>
                        <Image source={ribbon.ribbon10000} style={{width: "90%", height: '75%'}}/>
                        <Text style={{
                            textAlign: "center", fontWeight: "bold", marginTop: 10
                        }}>Zrób 10000 kroków</Text>
                    </Card>
                </View>
                <View style={styles.ptsContainer}>
                    <Card otherStyles={{width: "40%", height: '100%', alignItems: "center", padding: 20}}>
                        <Image source={ribbon.ribbon100} style={{width: "90%", height: '75%'}}/>
                        <Text style={{
                            textAlign: "center", fontWeight: "bold", marginTop: 10
                        }}>Przejedź 100km rowerem</Text>
                    </Card>
                    <Card otherStyles={{width: "40%", height: '100%', alignItems: "center", padding: 20}}>
                        <Image source={ribbon.ribbon1000} style={{width: "90%", height: '75%'}}/>
                        <Text style={{
                            textAlign: "center", fontWeight: "bold", marginTop: 10
                        }}>Zdobądź 1000 🌍</Text>
                    </Card>
                </View>
            </View>
        </View>
    </View>)
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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    flex: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    cardContainer: {
        padding: 10,
        alignItems: 'center'
    },
    ptsContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingVertical: 10,
        height: 250
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
        fontSize: 10,
        marginTop: 2,
        fontWeight: 'bold',
        color: colors.primary
    },
    menuText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    badgeBig: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    badge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    rankingItem: {
        height: 50,
        padding: 10,
        borderRadius: 25,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    }
});

export default AchievementScreen;
