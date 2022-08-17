import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetsup";
import FavoritePages from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupPage />} />
      </Routes>
      <Routes>
        <Route path="/new--meetup" element={<NewMeetupPage />} />
      </Routes>
      <Routes>
        <Route path="/favorites" element={<FavoritePages />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
 