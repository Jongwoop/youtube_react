## Project name

Youtube clone coding

## Description

Youtube clone coding using react and youtube APIs
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<img src="https://github.com/Jongwoop/youtube_react/blob/main/public/images/screenshot.gif" alt="screenshot" width="1000px" />

## Stack

Youtube APIs, Postman, React Hooks, PostCSS, Axios testable code

## Main function summary

**Page 1 - Main Page**  
Page with search header and 25 most popular videos list below.

**Page 2 - After Search**  
Page with search header and 25 videos list related to search the word.

**Page 3 - Play video**  
When one of the lists is clicked, a video is played and the video description is following below. Other video lists are shown on the right side but display direction is responsive therefore it could be changed depends on the screen size.

## Architecture

```
Youtube clone coding - react
├── public/          #static files
│   └── index.html   #html
│
├── src/             #project root
│   ├── components/  # components + scss
|   │   ├── search_header/ jsx + scss
|   │   ├── video_detail/ jsx + scss
|   │   ├── video_item/ jsx + scss
|   │   └── video_list/ jsx + scss
|   │
│   ├── service/
|   │   ├── youtube-fetch.js
|   │   └── youtube.js
|   │
│   ├── app.jsx
│   ├── app.module.css
│   ├── index.js
│   └── index.css
│
└── package.json
```
