/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { Filter } from './components/filter/filter';
import { Navigation } from './components/navmenu/nav';
import { Personal } from './components/personal/personal';
import { Player } from './components/player/player';
import { Playlist } from './components/playlist/playlist';
import { Search } from './components/searchblock/search';
import { Sidebar } from './components/sidebar/sidebar';
import { Logo } from './logo/logo';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">

        <nav className="main__nav nav">
            <div className="nav__logo logo">
              <Logo />
            </div>
            
            <section>
              <Navigation />
            </section>

          </nav>

          <div className="main__centerblock centerblock">

            <section>
              <Search />
            </section>

            <h2 className="centerblock__h2">Треки</h2>

            <Filter />

            <div className="centerblock__content">
              <Playlist />
            </div>
            
          </div>
          <div className="main__sidebar sidebar">

            <section>
              <Personal />
            </section>

            <section>
              <Sidebar />
            </section>
            
          </div>
        </main>

        <section>
          <Player />
        </section>

        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
