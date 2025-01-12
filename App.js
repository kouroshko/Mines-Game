import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoxesScreen from './screens/boxesScreen';
import BoxesRender from './components/boxesRender';
import BetSetter from './components/betSetter';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BetSetter" screenOptions={{
          headerTitle: 'Bet Amount',
          headerStyle: {
            backgroundColor: '#2e2d2d',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerBackTitleStyle: {
            color: '#fff',
          },

        }}>
          <Stack.Screen name="BetSetter" component={BetSetter} />
          <Stack.Screen name="BoxesScreen" component={BoxesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
