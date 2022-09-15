import {Text, View, Pressable, StyleSheet} from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.deleteHandler.bind(this, props.itemData.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.itemData.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  pressedItem: {
    opacity: 0.6
  },
  goalText: {
    color: "white",
    padding: 8
  }
});