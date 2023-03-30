

const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=> {
    document.querySelector(".anime").classList.add("beginAnime");
    setTimeout (() => {
        document.querySelector(".anime").classList.remove("beginAnime");
    }, 4999)
})