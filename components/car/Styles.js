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
		fontSize: 18,
		color: "gray",
		textTransform: "uppercase",
	},
});
export default styles;
