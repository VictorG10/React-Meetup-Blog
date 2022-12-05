import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
