import { Dimensions, StyleSheet, View, Image } from "react-native";

const GlobalHeader = () => {
    const dimensions = Dimensions.get('window').width;
    return (
        <View style={styles.headerContainer}>
            <Image
                style={{ width: Math.round(dimensions+10), height: 50 }}
                source={require("./header.png")}
                resizeMode={'contain'}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: -5
        
    }
  });
  

export default GlobalHeader;