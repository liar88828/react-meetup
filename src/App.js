import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetsup";
import FavoritePages from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewMeetupPage />} />
      </Routes>
      <Routes>
        <Route path="/new-meetup" element={<AllMeetupPage />} />
      </Routes>
      <Routes>
        <Route path="/favorites" element={<FavoritePages />} />
      </Routes>
    </div>
  );
}

export default App;
 