import {Button, FlatList, StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useState} from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [trackedGoals, setGoalToTrack] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);

  function startAddGoalHandler() {
    setModalVisibility(true);
  }

  function endAddGoalHandler() {
    setModalVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalToTrack((currentGoals) => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalToTrack((currentGoals) => {
      return currentGoals.filter((goal) => {
        return goal.id !== id;
      });
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title={"Track New Goal"}
          color={'#a065ec'}
          onPress={startAddGoalHandler}
        />
        <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
        <View style={styles.itemsContainer}>
          <FlatList
            data={trackedGoals}
            renderItem={(flatListItem) => {
              return <GoalItem
                deleteHandler={deleteGoalHandler}
                id={flatListItem.id}
                itemData={flatListItem.item}/>
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  itemsContainer: {
    flex: 5
  }
});
