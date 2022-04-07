export const twitter = async (url: string) => {
    const response = await fetch(`https://api-v1.majhcc.com/api/tw?url=` + url);
    const data = await response.json();
    return data;
}
export const tiktok = async (url: string) => {
    const response = await fetch(`https://api-v1.majhcc.com/api/tk?url=` + url);
    const data = await response.json();
    return data;
}
export const youtube = async (url: string) => {
    const response = await fetch(`https://api-v1.majhcc.com/api/dl/yt?url=` + url);
    const data = await response.json();
    return data;
}
export const snapchat = async (username: string) => {
    const response = await fetch(`https://api-v1.majhcc.com/api/snapchat?username=` + username);
    const data = await response.json();
    return data;
}