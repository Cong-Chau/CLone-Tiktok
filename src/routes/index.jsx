// Layout
import Search from "../page/Search";
import Home from "../page/Home";
import Explore from "../page/Explore";
import Following from "../page/Following";
import Friends from "../page/Friends";
import Upload from "../page/Upload";
import Activity from "../page/Activity";
import Message from "../page/Message";
import Live from "../page/Live";
import Profile from "../page/Profile";
import { Component } from "react";

// Không cần đăng nhập
const publicRoutes = [
  { path: "/search", component: Search },
  { path: "/", component: Home },
  { path: "/explore", component: Explore },
  { path: "/following", component: Following },
  { path: "/friends", component: Friends },
  { path: "/upload", component: Upload },
  { path: "/activity", component: Activity },
  { path: "/message", component: Message },
  { path: "/live", component: Live },
  { path: "/profile", component: Profile },
];

// Bắt buộc phải đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
