import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const CategoriesMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Meals Detail"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealScreen;
