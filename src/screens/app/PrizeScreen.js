import * as React from 'react';
import {
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import colors from "../../constants/colors";
import Header from "../../components/general/Header";
import {Gradient} from "../../components/layout/Gradient";
import Card from "../../components/card/Card.component";
import * as prize from "../../../assets/prizes"


const PrizeScreen = () => {

    console.log()
    return (<View style={styles.container}>
        <View style={[styles.container]}>
            <Gradient/>
            <Header light back title={"ODBIERZ NAGRODĘ"}/>
            <ScrollView
                horizontal
                contentContainerStyle={{paddingLeft: 10}}
            >
                <Card
                    otherStyles={{
                        width: 320,
                        height: 280,
                        marginVertical: 20,
                        marginHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image source={prize.football}
                           style={{width: 250, height: 175, borderRadius: 5}}
                    />
                    <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 16}}>Bilety na mecz Śląska Wrocław</Text>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 6,
                        paddingVertical: 4,
                        paddingHorizontal: 16,
                        borderRadius: 18,
                        height: 36,
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>1500 🌍</Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    otherStyles={{
                        width: 320,
                        height: 280,
                        marginVertical: 20,
                        marginHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image source={prize.skybowling}
                           style={{width: 250, height: 175, borderRadius: 5}}
                    />
                    <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 16}}>1h gry w kręgle - SkyBowling
                        Wrocław</Text>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 6,
                        paddingVertical: 4,
                        paddingHorizontal: 16,
                        borderRadius: 18,
                        height: 36,
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>750 🌍</Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    otherStyles={{
                        width: 320,
                        height: 280,
                        marginVertical: 20,
                        marginHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image source={prize.theater}
                           style={{width: 250, height: 175, borderRadius: 5}}
                    />
                    <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 16}}>Bilety na spektakl</Text>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 6,
                        paddingVertical: 4,
                        paddingHorizontal: 16,
                        borderRadius: 18,
                        height: 36,
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>500 🌍</Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    otherStyles={{
                        width: 320,
                        height: 280,
                        marginVertical: 20,
                        marginHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image source={prize.visitorCentre}
                           style={{width: 250, height: 175, borderRadius: 5}}
                    />
                    <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 16}}>Wizyta w Visitor Centre</Text>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 6,
                        paddingVertical: 4,
                        paddingHorizontal: 16,
                        borderRadius: 18,
                        height: 36,
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>500 🌍</Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    otherStyles={{
                        width: 320,
                        height: 280,
                        marginVertical: 20,
                        marginHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image source={prize.historyCentre}
                           style={{width: 250, height: 175, borderRadius: 5}}
                    />
                    <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 16}}>Wizyta w muzeum</Text>
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 6,
                        paddingVertical: 4,
                        paddingHorizontal: 16,
                        borderRadius: 18,
                        height: 36,
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>500 🌍</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
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

export default PrizeScreen;
