const headings = document.getElementsByTagName('h2');
for (heading of headings) {
    heading.style.color = 'lightblue';
}

const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for (card of cards) {
    card.style.borderRadius = '30px';
}

function clickHandler() {
    console.log('Click Handler Successful...');
}

const buyNows = document.querySelectorAll('.buy-now');
for (buyNow of buyNows) {
    buyNow.addEventListener('click', (event) => {
        event.target.style.display = 'none';
    });
}

document.getElementById('exampleInputEmail1').addEventListener('keyup', (event) => {
        const emailSubmit = document.getElementById('email-submit');
    if (event.target.value === 'email') {
        emailSubmit.removeAttribute('disabled');
    } else {
        emailSubmit.setAttribute('disabled', true);
    }
});

const cardImgTops = document.getElementsByClassName('card-img-top');
for (cardImgTop of cardImgTops) {
    cardImgTop.addEventListener('mouseenter', (event) => {
            event.target.src = 'images/shoes/shoe-1.png';
    });
}

document.getElementById('subscribe').addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'orange';
});
