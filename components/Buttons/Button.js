import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const Button = ({ type, buttonText, onPress }) => {
	return (
		<View style={styles.Container}>
			<Pressable
				style={[
					styles.Button,
					{
						backgroundColor: type == "primary" ? "#171a20cc" : "#ffffffa6",
					},
				]}
				onPress={onPress}
			>
				<Text
					style={[
						styles.Text,
						{ color: type == "primary" ? "#ffffffa6" : "#171a20cc" },
					]}
				>
					{buttonText}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	Container: {
		width: "100%",
		padding: 15,
	},
	Button: {
		borderRadius: 25,
		padding: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	Text: {
		fontSize: 18,
		fontWeight: "700",
	},
});

export default Button;
