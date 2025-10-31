/* pkmn-day.js ***************************************
 * a small script to get generation 5 pokemon        *
 * seasons and time of day                           *
 * (c)2025 graefchen (https://github.com/graefchen)  *
 *****************************************************
 * v1.0.1 - Minor changes to be used for me on       *
 *          neaocities (2025-10-31)                  *
 * v1.0.1 - Initial version (2025-10-13)             *
 *****************************************************
 * LICENSE: This code is in the public domain and    *
 * you can use it however you will, but I would      *
 * appreciate it, when you give me credit.           *
 ****************************************************/

const getSeason = (date, names = false) => {
  // 0 = spring, 1 = summer, 2 = autumn, 3 = winter
  const pokemonMonth = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 0];
  const name = ["spring", "summer", "autumn", "winter"];
  const month = date.getMonth();
  return names ? name.at(month) : pokemonMonth.at(month);
};

const getDayTime = (date, names = false) => {
  // 0 = night, 1 = morning, 2 = day, 3 = evening
  const time = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0],
  ];
  const name = ["night", "morning", "day", "evening"];
  const season = time.at(getSeason(date)).at(date.getHours());
  return names ? name.at(season) : season;
};

export { getSeason, getDayTime };

/**
 * Ressources used for reference:
 * pkmn-time: https://bulbapedia.bulbagarden.net/wiki/Time#Generation_V
 * pkmn-seasons: https://bulbapedia.bulbagarden.net/wiki/Season_(game_mechanic)
 */
