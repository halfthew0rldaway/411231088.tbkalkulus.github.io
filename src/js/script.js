let expr;
function hitung(){
    const inputFunction = document.getElementById("inputFunction").value;

    try{
        expr =math.parse(inputFunction);
        const derivative=math.derivative(expr ,'x').toString();
        document.getElementById("result").textContent = derivative;
    } catch (error){
        alert("eror : masukan fungsi yang valid")
    }
}