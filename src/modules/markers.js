import L from 'leaflet'
import map from './map'
import { createPopup } from './createPopup'
import { createIcon } from './createIcon'

const url = 'https://skyrimrp.herokuapp.com/api/markers'
let marker = {}

fetch(url).then((res) => {
    return res.json()
}).then((data) => {
    for (let i = 0; i < data.length; i++) {

        // Create marker and add icon selector
        marker[i] = L.marker([data[i].lat, data[i].lng], { icon: createIcon(data[i].type) }).addTo(map)

        // Bind popup
        marker[i].bindPopup(createPopup(data[i].type, data[i]))
    }
}).catch((err) => {
    console.log(err)
})