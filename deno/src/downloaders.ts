export const twitter = async (url: string) => {
    const response = await fetch(`https://server1.majhcc.xyz/api/tw?url=` + url);
    const data = await response.json();
    return data;
}
export const tiktok = async (url: string) => {
    const response = await fetch(`https://server1.majhcc.xyz/api/tk?url=` + url);
    const data = await response.json();
    return data;
}
export const youtube = async (url: string) => {
    const response = await fetch(`https://server1.majhcc.xyz/api/yt?url=` + url);
    const data = await response.json();
    return data;
}