import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';

function App() {
  const [username, setUsername] = useState('Sample Name')
  const onChange = (value) =>{
    setUsername(value);
  }
  return (
    <div className="App">
      <div>
        <h2>Home</h2>
        <InputField label='Username' onChange ={onChange} />
        {/* <InputField label='Password' /> */}

        {/* <Button label='Login' handleClick={(e) => {}} /> */}
        <div>{`Hello ${username}`}</div>
      </div>
    </div>
  );
}

export default App;
