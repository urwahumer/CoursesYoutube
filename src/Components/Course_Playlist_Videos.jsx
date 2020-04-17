import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Course_Playlist_Videos = props => {
  const [courses, setCourses] = useState([]);
  const [playid, setplayid] = useState(props.match.params.coursename);
  const [currentVideo, setCurrentVideo] = useState();
  const [currentTitle, setCurrentTitle] = useState();
  const apiKey = "AIzaSyAH1dfQAU1wOBl9diKpCkWb6h2j6cnKxoI";

  console.log("api key" + apiKey);

  useEffect(() => {
    fetch(
      ` https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=${playid}&key=${apiKey}`
    )
      .then(res => res.json())
      .then(data => {
        const result = data.items.map(item => {
          return {
            title: item.snippet.title,
            vid: item.contentDetails.videoId,
            date: item.snippet.publishedAt,
            url: item.snippet.thumbnails.high.url
          };
        });
        setCourses(result);
        setCurrentVideo(result[0].vid);
        setCurrentTitle(result[0].title);
      });
  }, []);
  console.log(courses);

  const neArr = courses.map(data => {
    return (
      <div className="col-sm-4 col-12 mb-4">
        {" "}
        <a
          onClick={() => {
            setCurrentVideo(data.vid);
            setCurrentTitle(data.title);
          }}
        >
          <div class="card">
            <img src={data.url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">{data.title}</p>
            </div>
            <div class="card-footer text-right">
              <small class="text-muted ">
                {data.date.slice(0, data.date.search("T"))}
              </small>
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <Navbar />

      <div className="conatiner-fluid">
        <div className="container"></div>
        <div className="row d-flex justify-content-center mt-5 text-center text-white">
          {" "}
          <div className="col-md-10  col-12">
            <div>
              <h3 className="bg_orange"></h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${currentVideo}`}
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="bg_orange mt-4 text-white border p-2">
                {currentTitle}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light m-4 p-3 border">
        {" "}
        Total Videos {courses.length}
      </div>
      <div className="container">
        <div className="row">{neArr}</div>
      </div>
    </div>
  );
};

export default Course_Playlist_Videos;
