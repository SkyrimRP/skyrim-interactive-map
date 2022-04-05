import images from './images'

export const createIcon = (type) => {
    switch (type) {
        case 'marker':
            return L.icon({
                iconUrl: images.defaultMarker,
                iconSize: [18, 34],
                shadowSize: [50, 64],
                iconAnchor: [15, 30],
                shadowAnchor: [4, 62],
                popupAnchor: [-5, -35]
            })
        default:
            break
    }
}