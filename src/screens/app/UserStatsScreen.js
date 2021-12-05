import * as React from 'react';
import {Dimensions, Platform, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from "react-redux";
import colors from "../../constants/colors";
import {Avatar, ListItem} from 'react-native-elements';
import {user} from "../../crud/data/user";
import Card from "../../components/card/Card.component";
import RoundIconButton from "../../components/buttons/RoundIconButton";
import * as authActions from "../../store/actions/auth";
import {Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import AddButton from "../../components/general/AddButton.component";
import {Gradient} from "../../components/layout/Gradient";
import Badge from "../../components/general/Badge";

const UserStatsScreen = () => {

    const navigation = useNavigation()
    const navigate = (screenName) => () => {
        navigation.navigate(screenName);
    };


    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    }

    return (
        <View style={styles.container}>
            <View style={[styles.container]}>
                <Gradient/>
                <ScrollView>
                    <ListItem containerStyle={{backgroundColor: 'transparent', paddingHorizontal: 30}}>
                        <View>
                            <Avatar
                                title={user.name.first}
                                avatarStyle={[{
                                    borderColor: 'white',
                                    borderWidth: 2
                                }]}
                                rounded
                                size="large"
                                source={{uri: user.picture.large}}
                            />
                            <Badge
                                passedStyle={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0
                                }}
                                icon="edit"
                                bgColor={"white"}
                                color={colors.gray}
                                pxSize={20}
                            />
                        </View>
                        <ListItem.Content
                            style={{
                                backgroundColor: 'transparent',
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                            <View>
                                <ListItem.Title style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}>{user.name.first} {user.name.last}</ListItem.Title>
                                <ListItem.Subtitle
                                    style={{color: '#EEEEEE', fontSize: 14}}>@{user.name.userName}</ListItem.Subtitle>

                            </View>
                            <View style={
                                {
                                    marginTop: -16
                                }
                            }>
                                <RoundIconButton
                                    bgColor={'transparent'}
                                    icon={'sign-out-alt'}
                                    size={'lg'}
                                    onPress={logout}
                                />
                                <Badge
                                    passedStyle={{
                                        position: "absolute",
                                        bottom: -12,
                                        right: 14
                                    }}
                                    icon="edit"
                                    bgColor={"transparent"}
                                    pxSize={32}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    <View style={styles.cardContainer}>
                        <Card>
                            <View style={styles.ptsContainer}>
                                <Text style={styles.ptsText}>Punkty Ziemi</Text>
                                <Text style={styles.ptsText}>{user.points} 🌍</Text>
                            </View>
                            <View style={{paddingVertical: 10}}>
                                <ListItem containerStyle={{backgroundColor: 'transparent', paddingHorizontal: 30}}>
                                    <View style={{
                                        borderColor: colors.primary,
                                        borderWidth: 2,
                                        width: 48,
                                        height: 48,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 25,
                                        overflow: 'hidden'
                                    }}>
                                        <FontAwesome5
                                            size={24}
                                            name="running"
                                            color={colors.primary}
                                        />
                                    </View>
                                    <ListItem.Content
                                        style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row'
                                        }}>
                                        <View>
                                            <ListItem.Title style={{
                                                fontWeight: 'bold',
                                                fontSize: 14
                                            }}>Ilość kroków: 18875</ListItem.Title>
                                            <ListItem.Subtitle
                                                style={{
                                                    fontSize: 10
                                                }}>15.76km</ListItem.Subtitle>

                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                                <ListItem containerStyle={{backgroundColor: 'transparent', paddingHorizontal: 30}}>
                                    <View style={{
                                        borderColor: colors.primary,
                                        borderWidth: 2,
                                        width: 48,
                                        height: 48,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 25,
                                        overflow: 'hidden'
                                    }}>
                                        <MaterialCommunityIcons
                                            size={24}
                                            name="bike-fast"
                                            color={colors.primary}
                                        />
                                    </View>
                                    <ListItem.Content
                                        style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row'
                                        }}>
                                        <View>
                                            <ListItem.Title style={{
                                                fontWeight: 'bold',
                                                fontSize: 14
                                            }}>Dystans pokonany na rowerze: 127.98km</ListItem.Title>
                                            <ListItem.Subtitle
                                                style={{
                                                    fontSize: 10
                                                }}>12h 35min</ListItem.Subtitle>
                                        </View>
                                    </ListItem.Content>
                                </ListItem><ListItem containerStyle={{backgroundColor: 'transparent', paddingHorizontal: 30}}>
                                    <View style={{
                                        borderColor: colors.primary,
                                        borderWidth: 2,
                                        width: 48,
                                        height: 48,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 25,
                                        overflow: 'hidden'
                                    }}>
                                        <Entypo
                                            size={24}
                                            name="tree"
                                            color={colors.primary}
                                        />
                                    </View>
                                    <ListItem.Content
                                        style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row'
                                        }}>
                                        <View>
                                            <ListItem.Title style={{
                                                fontWeight: 'bold',
                                                fontSize: 14
                                            }}>Zaoszczędzone paliwo: ~12.7l</ListItem.Title>
                                            <ListItem.Subtitle
                                                style={{
                                                    fontSize: 10
                                                }}>Odpowiada to 0.38kg dwutlenku węgla</ListItem.Subtitle>
                                            <ListItem.Subtitle
                                                style={{
                                                    fontSize: 10
                                                }}>Jedno drzewo musi pracować średnio 21 dni aby pochłonąć taką ilość CO2</ListItem.Subtitle>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            </View>
                        </Card>
                    </View>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1
    },
    menuContainer: {
        justifyContent: 'space-around',
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

export default UserStatsScreen;
