import { useJsonFetch } from '../../hooks/useJsonFetch/useJsonFetch';
import './App.css';

function App() {
  const [data, loading] = useJsonFetch('data');
  const [, , error] = useJsonFetch('error');

  return (
    <>
      <div>
        {loading ? <span>...Loading</span> : <span>Запрос status: {data}</span>}
      </div>
      <div>
        {loading ? (
          <span>...Loading</span>
        ) : (
          <span>Запрос на Error: {error}</span>
        )}
      </div>
    </>
  );
}

export default App;
