import Header from "./header/Header";
import Menu from "./menu/Menu";
import Users from "./users/Users";

import "./App.scss";

function App() {

  const isUserPage = true;

  return (
    <div className="app">
      <Header/>
      <div className="app_page">
        <Menu/>
        <main>
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
