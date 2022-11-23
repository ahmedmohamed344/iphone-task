var allProducts = document.querySelectorAll(".list li")
 var content = document.querySelector("#content")
 var btn = document.querySelector("#addToCart")
 var totalPrice = 0 ;
 allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + "  , ";
       if (content.innerHTML != "" ){
            btn.style.display = "block";
            btn.style.backgroundColor = "#f9004d"
            btn.style.color = "white"
            btn.style.border = " 1px solid #f9004d"
            btn.style.padding = "13px 30px";
            btn.style.cursor = "pointer"
            btn.style.fontsize = "50px"
        }
     }
 })
 btn.onclick = function (){
        document.write(totalPrice)
}


