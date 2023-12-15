document.querySelector('button').addEventListener('click', getRandomColor)

function getRandomColor() {
    //Get a random color from xColors API
    fetch("https://x-colors.yurace.pro/api/random")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.documentElement.style.setProperty('--primary-color', data.hex)
            document.getElementById('hex').innerHTML = data.hex
            document.getElementById('rgb').innerHTML = data.rgb
            document.getElementById('hsl').innerHTML = data.hsl
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

// Copy color value text
const copyValue = (event) => {
    const value = event.target.innerText;
    const notification = event.target.nextElementSibling;
    navigator.clipboard.writeText(value).then(() => {
        notification.innerHTML = "Copied";
        setTimeout(() => {
            notification.innerHTML = "";
        }, 1000);
    });
};

const hexValue = document.querySelector('#hex');
hexValue.addEventListener('click', (event) => {
    copyValue(event);
});

const rgbValue = document.querySelector('#rgb');
rgbValue.addEventListener('click', (event) => {
    copyValue(event);
});

const hslValue = document.querySelector('#hsl');
hslValue.addEventListener('click', (event) => {
    copyValue(event);
});
