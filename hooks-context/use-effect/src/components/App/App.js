import { useEffect, useState } from 'react';
import './App.css';
import { Lists } from '../Lists/Lists';
import { Details } from '../Details/Details';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [dataUsers, setDataUsers] = useState([]);
  const [infoUser, setInfoUser] = useState({});
  const [currentUserId, setCurrentUserId] = useState(0);

  useEffect(() => {
    const updateUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',
          {
            method: 'GET',
          }
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setDataUsers([...data]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    updateUsers();
  }, []);

  useEffect(() => {
    if (currentUserId === 0) {
      return;
    }

    const getInfoUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${currentUserId}.json`,
          {
            method: 'GET',
          }
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setInfoUser(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getInfoUser();
  }, [currentUserId]);

  const onOpen = (id) => {
    setCurrentUserId(id);
  };

  return (
    <div className="container">
      <Lists dataUsers={dataUsers} onOpen={onOpen} />
      {currentUserId !== 0 ? (
        <div>
          {isLoading ? <p>Loading...</p> : <Details infoUser={infoUser} />}
        </div>
      ) : null}
    </div>
  );
}

export default App;
