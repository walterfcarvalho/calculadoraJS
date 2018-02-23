var display = $("#display");
var operacao = "";
var memoria = 0;
var bLimpaDisplay = false;

$("#b0").click(function(){
    digitarNumero("0");
});
$("#b1").click(function(){
    digitarNumero("1");
});
$("#b2").click(function(){
    digitarNumero("2");
});
$("#b3").click(function(){
    digitarNumero("3");
});
$("#b4").click(function(){
    digitarNumero("4");
});
$("#b5").click(function(){
    digitarNumero("5");
});
$("#b6").click(function(){
    digitarNumero("6");
});
$("#b7").click(function(){
    digitarNumero("7");
});
$("#b8").click(function(){
    digitarNumero("8");
});
$("#b9").click(function(){
    digitarNumero("9");
});
$("#bPonto").click(function(){
    var str = display.val();

    if (str.indexOf(".") < 0){
        digitarNumero(".");
    }
});

$("#bClear").click(function(){
    console.log("limpar");
    operacao = "";
    display.val("");
});

$("#bMais").click(function () {
    addOperador("+");
});    
    
$("#bMenos").click(function(){
    addOperador("-");
});

$("#bMult").click(function(){
    addOperador("*");
});

$("#bDivid").click(function(){
    addOperador("/");
});

$("#bIgual").click(function(){
    console.log("totalizar");
    totalizar();
});

function digitarNumero(num){
    var p1 = ""; 
    if (bLimpaDisplay === true){
        bLimpaDisplay = false

    }else{
        p1 = display.val();    
    }

    p1 = p1 + num;
    display.val(p1);
}

function addOperador(sinal){
    operacao = sinal;
    memoria =  display.val(); 
    
    if (!bLimpaDisplay){
        bLimpaDisplay = true;    
    }
};

function totalizar(){
    var tot = 0;
    var p1 = parseFloat(display.val());
    var p2 = parseFloat(memoria);
    
    if (operacao === "+"){
        tot = p1 + p2;
    }
    if (operacao === "-"){
        tot = p2 - p1;
    }
    if (operacao === "*"){
        tot = p1 * p2;
    }
    if (operacao === "/"){
        tot = p2 / p1;
    }
    display.val(tot);
}


