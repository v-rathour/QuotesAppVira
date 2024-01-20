import MainNavigation from "./Component/mainNavigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import AllQuotes from "./Component/pages/AllQuotes";
import NewQuotes from "./Component/pages/NewQuotes";
import ShowQuote from "./Component/pages/ShowQuote";
import EditQuotes from "./Component/pages/EditQuotes";
import styles from "./App.module.css";
import Login from "./Component/auth/Login";
import SignUp from "./Component/auth/SignUp";
import Logout from "./Component/auth/Logout";
import MainFooter from "./Component/mainNavigation/MainFooter";
import MainHome from "./Component/mainNavigation/MainHome";

const App = () => {
  return (
    <>
      <main className={styles.main}>
      <MainNavigation />
        <Routes>
          <Route path="/" exact element={<MainHome/>} />
          <Route path="/allquotes" exact element={<AllQuotes />} />
          <Route path="/new" exact element={<NewQuotes />} />
          <Route path="/quotes/:id" exact element={<ShowQuote />} />
          <Route path="/quotes/:id/edit" exact element={<EditQuotes />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/logout" exact element={<Logout />} />
        </Routes>
      </main>
     <MainFooter/>
    </>
  );
};

export default App;
