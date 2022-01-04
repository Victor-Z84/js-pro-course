import Header from "./header/Header";
import Menu from "./menu/Menu";
// import Users from "./users/Users";

// import { Clicker } from "./clicker/Clicker";
// import ClickersBlock from "./clickersBlock/clickersBlock";
import { UsersPage } from "./usersPage/UsersPage";
import "./App.scss";

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
            <></>
            // <ClickersBlock/>
            :
            <div>Empty Page</div>
          }

          {isUserPage
            ?
            <UsersPage/>
            :
            <div>Empty Page</div>
          }
        </main>
      </div>
    </div>
  );
}

export default App;
