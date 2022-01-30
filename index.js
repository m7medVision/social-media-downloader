const axios = require('axios');
const twitter = async (url) => {
    const response = await axios.get(`https://server1.majhcc.xyz/api/tw?url=` + url);
    const data = await response.data;
    return data;
}
const tiktok = async (url) => {
    const response = await axios.get(`https://server1.majhcc.xyz/api/tk?url=` + url);
    const data = await response.data;
    return data;
}
const youtube = async (url) => {
    const response = await axios.get(`https://server1.majhcc.xyz/api/yt?url=` + url);
    const data = await response.data;
    return data;
}

module.exports = {
    twitter,
    tiktok,
    youtube
}

