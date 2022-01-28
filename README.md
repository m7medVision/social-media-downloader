# Installing
```sh
npm install social_media_downloader
```

## Importing in node js
```javascript
const dl = require("social_media_downloader");
```

## Using in node js

## Tiktok
```javascript
let link = "https://www.tiktok.com/@billieeilish/video/7014570556607433990"; // here put the link
(
    async () => {
        let result = await dl.tiktok(link); // The result is a json
        console.log(result);
    }
)();
```

## Twitter
```javascript
let link = "https://twitter.com/AJArabic/status/1476130879437037569"; // here put the link
(
    async () => {
        let result = await dl.twitter(link); // The result is a json
        console.log(result);
    }
)();
```

## Youtube
```javascript
let link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // here put the link
(
    async () => {
        let result = await dl.twitter(link); // The result is a json
        console.log(result);
    }
)();
```
