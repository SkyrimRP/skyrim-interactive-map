import L from 'leaflet'
import map from './map'

L.tileLayer('https://skyrimrp.herokuapp.com/api/tiles/{z}/{x}/{y}', {
    noWrap: true,
    attribution: 'Map render made for <a target="_blank" href="https://discord.gg/AZ63kG59w5">Skyrim RP</a>'
}).addTo(map)