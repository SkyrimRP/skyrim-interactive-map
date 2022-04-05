export const createPopup = (type, data) => {
    switch (type) {
        case 'marker':
            return `<div class='popup--title'>${data.title}</div>
            <div class='popup--hold'>${data.owner}</div>
            <div class='popup--description'>${data.description}</div>`
        default:
            break
    }
}