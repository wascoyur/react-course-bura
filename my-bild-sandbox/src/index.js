import Log from "./log";
import Calc from "./calc";
import img from './react.png'

const calc = new Calc();
const log = new Log();

log.log(calc.add(5,6,7))
const el = document.createElement('img');
el.src = img
document.body.appendChild(el)