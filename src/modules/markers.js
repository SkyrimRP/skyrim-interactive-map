import L from 'leaflet'
import images from './images'
import map from './map'

const url = 'https://skyrimrp.herokuapp.com/api/markers'
let marker = {}

fetch(url).then((res) => {
    return res.json()
}).then((data) => {
    for (let i = 0; i < data.length; i++) {

        let icon, popup
        switch (data[i].type) {
            case 'marker':
                icon = L.icon({
                    iconUrl: images.defaultMarker,
                    iconSize: [18, 34],
                    shadowSize: [50, 64],
                    iconAnchor: [15, 30],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-5, -35]
                })
                popup = `
                    <div class='popup--title'>${data[i].title}</div>
                    <div class='popup--hold'>${data[i].owner}</div>
                    <div class='popup--description'>${data[i].description}</div>
                `
                break;
        
            default:
                break;
        }

        // Icon
        marker[i] = L.marker([data[i].lat, data[i].lng], { icon: icon }).addTo(map)

        // Popup
        marker[i].bindPopup(popup)

    }
}).catch((err) => {
    console.log(err)
})