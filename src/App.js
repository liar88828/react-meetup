import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetsup";
import FavoritePages from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigator from "./components/layout/MainNavigator";
function App() {
  return (
    <div>
      <MainNavigator />
      <Routes>
        <Route path="/" element={<AllMeetupPage />} />
      </Routes>
      <Routes>
        <Route path="/new--meetup" element={<NewMeetupPage />} />
      </Routes>
      <Routes>
        <Route path="/favorites" element={<FavoritePages />} />
      </Routes>
    </div>
  );
}

export default App;
 