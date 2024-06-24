import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Users from './components/Users';
import ReactLoading from 'react-loading';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Liste des users</h1>
      {loading ? (
        <ReactLoading type="spin" color="#0000ff" height={50} width={50}  />
      ) : (
        <Users users={users} />
      )}
    </div>
  );
}

export default App;
