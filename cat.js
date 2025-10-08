let btn = document.querySelector("button");
let url = "https://api.thecatapi.com/v1/images/search"; // Cat API

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data[0].url; ; // The API returns an array
    } catch(e) {
        console.log("Error -", e);
        return "no results found";
    }
}

btn.addEventListener("click", async () => {
    let link = await getImage();

    let p = document.querySelector("#output");
    p.innerHTML = "<i><b>Here’s a cute Cat for you!</b></i>";

    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});
