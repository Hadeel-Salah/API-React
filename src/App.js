import './styles/app.css';
import { LogoIcon } from "./assets/icons"
import CrudUser from "./components/CrudUser"

function App() {
  return (
    <>
      <header>
        <div className='header__content'>
          <div className='logo'>
            <LogoIcon />
            <strong>JSON SERVER API</strong>
          </div>
        </div>
      </header>
      <main>
        <CrudUser />
      </main>
    </>
  );
}

export default App;
