import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Header from "./header/Header";
import Menu from "./menu/Menu";
// import Users from "./users/Users";

import ClickersBlock from "./clickersBlock/clickersBlock";
import { UsersPage } from "./usersPage/UsersPage";
import UserPage from "./userPage/UserPage";
import { withTheme } from "../hoc/withTheme";

import "./App.scss";


function App({setThemeFromStore}) {

  useEffect(() => setThemeFromStore(), []); // подгружаем тему при монтировании элемента
  return (
    <div className="app">
      <Header/>

      <div className="app_page">
        <Menu/>
        
        <main className="app__main">

          <Routes>
            <Route path='/clickersBlock' element={<ClickersBlock/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/users/:login' element={<UserPage/>}/>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default withTheme(App);
