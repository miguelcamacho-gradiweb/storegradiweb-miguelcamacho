window.onload = function () {
    const postFunc = async () => {
        let data = await getCustomers()
        let dataShipped = await getOrders()
        let bannerInfo = document.querySelectorAll(".banner__customers h2 span")
        { dataShipped.status === 200 ? bannerInfo[0].innerHTML = dataShipped.data.orders.length : 100 }
        { data.status === 200 ? bannerInfo[1].innerHTML = data.data.customers.length : 100 }
    }
    postFunc()
}

const typed = new Typed('.typed', {
    strings: [
        '<i class="mascota">Gracias por ser parte de gradiwebmacrstore</i>',
        '<i class="mascota">Thank you for being part of gradiwebmacrstore</i>',
        '<i class="mascota">Merci de faire partie de gradiwebmacrstore</i>',
    ],

    typeSpeed: 75, // Speed ​​in milliseconds to put a letter,
    startDelay: 300, // Time delay in starting the animation. It also applies when it ends and starts again,
    backSpeed: 75, // Speed ​​in milliseconds to delete a letter,
    smartBackspace: true, // Remove only the words that are new in a text string.
    shuffle: false, // Alter the order in which you write the words.
    backDelay: 1500, // Wait time after you finish typing a word.
    loop: true, // Repeat the array of strings
    loopCount: false, // Number of times to repeat the array. false = infinite
    showCursor: true, // show throbbing cursor
    cursorChar: '|', // Character for the cursor
    contentType: 'html', // 'html' o 'null' for plain text
});