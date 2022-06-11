import CourseCard from "../CourseCard";
import { CourseData } from "../../types";
import Style from "./CoursesRouter.module.css";

interface Props {
  courses: CourseData[];
}

export default function CoursesRouter({ courses }: Props): JSX.Element {
  return (
    <div className={Style.container}>
      {courses.map(courseData => {
        const { name, coursecode } = courseData;
        return <CourseCard name={name} coursecode={coursecode} />;
      })}
    </div>
  );
}
