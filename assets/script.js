import { getDayTime } from "./pkmn-day.js";

/* getting the theme, stuff ... etc.
 * very small localStorage wrapper.
 */
class Theme {
  static get current() {
    if (localStorage !== undefined && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return undefined;
    }
  }
  static set current(value) {
    localStorage.setItem("theme", value);
  }
  static delete() {
    localStorage.remove("theme");
  }
}

// First adding the Theme, so we
// know what Theme is used.
Theme.current = getDayTime(new Date(), true);
// Using the Theme to get the current theme.
// And adding it to the class list of the body.
if (Theme.current != undefined)
  document.body.classList.add(Theme.current);
