const URL_API = "http://localhost:5000/api/videos";
export const getVideos = async () => {
  try {
    const response = await fetch(URL_API);

    if (!response.ok) {
      throw new Error("Server error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
