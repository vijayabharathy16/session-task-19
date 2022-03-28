const sect = document.createElement("section");
sect.setAttribute("class", "calc")
sect.innerHTML = ` <div>
<input id="display" type="text">
</div>
<div>
<button onclick="clr()">C</button>
<button onclick="delet()"class="del">del</button>
<button onclick="disp('%')"class="number">%</button>
<button onclick="disp('/')"class="number operation">/</button><br>
<button onclick="disp('7')" class="number">7</button>
<button onclick="disp('8')"class="number">8</button>
<button onclick="disp('9')"class="number">9</button>
<button onclick="disp('*')"class="number operation">*</button><br>
<button onclick="disp('4')"class="number">4</button>
<button onclick="disp('5')"class="number">5</button>
<button onclick="disp('6')"class="number">6</button>
<button onclick="disp('-')"class="number operation">-</button><br>
<button onclick="disp('1')"class="number">1</button>
<button onclick="disp('2')"class="number">2</button>
<button onclick="disp('3')"class="number">3</button>
<button onclick="disp('+')"class="number operation">+</button><br>
<button onclick="disp('.')"class="number dot">.</button>
<button onclick="disp('0')"class="number">0</button>
<button onclick="calculate()"class="equal"style="width:104px">=</button>
</div>`
document.body.appendChild(sect);


let displayelement = document.getElementById("display")


function disp(num) {
    displayelement.value += num;
}
function calculate() {
    try {
        displayelement.value = eval(displayelement.value);
    }
    catch (err) {
        displayelement.value = "error";
    }
}

function clr() {
    displayelement.value = "";
}

function delet() {
    displayelement.value = displayelement.value.slice(0, -1);
}

