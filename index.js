var root = document.documentElement;

var iinputs = document.getElementById("idinputs");
var itextforinput = document.getElementById("textforinput");
var transformv;
var iinpara = document.getElementById("idinpara").value;
var islices = document.getElementById("idslices");
var cslices = document.getElementsByClassName("slices");
var ibox = document.getElementById("idbox");
var iparameters = document.getElementById("idparamaters");

var mkeyframes = "\
@keyframes animate {\
    0%{\
        transform: perspective(1000px) rotateX(0deg);\
    }\
    100%{\
        transform: perspective(1000px) rotateX(180deg);\
    }\
}";






function inputchanged(){
    iinpara = document.getElementById("idinpara").value.split(",");
}


function transformf(){
    if(transformv==="translation"){
        if(iinpara[0]>72 || iinpara[1]>28 || iinpara[2]>50){
            alert("(X<73), (Y<29), (Z<51)");
        }
        else
        {
            var t1 = "translate("+iinpara[0]+"rem,"+iinpara[1]+"rem)";
            console.log(t1);
            var n = ibox.style.transform;
            ibox.style.transform = n+t1;
        } 
    }
    else if(transformv==="rotation"){
        var string1 = "rotate"+iinpara[0]+"(0deg)";
        var string2 = "rotate"+iinpara[0]+"("+iinpara[1]+"deg)";
        console.log(string1+" "+string2);
        root.style.setProperty("--var1", string1);
        root.style.setProperty("--var2", string2);
        ibox.style.transform = ibox.style.transform+string2;
    }
    else if(transformv==="scaling"){
        var sx = iinpara[0]+"rem";
        var sy = iinpara[1]+"rem";
        var sz = iinpara[2]+"rem";
        root.style.setProperty("--vwidth", sx);
        root.style.setProperty("--vheight", sy);
    }
}


function selectedtrans(valuet){
    iparameters.classList.add("extendedp")
    if(valuet==="scaling")
    {
        islices.classList.remove("rotateslices");
        transformv="scaling";
        itextforinput.innerHTML = "Please input Scaling paramters(eg. 5,5,5): ";
        iinputs.classList.remove("noneinputs");
    }
    else if(valuet==="rotation")
    {
        islices.classList.remove("rotateslices");
        transformv="rotation";
        itextforinput.innerHTML = "Please input Rotation paramter(eg. Z,45): ";
        iinputs.classList.remove("noneinputs");
    }
    else if(valuet==="translation")
    {
        islices.classList.remove("rotateslices");
        transformv="translation";
        itextforinput.innerHTML = "Please input Translation paramters(eg. 10,5,5): ";
        iinputs.classList.remove("noneinputs");
    }
    
}