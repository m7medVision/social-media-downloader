const axios = require('axios');
const twitter = async (url) => {
    const response = await axios.get(`https://api-v1.majhcc.com/api/tw?url=` + url);
    const data = await response.data;
    return data;
}
const tiktok = async (url) => {
    const response = await axios.get(`https://api-v1.majhcc.com/api/tk?url=` + url);
    const data = await response.data;
    return data;
}
const youtube = async (url) => {
    const response = await axios.get(`https://api-v1.majhcc.com/api/dl/yt?url=` + url);
    const data = await response.data;
    return data;
}
const snapchat = async (username) => {
    const response = await axios.get(`https://api-v1.majhcc.com/api/snapchat?username=` + username);
    const data = await response.data;
    return data;
}

module.exports = {
    twitter,
    tiktok,
    youtube,
    snapchat
}

