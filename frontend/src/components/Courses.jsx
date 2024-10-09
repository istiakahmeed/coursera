import CourseCard from "./CourseCard";
import Header from "./Header";

const Courses = () => {
  return (
    <>
      <div
        id="course"
        className="mx-auto px-4 py-8 bg-slate-900 min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          {/* Add more <CourseCard /> components as needed */}
        </div>
      </div>
    </>
  );
};

export default Courses;
