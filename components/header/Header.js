import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Header = () => {
	return (
		<View style={styles.Container}>
			<Image
				style={styles.logo}
				source={require("../../assets/images/logo.png")}
			/>
			<Image
				style={styles.menu}
				source={require("../../assets/images/menu.png")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	Container: {
		position: "absolute",
		top: 50,
		zIndex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 25,
	},
	logo: {
		width: 100,
		height: 20,
		resizeMode: "contain",
	},
	menu: {
		width: 25,
		height: 25,
	},
});

export default Header;
