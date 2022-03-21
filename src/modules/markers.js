import L from 'leaflet'
import map from './map'

const url = 'https://skyrimrp.herokuapp.com/api/markers'
let marker = {}

fetch(url).then((res) => {
    return res.json()
}).then((data) => {
    for (let i = 0; i < data.length; i++) {

        // const icon = L.icon({
        //     iconUrl: data[i].icon
        // })

        // Icon
        marker[i] = L.marker([data[i].lat, data[i].lng], {
            // icon: icon
        }).addTo(map)

        // Popup
        marker[i].bindPopup(`
            <div class='popup--title'>${data[i].title}</div>
            <div class='popup--hold'>${data[i].owner}</div>
            <div class='popup--description'>${data[i].description}</div>
        `)
    }
}).catch((err) => {
    console.log(err)
})