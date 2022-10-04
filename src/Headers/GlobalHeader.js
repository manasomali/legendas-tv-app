import { Dimensions, StyleSheet, View, Image } from "react-native";

const GlobalHeader = () => {
    const dimensions = Dimensions.get('window').width;
    return (
        <View style={styles.headerContainer}>
            <Image
                style={{ width: Math.round(dimensions+10) }}
                source={require("./header.png")}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
        
    }
  });
  

export default GlobalHeader;