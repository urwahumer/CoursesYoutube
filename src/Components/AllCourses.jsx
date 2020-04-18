import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWv7vMbMWH4-V0ZXdmDpPBA&maxResults=25&prettyPrint=true&key=[YOUR_API_KEY]
const Courses_Cont = props => {
  const [playLists, setplayLists] = useState([]);
  const apiKey = "AIzaSyAH1dfQAU1wOBl9diKpCkWb6h2j6cnKxoI";
  const channelId = "UCWv7vMbMWH4-V0ZXdmDpPBA";

  useEffect(() => {
    fetch(
      `  https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&prettyPrint=true&key=${apiKey}`
    )
      .then(res => res.json())
      .then(data => {
        const result = data.items.map(item => {
          return {
            pTitle: item.snippet.title,
            pId: item.id,
            pDate: item.snippet.publishedAt,
            pUrl: item.snippet.thumbnails.high.url,
            pTotalVideos: item.contentDetails.itemCount
          };
        });
        setplayLists(result);
      });
  }, []);
  console.log(playLists);

  let newArray = playLists.map((item, i) => {
    return (
      <Link
        to={{
          pathname: `Course_Playlist_Videos/${item.pId}`
        }}
      >
        <div className="col-sm-4 col-12 mb-4">
          <div className="card shadow" style={{ width: "20rem" }}>
            <div className="inner">
              <img
                className="card-img-top"
                src={item.pUrl}
                alt="Card image cap"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title  bg_orange_heading ">{item.pTitle}</h5>
              <p className="card-text text-dark"></p>
              <a className="btn btn-success text-white">Watch</a>
            </div>
            <div class="card-footer ">
              <div className="d-flex justify-content-between">
                <small class="text-muted ">
                  Total Videos : {item.pTotalVideos}
                </small>
                <small class="text-muted  ">
                  {item.pDate.slice(0, item.pDate.search("T"))}
                </small>
              </div>
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
