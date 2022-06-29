import { App } from "./app.js";

const d = document
const w = window

// --> Ejecucion de APP y Router
d.addEventListener('DOMContentLoaded', App)
w.addEventListener('onpopstate', App)