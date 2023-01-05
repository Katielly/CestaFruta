import {StatusBar,View , SafeAreaView } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratNegrito": Montserrat_700Bold
  })
  
if(!fontCarregada) {
  return <AppLoading/>
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}