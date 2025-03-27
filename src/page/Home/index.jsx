import { useEffect, useState, useRef } from "react";
import { getVideos } from "../../api/videoApi";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    getVideos().then((data) => {
      const updatedVideos = data.map((video) => ({
        ...video,
        isLiked: false,
      }));
      setVideos(updatedVideos);
    });
  }, []);

  // Xử lý like
  const handleLike = (id) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id
          ? {
              ...video,
              isLiked: !video.isLiked,
              likeCount: video.isLiked
                ? video.likeCount - 1
                : video.likeCount + 1,
            }
          : video
      )
    );
  };

  // Xử lý phát/tạm dừng khi click vào video
  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play(); // Phát video nếu đang tạm dừng
      } else {
        video.pause(); // Tạm dừng video nếu đang phát
      }
    }
  };

  // Intersection Observer để tự động chạy video khi nó xuất hiện trên màn hình
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play(); // Phát video khi xuất hiện trên màn hình
          } else {
            video.pause(); // Dừng video khi ra khỏi màn hình
          }
        });
      },
      {
        threshold: 0.5, // 50% của video xuất hiện trên màn hình thì mới chạy
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Cleanup observer khi component bị unmount
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  return (
    <div className={cx("home-page")}>
      <div className={cx("video-list")}>
        {videos.map((video, index) => (
          <div key={video.id} className={cx("video")}>
            <div className={cx("video-container")}>
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.url}
                onLoadedMetadata={(e) => (e.target.volume = 0.1)}
                loop
                playsInline
                onClick={() => handleVideoClick(index)}
              />
              <a href={video.userName} className={cx("user-name")}>
                {video.userName}
              </a>
              <p className={cx("desc")}>{video.description}</p>
            </div>
            <div className={cx("video-info")}>
              <div className={cx("like")}>
                <button onClick={() => handleLike(video.id)}>
                  <i
                    className={
                      video.isLiked ? "bi bi-heart-fill liked" : "bi bi-heart"
                    }
                  ></i>
                  <p>{video.likeCount}</p>
                </button>
              </div>
              <div className={cx("comment")}>
                <button>
                  <i className="bi bi-chat-dots-fill"></i>
                  <p>{video.commentCount}</p>
                </button>
              </div>
              <div className={cx("bookmark")}>
                <button>
                  <i className="bi bi-bookmark-fill"></i>
                  <p>{video.bookmarkCount}</p>
                </button>
              </div>
              <div className={cx("share")}>
                <button>
                  <i className="bi bi-share-fill"></i>
                  <p>{video.shareCount}</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
