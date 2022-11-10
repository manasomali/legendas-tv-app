import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, TextInput, View, ScrollView, Image, FlatList, SafeAreaView } from "react-native";

import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

const Home = ({ AppState }) => {
    const { allcards, setcard } = AppState;
    
    const RemoteImage = ({uri, id, desiredWidth}) => {
        const [desiredHeight, setDesiredHeight] = useState(0);
        if(!(uri.includes("empty"))){
            Image.getSize(uri, (width, height) => {
                setDesiredHeight(desiredWidth / width * height)
            }, (error) => {
                console.error(`Couldn't get the image size: ${error.message}`);
                console.error(`Couldn't get the image size: ${uri}`);
            });
        }
    
        return (
            <Image
                source={{uri}}
                style={{
                    borderWidth: 1,
                    width: desiredWidth,
                    height: desiredHeight,
                    marginRight: 15
                }}
                resizeMode={'contain'}
                resizeMethod={'resize'}
                key={{id}}
                borderRadius={30}
                flexBasis={0}
            />
        )
    }
    

    const dimensions = Dimensions.get('window');
    function createRows(data, columns) {
        const rows = Math.floor(data.length / columns); // [A]
        let lastRowElements = data.length - rows * columns; // [B]
        while (lastRowElements !== columns) { // [C]
          data.push({ // [D]
            cardID: `empty-${lastRowElements}`,
            cardImg: `empty-${lastRowElements}`,
            empty: true
          });
          lastRowElements += 1; // [E]
        }
        return data; // [F]
      }
    
    
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
                <View style={styles.horizontalScrollView}>
                    <Image
                        style={{zIndex: 1}}
                        source={require("../../../assets/left.png")}
                    />
                    <SafeAreaView width={dimensions.width} marginLeft={-15} marginRight={-30} marginTop={5}>
                        <FlatList
                            horizontal={true}
                            keyExtractor={item => item.cardID}
                            data={allcards}
                            renderItem={({ item }) => {
                                return (
                                  <RemoteImage
                                        uri={item.cardImg}
                                        id={item.cardID}
                                        desiredWidth={Math.round(dimensions.width*0.35)}
                                        marginRight={15}
                                    />
                                );
                              }}
                              
                        />
                    </SafeAreaView>
                    <Image
                        source={require("../../../assets/right.png")}
                    />
                </View>
                <View style={styles.verticalScrollView}>
                    <SafeAreaView marginRight={-15}>
                        <FlatList
                            horizontal={false}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            showsHorizontalScrollIndicator={false}
                            numColumns={3}
                            data={createRows(allcards, 3)}
                            renderItem={({ item }) => {
                                if (item.empty) {
                                  return (<View style={[styles.item, styles.itemEmpty]}>
                                   <RemoteImage
                                        uri={item.cardImg}
                                        id={item.cardID}
                                        desiredWidth={Math.round(dimensions.width*0.3)}
                                    />
                                  </View>);
                                }
                                return (
                                  <View style={styles.item}>
                                    <RemoteImage
                                        uri={item.cardImg}
                                        id={item.cardID}
                                        desiredWidth={Math.round(dimensions.width*0.3)}
                                    />
                                  </View>
                                );
                              }}
                              
                        />
                    </SafeAreaView>
                </View>
                
            </View>
            <GlobalFooter/>
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
    horizontalScrollView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    verticalScrollView: {
        flex: 1,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    styleScrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
    item: {
        alignItems: "center",
        flexBasis: 0,
        flexGrow: 1,
        marginTop: 10,
    
    },
    
    

  });
  

export default Home;