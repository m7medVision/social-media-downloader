# Social Media Downloader
This is a simple library in Node Js and Deno to download videos from social media websites. It supports TikTok, Twitter, Youtube only. if want any other social media website, please open an issue.<br><br>
<img src="https://img.shields.io/github/issues/majhcc/social-media-downloader">&nbsp;
<img src="https://img.shields.io/github/last-commit/majhcc/social-media-downloader">&nbsp;
<img src="https://tokei.rs/b1/github/majhcc/social-media-downloader">&nbsp;
<img src="https://img.shields.io/github/license/majhcc/social-media-downloader">&nbsp;
<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fcache-size%2Fhttps%2Fdeno.land%2Fx%2Fsocial_media_downloader%40Latest%2Fmod.ts">&nbsp;

## Importing in Deno
```javascript
import * as dl from 'https://deno.land/x/social_media_downloader@Latest/mod.ts';
```

## Using in Deno

## Tiktok
```javascript
const result = await dl.tiktok("https://www.tiktok.com/@billieeilish/video/7014570556607433990");
console.log(result);
```

## Twitter
```javascript
const result = await dl.twitter('https://twitter.com/AJArabic/status/1476130879437037569');
console.log(result);
```

## Youtube
```javascript
const result = await dl.youtube('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
console.log(result);
```
