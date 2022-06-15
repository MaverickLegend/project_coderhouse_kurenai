const contactoForm = document.getElementById("formulario");
let formObj
let consultas = []
let checked = false;
const popup = document.querySelector('#formulario')
contactoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let datosForm = new FormData(document.getElementById("formulario"));

    if(datosForm.get('nombre_apellido').trim() === ''){
        console.log('nombre y apellido esta vacio');
    }
    else if(datosForm.get('mail_mail').trim() === ''){
        console.log('mail esta vacio');
    }
    else if(datosForm.get('mail_domain').trim() === ''){
        console.log('dominio de mail está vacío')
    }
    else if(datosForm.get('texto').trim() === ''){
        console.log('su consulta está vacía')
    }
    else if(datosForm.get('agenda').trim() === ''){
        console.log('no existe fecha')
    }
    else{
        checked = true;
    }

    if (checked) {
        const formularioPrueba = e.target
        formObj = {
            nombre: datosForm.get('nombre_apellido'),
            telefono: datosForm.get('numero_telefono'),
            correo: datosForm.get('mail_mail'),
            dominio: datosForm.get('mail_domain'),
            servicio: datosForm.get('servicio'),
            texto: datosForm.get('texto'),
            fecha: datosForm.get('agenda'),
        }
        localStorage.setItem('nombre', formularioPrueba[0].value)
        localStorage.setItem('telefono', formularioPrueba[1].value)
        localStorage.setItem('mail', formularioPrueba[2].value)
        localStorage.setItem('dominio', formularioPrueba[3].value)
        localStorage.setItem('servicio', formularioPrueba[4].value)
        localStorage.setItem('consulta', formularioPrueba[5].value)
        localStorage.setItem('fecha', formularioPrueba[6].value)
        let info = document.createTextNode("Muchas gracias, " + formularioPrueba[0].value + ". Hemos recibido con éxito tu consulta.")
        document.getElementById("infor").appendChild(info)
        console.log(formObj)
        consultas.push(formObj)
        console.log(consultas)
    }
});

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('domain').value = '';
    document.getElementById('consulta').value = '';
    document.getElementById('fecha').value = '';
});

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