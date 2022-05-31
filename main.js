let contactoForm = document.getElementById("formulario");
contactoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formularioPrueba = e.target
    const datosForm = new FormData(document.getElementById("formulario"));
    let nombre = datosForm.get('nombre_apellido');
    let telefono = datosForm.get('numero_telefono')
    let correo = datosForm.get('mail_mail')
    let dominio = datosForm.get('mail_domain')
    let servicio = datosForm.get('option_select')
    let texto = datosForm.get('texto')
    let fecha = datosForm.get('agenda')
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'datosFormulario',
            body: 'datosCliente',
            userID: 1,
            nombre_cliente: nombre,
            telefono_cliente: telefono,
            correo_cliente: correo,
            dominio_cliente: dominio,
            servicio_cliente: servicio,
            consulta_cliente: texto,
            fecha_cliente: fecha,
        }),
        headers: {
            'contentType': 'application/json;charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((res) => console.log(res))
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
})    

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

