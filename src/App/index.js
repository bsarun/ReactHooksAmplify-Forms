import './App.css';
import { View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Dashboard } from '../Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <View className="dashboard-view" as="section"><Dashboard /></View>
      </header>
    </div>
  );
}

export default App;