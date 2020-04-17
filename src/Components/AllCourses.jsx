import React, { useState } from "react";
import { Link } from "react-router-dom";
const Courses_Cont = props => {
  let CourseData = [
    {
      Course_Name: "JavaScript",
      Instructor_Name: "Mosh Hamedanni",
      Playlist_ID: "PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax",
      Course_Img:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV"
    },
    {
      Course_Name: "Angular from Scratch",
      Instructor_Name: "Mosh Hamedanni",
      Playlist_ID: "PLTjRvDozrdlxAhsPP4ZYtt3G8KbJ449oT",
      Course_Img:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/stccKo5kR5iZY7CtLFvi"
    },
    {
      Course_Name: "React Js",
      Instructor_Name: "Mosh Hamedanni",
      Playlist_ID: "PLTjRvDozrdlzBR7lYU4DtQRDQ6xCNSBIS",
      Course_Img:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
    },
    {
      Course_Name: "Node Js",
      Instructor_Name: "Mosh Hamedanni",
      Playlist_ID: "PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm",
      Course_Img:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nlMKa4JeSBysXoj7pa90"
    },
    {
      Course_Name: "Front End Development",
      Instructor_Name: "Mosh Hamedanni",
      Playlist_ID: "PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs",
      Course_Img:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/GaDoSeRHQqeFuL19uPWR"
    },
    {
      Course_Name: "SQL in 3 Hours",
      Instructor_Name: "Mosh Hamedanni",
      Playlist_ID: "PLTjRvDozrdlynYXGUfyyMZdrQ0Sz27aud",
      Course_Img:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/RL4kFbu1SMiCIeLAtWX3"
    }
  ];
  const [courseInfo, setCourseInfo] = useState(CourseData);
  console.log(courseInfo);
  let newArray = courseInfo.map((item, i) => {
    return (
      <Link
        to={{
          pathname: `Course_Playlist_Videos/${item.Playlist_ID}`
        }}
      >
        <div className="col-sm-4 col-12 mb-4">
          <div className="card shadow" style={{ width: "20rem" }}>
            <div className="inner">
              <img
                className="card-img-top"
                src={item.Course_Img}
                alt="Card image cap"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title  bg_orange_heading ">
                {item.Course_Name}
              </h5>
              <p className="card-text text-dark">{item.Instructor_Name}</p>
              <a className="btn btn-success text-white">Watch</a>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center mb-3">{newArray}</div>
      </div>
    </div>
  );
};

export default Courses_Cont;
