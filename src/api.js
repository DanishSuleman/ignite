//API KEY
const api_key = process.env.REACT_APP_RAWG_API;

// Base URL
const base_url = "https://api.rawg.io/api/";

// Current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Year,Month,Date,Format
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${api_key}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;
// Upcoming Games
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;
//New Games
const new_games = `games?key=${api_key}&dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`;
//Get Popular Games Function
export const getPopularGamesUrl = () => `${base_url}${popular_games}`;
//Get Upcoming Games function
export const getUpcomingGamesUrl = () => `${base_url}${upcoming_games}`;
//Get New Games function
export const getNewGamesUrl = () => `${base_url}${new_games}`;
//Get Game Detail function
export const getGameDetailUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;
