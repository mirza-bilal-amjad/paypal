import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native'
import React from 'react'
import {historyGames, menuItems, singlePlayerGameItems} from "./constants";
import {MenuIcon} from "./components";
import {SingleGame} from "./components/SingleGame";
import History from "./components/History";


const App = () => {

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#1D1540',
            rowGap: 10
        }}>
            <View style={{
                marginVertical: 10
            }}>

                <FlatList
                    data={menuItems}
                    horizontal

                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.menuStyle}
                    renderItem={({item}) => <MenuIcon id={item.id} name={item.name}/>}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                />
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{marginHorizontal: 18}}
                    ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                    data={singlePlayerGameItems}
                    renderItem={({item}) =>
                        (
                            <SingleGame item={item}/>
                        )
                    }/>
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{marginHorizontal: 18}}
                    ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                    data={historyGames}
                    renderItem={({item}) =>
                        (
                            <History item={item}/>
                        )
                    }/>
            </View>

        </SafeAreaView>
    );
}
export default App
const styles = StyleSheet.create({
    menuStyle: {
        paddingHorizontal: 10,
        // marginVertical: 10,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },

})
