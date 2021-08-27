function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}
function equal(){
    var sym = document.form.textview.value;
    if(sym){
        document.form.textview.value = eval(sym);
    }
}
function clean(){
    document.form.textview.value = '';
}
function back(){
    var sym = document.form.textview.value;
    document.form.textview.value = sym.substring(0, sym.length-1);
}