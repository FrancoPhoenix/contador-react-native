import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaBroScreen } from './src/screens/HolaBroScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaBroScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  )
}

export default App;