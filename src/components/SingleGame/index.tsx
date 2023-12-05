import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Person, SinglePlayerGame} from "../../assets";
import React from "react";

export function SingleGame(props: { item: any }) {
    return (
        <TouchableOpacity
            onPress={()=>console.log(props.item.name)}
            activeOpacity={0.8} style={styles.cont}>

            <View style={styles.imageCont}>
                <Image source={SinglePlayerGame} style={styles.imageStyle}
                       resizeMode={"contain"}/>
            </View>
            <View style={styles.imageInfoCont}>
                <View style={{
                    paddingVertical: 7.5
                }}>
                    <Text style={{
                        color: "#CFCFCF",
                        fontSize: 15,
                        fontWeight: "400",
                    }}>{props.item.name}</Text>
                </View>
                <View style={{
                    paddingVertical: 7.5,
                    flexDirection: "row",
                    columnGap: 12.5,
                }
                }>
                    <Text style={{
                        color: "#CFCFCF",
                        fontSize: 13,
                    }}>{props.item.retroType}</Text>
                    <Text style={{
                        color: "#CFCFCF",
                        fontSize: 13,
                    }}>{props.item.isGameName}</Text>
                    <Text style={{
                        color: "#CFCFCF",
                        fontSize: 13,
                    }}>{props.item.genre}</Text>
                </View>
                <View style={{
                    paddingVertical: 7.5,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={Person} style={{height: 17, width: 17, aspectRatio: 1}} tintColor={'#cfcfcf'}
                           resizeMode={'contain'}/>
                    <Text style={{marginLeft: 5, color: '#cfcfcf', fontSize: 13}}>{props.item.numberOfPlayers}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCont: {},
    imageStyle: {
        height: 100,
        aspectRatio: 1,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: "#cfcfcf"

    },
    imageInfoCont: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    }
})
