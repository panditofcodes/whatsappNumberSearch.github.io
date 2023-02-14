const chat = document.querySelector("#chat")
const getNumber = ()=>{
    const number = document.querySelector("#number")
    const num = number.value
    const webLink = "https://wa.me/+91" + num
    window.location.href = webLink

}
chat.addEventListener("click",function(){
    getNumber()
})