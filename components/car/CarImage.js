import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./Styles.js";
import Button from "../Buttons/Button.js";

const CarImage = ({ ImageName, CarName, Tagline, SpecialTag }) => {
	return (
		<View style={styles.CarContainer}>
			<Image source={ImageName} style={styles.Image} />
			<View style={styles.Titles}>
				<Text style={styles.Headline}>{CarName}</Text>
				<Text style={styles.SubTitle}>
					{Tagline} <Text style={styles.SpecialTag}>{SpecialTag}</Text>
				</Text>
			</View>
			<View style={styles.ButtonContainer}>
				<Button
					type={"primary"}
					buttonText={"Custom Order"}
					onPress={() => console.warn("First btn clicked")}
				/>
				<Button
					type={"secondary"}
					buttonText={"Existing Inventory"}
					onPress={() => console.warn("2nd btn clicked")}
				/>
			</View>
		</View>
	);
};

export default CarImage;
