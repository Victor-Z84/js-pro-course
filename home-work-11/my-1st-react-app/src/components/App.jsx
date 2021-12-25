import Header from "./header/Header";
import Menu from "./menu/Menu";
import Users from "./users/Users";

import "./App.scss";
// import { Clicker } from "./clicker/Clicker";
import ClickersBlock from "./clickersBlock/clickersBlock";

function App() {

  const isUserPage = true;

  const isClickers = true;

  return (
    <div className="app">
      <Header/>
      <div className="app_page">
        <Menu/>
        <main className="app__main">
          {/* <Clicker/> */}

          {isClickers
            ?
            <ClickersBlock/>
            :
            <div>Empty Page</div>
          }

          {isUserPage
            ?
            <Users/>
            :
            <div>Empty Page</div>
          }
        </main>
      </div>
    </div>
  );
}

export default App;
