const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("Search-box");
const searchreasult = document.getElementById("search-reasult");
const showmore = document.getElementById("show-more-btn");
const accessKey = "jjFLEUdVg_H-sHEYg0QK5bK3Kf8LAxaLGLavBmOSH_I"; // accses key in unsplace site // 

let keyword = "";
let page = 1;

async function searchimage() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`; // api url // 
    const response = await fetch(url);
    const data = await response.json();
    // results show thse pachi next aavse ek cansal thya pachi aenu logic // 
    if(page === 1){
        searchreasult.innerHTML = ""
    }
    //   console.log(data); // 
    // aapdi website image dekhase seaech thayela // 
    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchreasult.appendChild(imagelink);

    })
    showmore.style.display = "block"; 
   
}
searchform.addEventListener("submit", (e) => {
    e.preventDefault(); // submit the form // 
    page = 1;
    searchimage();
})

showmore.addEventListener("click", () => {
    page++;
    searchimage();
})