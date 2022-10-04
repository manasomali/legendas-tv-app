import { Dimensions, StyleSheet, View, Image } from "react-native";

const GlobalFooter = () => {
    const dimensions = Dimensions.get('window').width;
    return (
        <View style={styles.footerContainer}>
            <Image
                style={{ width: Math.round(dimensions+10) }}
                source={require("./footer.png")}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        alignItems: "center",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
  });
  

export default GlobalFooter;