import { Button } from "react-native";
import React from "react";

const PurpleButton = ({ title, onPress }) => {
  return <Button color={"rgb(130, 40, 150)"} title={title} onPress={onPress} />;
};

export default PurpleButton;
