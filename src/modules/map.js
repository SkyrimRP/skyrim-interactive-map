import L from 'leaflet'

const map = L.map('map', {
    maxZoom: 6,
    minZoom: 3,
    scrollWheelZoom: true
}).setView([0, 0], 3)

export default map