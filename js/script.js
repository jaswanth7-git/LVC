function greet(){
    var t = frm1.t1.value;
    if(t==""){
        alert("Name cannot be empty");
    }else{
        alert("proceed");
    }
}
function result(){
    var math = frm1.math.value;
    var eng = frm1.eng.value;
    var comp = frm1.comp.value;
    var total = parseInt(math)+parseInt(eng)+parseInt(comp);
    var percent = (parseInt(total)/300) * 100;
    frm1.tot.value = total;
    frm1.per.value = percent;
    alert("maximum marks : "+Math.max(parseInt(math),parseInt(eng),parseInt(comp)));
    alert("minimum marks : "+Math.min(parseInt(math),parseInt(eng),parseInt(comp)))
}

