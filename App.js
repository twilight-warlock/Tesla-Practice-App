import React from "react";
import { StyleSheet, View } from "react-native";
import Cars from "./components/car/Cars";
import Header from "./components/header/Header";

export default function App() {
	return (
		<View style={styles.container}>
			<Cars />
			<Header />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
