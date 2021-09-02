import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarImage from "./components/car/CarImage";

export default function App() {
	return (
		<View style={styles.container}>
			<CarImage
				ImageName={require("./assets/images/ModelS.jpeg")}
				CarName={"Model S"}
				Tagline={"Order Online for"}
				SpecialTag={"Touchless Delivery"}
			/>
			<StatusBar style="auto" />
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
