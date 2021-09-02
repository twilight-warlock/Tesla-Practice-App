import React from "react";
import { FlatList, Dimensions } from "react-native";
import CarImage from "./CarImage";
import carsData from "./carsData";

const Cars = () => {
	return (
		<FlatList
			data={carsData}
			renderItem={({ item }) => <CarImage car={item} />}
			style={{ width: "100%", height: "100%" }}
			snapToAlignment={"start"}
			decelerationRate={"fast"}
			snapToInterval={Dimensions.get("screen").height}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default Cars;
