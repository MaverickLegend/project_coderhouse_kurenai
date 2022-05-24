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
    localStorage.setItem('nombre', formularioPrueba[0].value)
    localStorage.setItem('telefono', formularioPrueba[1].value)
    localStorage.setItem('mail', formularioPrueba[2].value)
    localStorage.setItem('dominio', formularioPrueba[3].value)
    localStorage.setItem('servicio', formularioPrueba[4].value)
    localStorage.setItem('consulta', formularioPrueba[5].value)
    localStorage.setItem('fecha', formularioPrueba[6].value)
    let info = document.createTextNode("Muchas gracias, " + formularioPrueba[0].value +". Hemos recibido con éxito tu consulta.")
    document.getElementById("infor").appendChild(info)
}    

document.getElementById("toast").addEventListener("click", () => {
    Toastify({
        text: "Entregado con éxito!",
        duration: 3000,
        gravity: 'bottom',
        position: 'center',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    })



    // const getData = function (){
    //     let input_tel = document.getElementById("telefono").value;
    //     let input_mail = document.getElementById("mail").value;
    //     let input_domain = document.getElementById("domain").value;
    //     let input_servicio = document.getElementById("servicio").value;
    //     let input_consulta = document.getElementById("consulta").value;
    //     let input_fecha = document.getElementById("fecha").value;
    // }