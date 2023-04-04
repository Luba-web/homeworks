import { BlockPoster } from '../BlockPoster/BlockPoster';
import { CurrencyRates } from '../CurrencyRates/CurrencyRates';
import { InfoContainer } from '../InfoContainer/InfoContainer';
import { Nav } from '../Nav/Nav';
import { NowSmi } from '../NowSmi/NowSmi';
import { Search } from '../Search/Search';
import { WorkErr } from '../Work-err/WorkErr';
import './App.css';

function App() {
  return (
    <>
      <NowSmi arr={[1, 2, 3, 4, 5]} />
      <WorkErr />
      <CurrencyRates />
      <Nav />
      <Search />
      <BlockPoster />
      <InfoContainer />
    </>
  );
}

export default App;
