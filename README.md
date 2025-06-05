# 🎬 Movie Listing App

A simple and elegant React-based movie search application that uses the [OMDb API](https://www.omdbapi.com/) to fetch and display movie results. Just type in the movie name and explore!

## 🚀 Features

- 🔍 Search for movies by title
- 🖼️ Displays movie posters, titles, and release years
- 📡 Fetches data from OMDb API
- 🎨 Styled with responsive and clean UI

## 🛠️ Built With

- React
- JavaScript (ES6+)
- CSS
- OMDb API

## 📷 Preview

 

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/s2kOp/movieListing.git
cd movieListing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## 🔑 OMDb API Key

This project uses the OMDb API. You can get a free API key by signing up at http://www.omdbapi.com/apikey.aspx
Replace the API key in the code:
```bash
const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=YOUR_API_KEY`);
```

##📁 Folder Structure
```bash
movieListing/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│   └── main.jsx
├── package.json
└── README.md
```
