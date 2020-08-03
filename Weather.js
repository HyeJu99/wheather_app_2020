import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return (
        <LinearGradient style={styles.container} colors={["#00C6F8", "#005BEA"]}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name="Rain" />
                <Text style={styles.temp}>35°C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>Raining</Text>
                <Text style={styles.subtitle}>for more info look outside</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent", //배경을 투명하게
        color: "white",
        marginBottom: 24,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24,
    },
});
