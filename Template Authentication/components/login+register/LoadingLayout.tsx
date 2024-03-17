import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/styles';

function LoadingLayout({ message }:any) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" color =  {Colors.primary800}/>
    </View>
  );
}

export default LoadingLayout;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight:"600",
    color:Colors.primary800
  },
});
