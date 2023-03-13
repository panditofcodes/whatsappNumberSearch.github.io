const chat = document.querySelector("#chat")
const number = document.getElementById("number")
number.addEventListener('keydown',(e)=>{
    if(e.keyCode===13){
        e.preventDefault()
        getNumber()
    }
})
const getNumber = ()=>{
    const num = number.value
    if (num.length==10) {
        const webLink = "https://wa.me/+91" + num
        window.location.href = webLink
    } else {
        alert("Invalid Number")
        number.value=''
    }
    

}
chat.addEventListener("click",function(){
    getNumber()
})