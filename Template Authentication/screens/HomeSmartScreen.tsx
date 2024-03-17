import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../redux store/hook";
import { logOut } from "../redux store/authSlice";
import { testApi } from "../api/authentication/auth";

function HomeSmartScreen() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.auth.token)

  async function call(){
    try{
      const res = await testApi(token)
      console.log(res)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    call()
  },[])

  function logOutUser() {
    dispatch(logOut());
  }

  return (
    <View style={styles.homeScreenContainer}>
      <Text>HOME SCREEN</Text>
      <Button title="Lot out" onPress={logOutUser} />
    </View>
  );
}

export default HomeSmartScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
