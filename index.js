let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";


async function getImage() {
    try{
        let res = await axios.get(url);
    return res.data.message;
    } catch(e) {
        console.log("Error -", e);
        return "no results found";
    }
}

btn.addEventListener("click", async()=>{
    let link = await getImage();
   let p = document.querySelector("#output");
   p.innerHTML = "<i><b>Here’s a random dog for you!</b></i>";
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
})


