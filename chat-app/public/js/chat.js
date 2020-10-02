const socket = io();

const $messageForm = document.querySelector('#message-form');
const $messageInput = $messageForm.querySelector('input');
const $messageSendButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');

const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML;
socket.on('message', (message) => {
    console.log(message);
    const html = Mustache.render(messageTemplate, {
        message: message.text,
        createdAt: moment(message.createdAt).format('hh:mm a')
    });
    $messages.insertAdjacentHTML('beforeend', html);
})

socket.on('locationUrl', (url) => {
    console.log(url);
    const html = Mustache.render(locationMessageTemplate, {
        url
    });
    $messages.insertAdjacentHTML('beforeend', html);
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $messageSendButton.setAttribute('disabled', 'true');
    const message = e.target.elements.message.value; 
    socket.emit('sendMessage', message, (error) => {
        $messageSendButton.removeAttribute('disabled');
        $messageInput.value = '';
        $messageInput.focus();
        if(error){
            return console.log(error);
        }
        console.log('Message delivered');
    });
})

$sendLocationButton.addEventListener('click', () => {
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        $sendLocationButton.setAttribute('disabled', 'true');
        socket.emit('sendLocation', {
            longitude: position.coords.longitude, 
            latitude: position.coords.latitude
        }, (position) => {
            if(position){
                $sendLocationButton.removeAttribute('disabled');
                return console.log('Location delivered!')
            }
        });
    })
})

