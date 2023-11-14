const imgList = document.querySelectorAll(".selectImg") ;
const imgReceiver = document.querySelector(".imgReceiver");

console.log(imgList[0].src)
imgList.forEach( elem => {
    elem.addEventListener("click", (e) => {
        console.log(e)
        imgReceiver.src=elem.src;
    } )
})