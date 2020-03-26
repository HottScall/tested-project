import axios from "axios";

const KEY = "AIzaSyAiK9DXMfQ6s88LZcaPc7ebUlh0_4leHe8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
