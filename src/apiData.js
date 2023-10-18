import axios from "axios";

export const tv = [];
export const movies = [];
export const shows = [];
export const showsName = [];
let apiData = [];

export const seprateData = async (data) => {
  let firstIndexOfMovie = -1;
  let lastIndexOfMovie = -1;

  apiData = data;

  for (let i = 0; i < apiData.length; i++) {
    const link = apiData[i].link.toLowerCase();

    if (
      !link.includes(".mp4") &&
      !link.includes(".mkv") &&
      !link.includes(".avi") &&
      !link.includes(".srt") &&
      !link.includes(".mpg") &&
      !link.includes(".webg") &&
      !link.includes(".mp2") &&
      !link.includes(".mpeg") &&
      !link.includes(".mpe") &&
      !link.includes(".ogg") &&
      !link.includes(".m4p") &&
      !link.includes(".m4v") &&
      !link.includes(".wmv") &&
      !link.includes(".mov") &&
      !link.includes(".qt") &&
      !link.includes(".flv") &&
      !link.includes(".swf") &&
      !link.includes(".avchd")
    ) {
      tv.push(apiData[i]);
    } else if (
      apiData[i].title.includes("E0") ||
      apiData[i].title.includes("E1") ||
      apiData[i].title.includes("E2") ||
      apiData[i].title.includes("E3") ||
      apiData[i].title.includes("E4") ||
      apiData[i].title.includes("E5") ||
      apiData[i].title.includes("E6") ||
      apiData[i].title.includes("E7") ||
      apiData[i].title.includes("E8") ||
      apiData[i].title.includes("E9")
    ) {
      shows.push(apiData[i]);
    } else {
      movies.push(apiData[i]);

      lastIndexOfMovie = i;
      if (firstIndexOfMovie == -1) {
        firstIndexOfMovie = i;
      }
    }
  }

  const addedTitles = new Set();

  for (let i = 0; i < shows.length; i++) {
    const nam = shows[i].title;
    const titleWithoutSeason = nam.replace(/\s?[sS]\d+.*$|\s?[sS]\d+$/, "");

    if (!addedTitles.has(titleWithoutSeason)) {
      addedTitles.add(titleWithoutSeason);
      showsName.push({
        title: titleWithoutSeason,
      });
    }
  }

  console.log("Movies 1st: ", movies[1]);
  console.log("tv 1st: ", tv[1]);
  console.log("shows 1st: ", shows[1]);
  console.log("showsname 1st: ", showsName[1]);
};
