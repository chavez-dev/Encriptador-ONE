
function encriptar(){
    const prompt = document.querySelector('#prompt');
    const tamanio = prompt.value.length;

    let textoEncriptado = '';

    for (let i = 0; i < tamanio; i++) {
        if(prompt.value[i] == 'a'){
            textoEncriptado = textoEncriptado.concat('ai');
        }else if(prompt.value[i] == 'e'){
            textoEncriptado = textoEncriptado.concat('enter');
        }else if(prompt.value[i] == 'i'){
            textoEncriptado = textoEncriptado.concat('imes');
        }else if(prompt.value[i] == 'o'){
            textoEncriptado = textoEncriptado.concat('ober');
        }else if(prompt.value[i] == 'u'){
            textoEncriptado = textoEncriptado.concat('ufat');
        }else{
            textoEncriptado = textoEncriptado.concat(prompt.value[i]);
        }
    }

    mostrarResultado(textoEncriptado);
}



function mostrarResultado(resultado){
    const cajaSinResultados = document.querySelector('.caja__sin__resultados');
    cajaSinResultados.classList.add('ocultar');

    const cajaConResultados = document.querySelector('.caja__con__resultados');
    cajaConResultados.classList.remove('ocultar');

    var textoRespuesta = document.querySelector('.texto__respuesta');
    textoRespuesta.innerText = resultado;
}