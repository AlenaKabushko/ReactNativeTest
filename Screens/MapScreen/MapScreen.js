import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, {
    PROVIDER_GOOGLE,
} from "react-native-maps";

function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 50.00156,
                    longitude: 36.231537,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default MapScreen;
