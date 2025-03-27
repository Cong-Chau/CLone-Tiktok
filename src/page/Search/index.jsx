import { useEffect, useState } from "react";
import { getVideos } from "../../api/videoApi";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import hoverVideo from "../../utils/handleHoverVideo";
const cx = classNames.bind(styles);

function Search() {
  // Lấy dữ liệu video từ API
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos().then((data) => {
      setVideos(data);
    });
  }, []);
  // Render ra giao diện
  return (
    <div>
      <div className={cx("search-target")}></div>
      <div className={cx("search-results")}>
        {videos.map((video) => (
          <div key={video.id}>
            <video
              src={video.url}
              onLoadedMetadata={(e) => (e.target.volume = 0.1)}
              onMouseEnter={hoverVideo.handleMouseEnter}
              onMouseLeave={hoverVideo.handleMouseLeave}
              loop
              playsInline
            />
            <p className={cx("like-count")}>
              {" "}
              <i className="bi-heart" />
              {video.likeCount}
            </p>
            <p className={cx("desc")}>{video.description}</p>
            <div className={cx("user-info")}>
              <a href={video.userName}>
                <h1>
                  <i className="bi-circle"></i>
                  {video.userName}
                </h1>
              </a>
              <p className={cx("date-upload")}>{video.dateUpload}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
