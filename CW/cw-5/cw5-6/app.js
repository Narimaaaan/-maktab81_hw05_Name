
// document.querySelector("#product-1").addEventListener("click",function product_1(){
//     let x=document.getElementsById("Products");
//     const new_ul=document.getElementById("wishlist");
//     new_ul.appendChild(x[0].children[0])
// });


function product_1() {
    let x=document.getElementsByTagName("ul")
    
    const new_ul=document.getElementById("wishlist");
    new_ul.appendChild(x[0].children[0])

  }
  function product_2() {
    let x=document.getElementsByTagName("ul")
    if(x[0].childElementCount<3){
    let li=x[0].children[0];
    const new_ul=document.getElementById("wishlist");
    new_ul.appendChild(x[0].children[0])
    }else{
        const new_ul=document.getElementById("wishlist");
        new_ul.appendChild(x[0].children[1])
    }

  }
  function product_3() {
    let x=document.getElementsByTagName("ul")
    // console.log(x[1]);
    // let li=x[0].children[x[0].childElementCount];
    const new_ul=document.getElementById("wishlist");
    new_ul.appendChild(x[0].children[x[0].childElementCount-1])

  }