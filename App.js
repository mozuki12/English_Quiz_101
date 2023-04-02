import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/Spalshscreen'
import MateriScreen from './components/Materi';
import PlayScreen from './components/Play';
import VerbPlayScreen from  './components/VerbPlay';
import NounPlayScreen from './components/NounPlay';
import AdjecPlayScreen from './components/AdjecPlay';
import VerbMatScreen from './components/VerbMat';
import NounMatScreen from './components/NounMat';
import AdjecMatScreen from './components/AdjecMat';
import AboutScreen from './components/About';
import PeringatanScreen from './components/Peringatan';
import PengumumanScreen from './components/Pengumuman';
import QuestVerb1Screen from './components/QuestVerb1';
import QuestVerb2Screen from './components/QuestVerb2';
import QuestVerb3Screen from './components/QuestVerb3';
import QuestVerb4Screen from './components/QuestVerb4';
import QuestVerb5Screen from './components/QuestVerb5';
import QuestNoun1Screen from './components/QuestNoun1';
import QuestNoun2Screen from './components/QuestNoun2';
import QuestNoun3Screen from './components/QuestNoun3';
import QuestNoun4Screen from './components/QuestNoun4';
import QuestNoun5Screen from './components/QuestNoun5';
import QuestAdject1Screen from './components/QuestAdject1';
import QuestAdject2Screen from './components/QuestAdject2';
import QuestAdject3Screen from './components/QuestAdject3';
import QuestAdject4Screen from './components/QuestAdject4';
import QuestAdject5Screen from './components/QuestAdject5';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MateriScreen"
          component={MateriScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerbPlayScreen"
          component={VerbPlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NounPlayScreen"
          component={NounPlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdjecPlayScreen"
          component={AdjecPlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerbMatScreen"
          component={VerbMatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NounMatScreen"
          component={NounMatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdjecMatScreen"
          component={AdjecMatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PeringatanScreen"
          component={PeringatanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdjecMatScreen"
          component={AdjecMatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PengumumanScreen"
          component={PengumumanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestVerb1Screen"
          component={QuestVerb1Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestVerb2Screen"
          component={QuestVerb2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestVerb3Screen"
          component={QuestVerb3Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestVerb4Screen"
          component={QuestVerb4Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestVerb5Screen"
          component={QuestVerb5Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestNoun1Screen"
          component={QuestNoun1Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestNoun2Screen"
          component={QuestNoun2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestNoun3Screen"
          component={QuestNoun3Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestNoun4Screen"
          component={QuestNoun4Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestNoun5Screen"
          component={QuestNoun5Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestAdject1Screen"
          component={QuestAdject1Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestAdject2Screen"
          component={QuestAdject2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestAdject3Screen"
          component={QuestAdject3Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestAdject4Screen"
          component={QuestAdject4Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestAdject5Screen"
          component={QuestAdject5Screen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}