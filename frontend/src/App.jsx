import Achievement from "./components/Achievement";
import Courses from "./components/Courses";
import FAQ from "./components/FAQ";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <HomePage />
      <Achievement />
      <Courses />
      <FAQ />
      <Testimonial />
    </div>
  );
}

export default App;
