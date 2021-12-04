import * as React from 'react';
import {Dimensions, FlatList, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from "react-redux";
import * as authActions from "../../store/actions/auth";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import colors from "../../constants/colors";
import Header from "../../components/general/Header";
import Card from "../../components/card/Card.component";
import {Avatar} from "react-native-elements";
import {user, user2, user3, user4, user5, user6} from "../../crud/data/user";
import TextBadge from "../../components/general/TextBadge";
import {mockSchools, users, users2} from "../../crud/data/users";
import {FontAwesome5} from "@expo/vector-icons";
import {Gradient} from "../../components/layout/Gradient";


const Tab = createMaterialTopTabNavigator();

const Wrapper = () => {

    console.log()
    return (<View style={styles.container}>
        <View style={[styles.container]}>
            <Gradient/>
            <Header light back title={"RANKING"}/>
            <RankingScreen/>
        </View>
    </View>)
}

const RankingScreen = () => {


    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    }

    return (
        <View style={styles.container}>
            <Tab.Navigator
                style={{
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{backgroundColor: 'transparent'}}
                t
                screenOptions={{
                    tabBarStyle: {backgroundColor: 'transparent', elevation: 0},
                    tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
                    tabBarIndicatorStyle: {backgroundColor: 'white'},
                    tabBarActiveTintColor: 'white'
                }}
            >
                <Tab.Screen name="School" component={SchoolRanking}
                            options={{title: 'SZKOŁA'}}
                />
                <Tab.Screen name="City" component={CityRanking}
                            options={{title: 'WROCŁAW'}}
                />
            </Tab.Navigator>
        </View>
    );
}

const SchoolRanking = () => {
    return <View style={styles.flex}>
        <View style={styles.ptsContainer}>
            <Card otherStyles={{marginBottom: 10}}>
                <View style={[styles.ptsContainer, {paddingHorizontal: 15}]}>
                    <View style={{alignItems: 'center', paddingTop: 40, width: '30%'}}>
                        <Avatar
                            title={user2.name.userName}
                            avatarStyle={[{
                                borderColor: 'silver',
                                borderWidth: 3
                            }]}
                            rounded
                            size={"large"}
                            source={{uri: user2.picture.large}}
                        />
                        <TextBadge val={'2'} size={25} bgColor={'silver'} passedStyle={styles.badge}/>
                        <Text style={styles.ptsText}>{user2.name.userName}</Text>
                        <Text
                            style={styles.ptsText}>{(users[0].pts + (Math.random() * 1000) + 1000).toFixed()} 🌍</Text>
                    </View>
                    <View style={{alignItems: 'center', width: '40%'}}>
                        <Avatar
                            title={user.name.userName}
                            avatarStyle={[{
                                borderColor: 'gold',
                                borderWidth: 5
                            }]}
                            rounded
                            size="xlarge"
                            source={{uri: user.picture.large}}
                        />
                        <TextBadge val={'1'} size={40} bgColor={'gold'} passedStyle={styles.badgeBig}/>
                        <Text style={[styles.ptsText, {fontSize: 14}]}>{user.name.userName}</Text>
                        <Text
                            style={[styles.ptsText, {fontSize: 14}]}>{(users[0].pts + (Math.random() * 1000) + 2000).toFixed()} 🌍</Text>
                    </View>
                    <View style={{alignItems: 'center', paddingTop: 40, width: '30%'}}>
                        <Avatar
                            title={user3.name.userName}
                            avatarStyle={[{
                                borderColor: '#cd7f32',
                                borderWidth: 3
                            }]}
                            size={"large"}
                            rounded
                            source={{uri: user3.picture.large}}
                        />
                        <TextBadge val={'3'} size={25} bgColor={'#cd7f32'} passedStyle={styles.badge}/>
                        <Text style={styles.ptsText}>{user3.name.userName}</Text>
                        <Text style={styles.ptsText}>{(users[0].pts + (Math.random() * 1000)).toFixed()} 🌍</Text>
                    </View>
                </View>
            </Card>
        </View>
        <View style={{flex: 1}}>
            <FlatList
                overScrollMode={'never'}
                data={users}
                renderItem={({item, index}) => <Card otherStyles={styles.rankingItem}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}><Text style={{
                        fontWeight: "bold",
                        marginRight: 10,
                        fontSize: 16,
                    }}>{index + 4}</Text>
                        {item?.pictureurl ?
                            <Avatar
                                title={"avatar"}
                                rounded
                                source={{uri: item?.pictureurl}}
                            /> :
                            <FontAwesome5
                                size={30}
                                name="user-circle"
                                color={colors.primary}
                                // color={colors.primary}
                            />}

                        <Text
                            style={{
                                fontWeight: "bold",
                                marginLeft: 5,
                                fontSize: 14,
                            }}

                        > {item.name}</Text></View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            marginRight: 5,
                            fontSize: 16,
                        }}

                    >{item.pts.toFixed()} 🌍</Text></Card>}
                numColumns={1}
            />
        </View>
    </View>
}
const CityRanking = () => {
    return <View style={styles.flex}>
        <View style={styles.ptsContainer}>
            <Card otherStyles={{marginBottom: 10}}>
                <View style={[styles.ptsContainer, {paddingHorizontal: 15}]}>
                    <View style={{alignItems: 'center', paddingTop: 40, width: '30%'}}>
                        <View>
                            <Avatar
                                title={user5.name.userName}
                                avatarStyle={[{
                                    borderColor: 'silver',
                                    borderWidth: 3
                                }]}
                                rounded
                                size={"large"}
                                source={{uri: user5.picture.large}}
                            />
                            <TextBadge val={'2'} size={25} bgColor={'silver'} passedStyle={styles.badge}/>
                        </View>
                        <Text style={styles.ptsText}>{user5.name.userName}</Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.gray,
                                marginLeft: 5,
                                fontSize: 8,
                                textAlign: "center"
                            }}

                        >{mockSchools[0].school} </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.gray,
                                marginLeft: 5,
                                fontSize: 8,
                                textAlign: "center"
                            }}

                        >kl. {mockSchools[0].class}{mockSchools[0].subclass} </Text>
                        <Text
                            style={styles.ptsText}>{(users2[0].pts + (Math.random() * 3000) + 3000).toFixed()} 🌍</Text>
                    </View>
                    <View style={{alignItems: 'center', width: '40%'}}>
                        <View>
                            <Avatar
                                title={user4.name.userName}
                                avatarStyle={[{
                                    borderColor: 'gold',
                                    borderWidth: 5
                                }]}
                                rounded
                                size="xlarge"
                                source={{uri: user4.picture.large}}
                            />
                            <TextBadge val={'1'} size={40} bgColor={'gold'} passedStyle={styles.badgeBig}/>
                        </View>
                        <Text style={[styles.ptsText, {fontSize: 14}]}>{user4.name.userName}</Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.gray,
                                marginLeft: 5,
                                fontSize: 8,
                                textAlign: "center"
                            }}

                        >{mockSchools[1].school} </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.gray,
                                marginLeft: 5,
                                fontSize: 8,
                                textAlign: "center"
                            }}

                        >kl. {mockSchools[1].class}{mockSchools[1].subclass} </Text>
                        <Text
                            style={[styles.ptsText, {fontSize: 14}]}>{(users2[0].pts + (Math.random() * 3000) + 6000).toFixed()} 🌍</Text>
                    </View>
                    <View style={{alignItems: 'center', paddingTop: 40, width: '30%'}}>
                        <View>
                            <Avatar
                                title={user6.name.userName}
                                avatarStyle={[{
                                    borderColor: '#cd7f32',
                                    borderWidth: 3
                                }]}
                                size={"large"}
                                rounded
                                source={{uri: user6.picture.large}}
                            />
                            <TextBadge val={'3'} size={25} bgColor={'#cd7f32'} passedStyle={styles.badge}/>
                        </View>
                        <Text style={styles.ptsText}>{user6.name.userName}</Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.gray,
                                marginLeft: 5,
                                fontSize: 7,
                                textAlign: "center"
                            }}

                        >{mockSchools[2].school} </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.gray,
                                marginLeft: 5,
                                fontSize: 7,
                                textAlign: "center"
                            }}

                        >kl. {mockSchools[2].class}{mockSchools[2].subclass} </Text>
                        <Text style={styles.ptsText}>{(users2[0].pts + (Math.random() * 3000)).toFixed()} 🌍</Text>
                    </View>
                </View>
            </Card>
        </View>
        <View style={{flex: 1}}>
            <FlatList
                overScrollMode={'never'}
                data={users2}
                renderItem={({item, index}) => <Card otherStyles={styles.rankingItem}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}><Text style={{
                        fontWeight: "bold",
                        marginRight: 10,
                        fontSize: 16,
                    }}>{index + 4}</Text>
                        {item?.pictureurl ?
                            <Avatar
                                title={"avatar"}
                                rounded
                                source={{uri: item?.pictureurl}}
                            /> :
                            <FontAwesome5
                                size={28}
                                name="user-circle"
                                color={colors.primary}
                                // color={colors.primary}
                            />}
                        <View>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    marginLeft: 5,
                                    fontSize: 14,
                                }}

                            > {item.name}</Text>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    color: colors.gray,
                                    marginLeft: 5,
                                    fontSize: 7,
                                }}

                            > {item.school}, kl. {item.class}{item.subclass}</Text>
                        </View>
                    </View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            marginRight: 5,
                            fontSize: 16,
                        }}

                    >{item.pts.toFixed()} 🌍</Text></Card>}
                numColumns={1}
            />
        </View>
    </View>
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

export default Wrapper;
