import { getSeason, getDayTime } from './pkmn-day.js'
const daytime = getDayTime(new Date(), true)
const season  = getSeason(new Date(), true)
document.body.classList.add(daytime)
console.log(`${season}, ${daytime}`)

/* getting the theme, stuff ... etc.
 * very small localStorage wrapper. 
 */
class Theme {
	static get current () {
		if (localStorage !== undefined && localStorage.getItem("theme")) {
			return localStorage.getItem("theme")
		} else {
			return undefined
		}
	}
	static set current (value) {
		localStorage.setItem("theme", value)
	}
	static delete() {
		localStorage.remove("theme")
	}
}

const theme = Theme.current
