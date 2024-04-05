import React, { useEffect } from "react";

import AllCourses from "../Components/AllCourses";

function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div>
      <AllCourses></AllCourses>
    </div>
  );
}

export default Courses;
