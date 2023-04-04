import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from '../Cards/Cards';
import './App.css';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="mb-4">
        <Cards
          title="Card Title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        >
          <Card.Img
            variant="top"
            src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613298517_30-p-sinii-fon-vodi-33.jpg"
          />
        </Cards>
      </div>
      <div>
        <Cards
          title="Card Title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        ></Cards>
      </div>
    </>
  );
}

export default App;
