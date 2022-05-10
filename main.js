let contactoForm = document.getElementById("formulario");
contactoForm.addEventListener("submit", submitForm);
function submitForm(e){
    e.preventDefault();
    let formularioPrueba = e.target
    console.log(formularioPrueba[0]. value)
    console.log(formularioPrueba[1]. value)
    console.log(formularioPrueba[2]. value, formularioPrueba[3]. value)
    console.log(formularioPrueba[4]. value)
    console.log(formularioPrueba[5]. value)
    console.log(formularioPrueba[6]. value)
}    
const getData = function (){
    let input_name = document.getElementById("nombre").value;
    let input_tel = document.getElementById("telefono").value;
    let input_mail = document.getElementById("mail").value;
    let input_domain = document.getElementById("domain").value;
    let input_servicio = document.getElementById("servicio").value;
    let input_consulta = document.getElementById("consulta").value;
    let input_fecha = document.getElementById("fecha").value;
}    
let info = document.getElementById("infor")
info.innerText(input_name, input_tel, input_mail, input_domain, input_servicio, input_consulta, input_fecha);