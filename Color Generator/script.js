const getcolor =()=>
    {
        const randomNumber=Math.floor(Math.random() *16777215);
        
        const colorCode="#"+randomNumber.toString(16)
        console.log(colorCode)
        document.body.style.backgroundColor=colorCode
        document.getElementById("color-code").innerText=colorCode;
    }
//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//init call
getcolor()