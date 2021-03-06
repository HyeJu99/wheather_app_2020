import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6F8", "#005BEA"],
        title: "It's Raining",
        subtitle: "For more info look outside!",
        icon: "weather-rainy",
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "It's Clear :)",
        subtitle: "Go get your add burnt!",
        icon: "weather-sunny",
    },
    Thundersrorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house!",
        icon: "weather-lightning",
    },
    Clouds: {
        colors: ["#D7D0C0", "#304352"],
        title: "Cloud",
        subtitle: "Cloud Day!",
        icon: "weather-cloudy",
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B620"],
        title: "Snow",
        subtitle: "Do you want to build the snowman",
        icon: "weather-snowy",
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "No Rain, It's Drizzle!",
        icon: "weather-hail",
    },
    Mist: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "No Rain, It's Mist!",
        icon: "weather-hail",
    },
};

function Weather({ weatherName, temp }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color="white"
                    size={144}
                    name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
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
        backgroundColor: "transparent",
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
