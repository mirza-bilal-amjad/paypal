import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SinglePlayerGame, Time} from "../../assets";

interface HistoryProps {
    item: any;
}

const History = (props: HistoryProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={SinglePlayerGame} style={{
                    height: 100,
                    aspectRatio: 1,
                    borderRadius: 17,
                }}
                       resizeMode={"contain"}/>
            </View>
            <View style={styles.gameInfo}>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    flexDirection: 'row',
                    backgroundColor: '#E95A242B',
                    borderRadius: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,

                }}>
                    <Text style={[{
                        color: '#E95A24',
                        fontSize: 13
                    }]}>2</Text>
                    <Text style={[{
                        color: '#E95A24',
                        fontSize: 10,
                        marginTop: -5
                    }]}>nd</Text>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: '#E95A242B',

                }}>
                    <View style={{
                        justifyContent: 'space-between',
                    }}>
                        <Text style={[styles.name, {
                            marginBottom: 5
                        }]}>{props.item.name}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 5
                        }}>
                            <Image source={Time}
                                   tintColor={'#CFCFCF'}
                                   style={{
                                       width: 15,
                                       height: 15,
                                       resizeMode: 'contain',
                                       marginRight: 5
                                   }}/>
                            {/*<Text style={styles.name}>{props.item.time}</Text>*/
                            }
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 13,
                                color: '#CFCFCF',
                                marginLeft: 2.5
                            }}>{props.item.time}</Text>
                        </View>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 13,
                        }}>Win:</Text>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 13,
                            marginLeft: 2.5
                        }}>01</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 13,
                        }}>Reward: </Text>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 13,
                            paddingLeft: 2.5
                        }}>{props.item.reward}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default History
const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 20,
        backgroundColor: '#261C52',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        color: '#cfcfcf',
        fontSize: 15,
    },
    gameInfo: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between',
        marginVertical: 5
    }
})
