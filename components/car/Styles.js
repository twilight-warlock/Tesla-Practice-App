import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	CarContainer: {
		width: "100%",
		height: "100%",
	},
	Image: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",
		position: "absolute",
	},
	Titles: {
		marginTop: "25%",
		width: "100%",
		alignItems: "center",
	},
	Headline: {
		fontSize: 50,
		fontWeight: "700",
	},
	SubTitle: {
		fontSize: 20,
		color: "gray",
	},
	ButtonContainer: {
		position: "absolute",
		bottom: 50,
		width: "100%",
	},
	SpecialTag: {
		textDecorationLine: "underline",
	},
});
export default styles;
