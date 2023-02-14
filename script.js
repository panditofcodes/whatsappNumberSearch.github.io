const chat = document.querySelector("#chat")
const number = document.querySelector("#number")
const getNumber = ()=>{
    const num = number.value
    if (num.length==10) {
        const webLink = "https://wa.me/+91" + num
        window.location.href = webLink
    } else {
        alert("Invalid Number")
    }
    

}
chat.addEventListener("click",function(){
    getNumber()
})