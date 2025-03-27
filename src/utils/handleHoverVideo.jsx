// Xử lý sự kiện khi rê chuột vào video
const handleMouseEnter = (event) => {
  event.target.play(); // Phát video khi hover
};
const handleMouseLeave = (event) => {
  event.target.pause(); // Dừng video khi rời chuột
  event.target.currentTime = 0; // Đặt về đầu video khi dừng
};

export default { handleMouseEnter, handleMouseLeave };
