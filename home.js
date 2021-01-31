//ex 1
function UppCase(str){
    let words = str.split(" ");
    for (let i = 0; i < words.length; i ++){//cikl enq pttvum bolor bareri
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return  words.join(" ");

//     let x = str.charAt(0).toUpperCase();// sa mek stringi depqum
//        return x + str.slice(1);
   }
   let changeStr = UppCase("hello, my name is karine. i have three child.");
   console.log(changeStr);
   
  /////////ex 2
  
    function getArray(){
        let printArr = document.getElementById("arr").value;
        let clonArray = printArr.slice();
         console.log(clonArray);
   }
  

   