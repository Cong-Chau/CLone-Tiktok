import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
// Action
import handleClickSearch from "../../../../utils/handleClickSearch";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sb-header")}>
        <div className={cx("logo")}>
          <a href="/">
            <i className="bi-tiktok"></i>
            Tiktok
          </a>
        </div>

        <div className={cx("search")}>
          <input placeholder="Search" />
          <button onClick={handleClickSearch}>
            <i className="bi-search"></i>
          </button>
        </div>
      </div>

      <div className={cx("sb-list")}>
        <div className={cx("for-you")}>
          <a href="/">
            <i className="bi-house-door"></i>
            For you
          </a>
        </div>
        <div className={cx("explore")}>
          <Link to="/explore">
            <i className="bi-compass"></i>
            Explore
          </Link>
        </div>
        <div className={cx("following")}>
          <Link to="/following">
            <i className="bi-person-add"></i>
            Following
          </Link>
        </div>
        <div className={cx("friends")}>
          <Link to="/friends">
            <i className="bi-people"></i>
            Friends
          </Link>
        </div>
        <div className={cx("upload")}>
          <Link to="/upload">
            <i className="bi-plus-square"></i>
            Upload
          </Link>
        </div>
        <div className={cx("activity")}>
          <Link to="/activity">
            <i className="bi-calendar-event"></i>
            Activity
          </Link>
        </div>
        <div className={cx("message")}>
          <Link to="/message">
            <i className="bi-send"></i>
            Message
          </Link>
        </div>
        <div className={cx("live")}>
          <Link to="/live">
            <i className="bi-camera-video"></i>
            LIVE
          </Link>
        </div>
        <div className={cx("profile")}>
          <Link to="/profile">
            <i className="bi-circle"></i>
            Profile
          </Link>
        </div>
        <div className={cx("more")}>
          <Link to="">
            <i className="bi-three-dots"></i>
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
