function updateCounter() {
    fetch('https://api.countapi.xyz/update/nouveau123/youtubechannel/?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()



counterElement = document.getElementsByClassName('counter')[0];