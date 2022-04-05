// dom calculator

let div = document.createElement("div");
div.innerHTML =
 ` <div class="container">
        
 <h1 id="title" class="text-center">CALCULATOR</h1>
 <P id ="description" class="text-center" >+-*%</P>
 <div class="row justify-content-center ">
     <div class="col col-lg-4 text-center  ">
         <div class="calculator m-3">

             <input type="text" class="text-end" placeholder="0" id="result"> <br>
             <button class="btn btn-primary rounded fw-bold " id="clear" onclick="Clear()">AC</button>
             <button class="btn btn-danger rounded fw-bold " onclick="del()">DEL</button>
             <button class="btn btn-info rounded fw-bold " onclick="display('%')">%</button>
             <button class="btn btn-warning  rounded fw-bold " onclick="display('/')">/</button> <br>
             <button class="btn btn-light rounded fw-bold " onclick="display('7')">7</button>
             <button class="btn btn-light rounded fw-bold " onclick="display('8')">8</button>
             <button class="btn btn-light rounded fw-bold " onclick="display('9')">9</button>
             <button class="btn btn-secondary rounded fw-bold " onclick="display('*')">*</button> <br>
             <button class="btn btn-light rounded fw-bold " onclick="display('4')">4</button>
             <button class="btn btn-light rounded fw-bold " onclick="display('5')">5</button>
             <button class="btn btn-light rounded fw-bold " onclick="display('6')">6</button> 
             <button class="btn btn-danger rounded fw-bold " id="subtract" onclick="display('-')">-</button> <br>
             <button class="btn btn-light gk rounded fw-bold " id="1" onclick="display('1')">1</button>
             <button class="btn btn-light rounded fw-bold " id="2" onclick="display('2')">2</button>
             <button class="btn btn-light rounded fw-bold " id="3" onclick="display('3')">3</button>
             <button class="btn btn-dark rounded fw-bold "  id="add" onclick="display('+')">+</button> <br>
             <button class="btn btn-light rounded fw-bold " onclick="display('.')">.</button>
             <button class="btn btn-light rounded fw-bold " onclick="display('0')">0</button>
             <button class="btn btn-success fw-bold" onclick="Calculate()" id="equal">=</button>
         </div>
     </div>
 </div>

</div>`
// append
document.body.append(div);

// functions
let res = document.getElementById("result");

function display(num){
    res.value += num;
}
function Calculate(){
    try{
        res.value = eval(res.value);

    }
    catch(err){
        alert("Invalid");

    }
}
// c key function
function Clear(){
    res.value = "";
}
// del key function
function del(){
    res.value = res.value.slice(0, -1);
}

// alert : if enter the alphabet letter as a value alert box will appear

document.getElementById("result").onkeypress = function typing(event){
    let show = document.getElementById("result");
    if(event.key==="Enter"){
        (show.value==="") ? alert("Please Enter The Value First"): Calculate();
   }
    else if(!(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*")){
        alert("Please Enter Number Only :)");
       event.preventDefault();
   }
}

// sample test
document.querySelector('#clear').Calculate();
var one = document.getElementById('1');
var two = document.getElementById('2');
var add = document.getElementById('add');
var result = document.getElementById('result');
one.click();
add.click();
two.click();
document.getElementById('result').Calculate();





