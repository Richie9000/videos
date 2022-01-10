import axios from "axios"


const KEY = "AIzaSyAo7rhTwDtb4jOCgfvrn1Mg--mTc1sv9IU"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})