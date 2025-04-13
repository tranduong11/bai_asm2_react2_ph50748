import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   
     <Provider store={store}>
       <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detail/:id" element={<DetailScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/edit/:id" element={<EditScreen />} />
      </Routes>
    </Router>
   </Provider>
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
