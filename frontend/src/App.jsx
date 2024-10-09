import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SignInPage from "./components/auth/sign-in";
import SignupPage from "./components/auth/sign-up";

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
