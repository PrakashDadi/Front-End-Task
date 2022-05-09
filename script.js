
var id = 0;
// var $ = document.getElementsByTagName('body')
function NavigateLeft() {
    if (id == 0) {
        return
    } else {
        id -= 1
        console.log(id)
        getDataFromUrl(id)
    }
}
function NavigateRight() {
    if (id == 1) {
        return
    } else {
        id += 1
        console.log(id)
        getDataFromUrl(id)
    }

}
const url = "http://localhost:3000/"


getDataFromUrl(id)

function getDataFromUrl() {
    fetch(url)
        .then((res) => { return res.json() })
        .then((data) => {
            console.log(data.landing)
            data.landing.forEach(element => {
                if (element.collectionid == id) {
                    var Url = `http://localhost:3000/${id}`
                    fetch(Url)
                        .then((res) => { return res.json() })
                        .then((resultFinal) => { return resultFinal.articles })
                        .then((Data) => {
                            const html = `
                        <div class="mainSection mainOne">
                            <div class="headerSection">
                                <h2><span class="logo"></span>News Today</h2>
                                <p>Navigate Below</p>
                                <p class="Navigation"><i class="bi bi-arrow-left-circle-fill" onclick="NavigateLeft()"></i><i
                                        class="bi bi-arrow-right-circle-fill" onclick="NavigateRight()"></i></p>
                            </div>
                            <div class="bodySection">
                                <div class="mainElement one">
                                    <img src="${Data[0].urlToImage}" alt="mainElement">
                                    <h3 class="title">${Data[0].title}</h3>
                                    <p>${Data[0].description}</p>
                                <p class="time"><i class="bi bi-clock">2h</i><i class="bi bi-chat-left"></i></p>
                                </div >
                                <div class="mainElement two">
                                    <img src="${Data[1].urlToImage}" alt="mainElement">
                                    <h3 class="title">${Data[1].title}</h3>
                                    <p>${Data[1].description}</p>
                                    <p class="time"><i class="bi bi-clock">3h</i><i class="bi bi-chat-left"></i></p>
                                </div>
                                <div class="adElemnt three">
                                    <div class="nonImage">
                                        <h3 class="title">${Data[3].title}</h3>
                                        <p class="adtime"><i class="bi bi-clock">1d</i><i class="bi bi-chat-left"></i></p>
                                    </div>
                                    <img src="${Data[3].urlToImage}" alt="mainElement">
                                </div>
                                <div class="adElemnt four">
                                    <div class="nonImage">
                                        <h3 class="title">${Data[4].title}</h3>
                                        <p class="adtime"><i class="bi bi-clock">1d</i><i class="bi bi-chat-left"></i></p>
                                    </div>
                                    <img src="${Data[4].urlToImage}" alt="mainElement">
                                </div>
                                <div class="mainElement five">
                                    <img src="${Data[2].urlToImage}" alt="mainElement">
                                    <h3 class="title">${Data[2].title}</h3>
                                    <p>${Data[1].description}</p>
                                    <p class="time"><i class="bi bi-clock">6h</i><i class="bi bi-chat-left"></i></p>
                                </div>
                            </div >
                        </div >
                                <div class="AdSection mainTwo">

                                </div>
                            `
                            document.querySelector('.mainPage').innerHTML = html
                        })
                }
            });

        })
}






