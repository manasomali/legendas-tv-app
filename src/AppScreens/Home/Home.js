import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, TextInput, View, ScrollView, Image } from "react-native";

import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

const Home = ({ AppState }) => {
    const { allcards, setcard } = AppState;
    const dimensions = Dimensions.get('window');
    const imageWidth = Math.round(dimensions.width*0.3);

    
    var posters = allcards.map(card => card.cardImg);
    return (
        <View style={styles.screen}>
            <GlobalHeader/>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Image
                        style={styles.imgLeft}
                        source={require("../../../assets/legendas-tv-small-logo.png")}
                    />
                    <View style={styles.searchSection}>
                        <TextInput 
                                style={styles.searchInput}
                                cursorColor= '#4885C4'
                                selectionColor= '#4885C4'
                            />
                        <Image
                            source={require('../../../assets/search.png')}
                            style={styles.searchIcon}
                        />
      
                    </View>
                    <Image
                        style={styles.imgRigth}
                        source={require("../../../assets/alert.png")}
                    />
                </View>
                <Image
                    marginTop={20}
                    resizeMode={'contain'}
                    style={{ width: dimensions.width }}
                    source={require("../../../assets/destaques.png")}
                />
                <ScrollView horizontal={true} marginLeft={-imageWidth} marginRight={-imageWidth-15} marginTop={5}>
                {
                    posters.map((poster, i) => {
                        return (
                            <Image
                                resizeMode={'cover'}
                                resizeMethod={'resize'}
                                style={{ width: imageWidth }}
                                key={i}
                                source={poster}
                                marginRight={15}
                                borderRadius={20}
                            />
                        );
                    })
                }
                </ScrollView>
                <GlobalFooter/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    body: {
        flex: 1,
        marginTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
        marginRight:10,
        marginLeft:5,
        height: 40
    },
    searchSection: {
        flex:0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginLeft: 5,
        marginRight: 10,
        borderWidth: 1,
        padding: 5,
        borderRadius: 20,
        borderColor: '#BCBEC0',
    },
    searchIcon: {
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    searchInput: {
        flex:1,
    },
    imgLeft: {
        flex:0.2,
        resizeMethod: 'resize',
        resizeMode: 'contain',
    },
    imgRigth: {
        flex:0.1,
        resizeMethod: 'resize',
        resizeMode: 'contain'
    },

  });
  

export default Home;