document.querySelector('.getACat').addEventListener("click", showACat)

function showACat(){
    fetch(`https://cataas.com/cat`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    document.querySelector("h2").innerText = "Loading image..."
    document.querySelector(".catPic").src = 'https://cataas.com/cat' 
}

document.querySelector('.getAGif').addEventListener("click", showAGif)

function showAGif(){
    fetch(`https://cataas.com/cat/gif`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    document.querySelector("h2").innerText = "Loading GIF..."
    document.querySelector('.catPic').src = "https://cataas.com/cat/gif"
}