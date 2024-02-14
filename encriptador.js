
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

function desencriptar(){
    const prompt = document.querySelector('#prompt');

    let textoDesencriptado = prompt.value;

    for (let i = 0; i < textoDesencriptado.length; i++) {
        if(textoDesencriptado.includes('ai')){
            textoDesencriptado = textoDesencriptado.replace('ai', 'a');
        }
        if(textoDesencriptado.includes('enter')){
            textoDesencriptado = textoDesencriptado.replace('enter', 'e');
        }
        if(textoDesencriptado.includes('imes')){
            textoDesencriptado = textoDesencriptado.replace('imes', 'i');
        } 
        if(textoDesencriptado.includes('ober')){
            textoDesencriptado = textoDesencriptado.replace('ober', 'o');
        }
        if(textoDesencriptado.includes('ufat')){
            textoDesencriptado = textoDesencriptado.replace('ufat', 'u');
        }
    }

    mostrarResultado(textoDesencriptado);
}

function copiarTexto(){
    const textoACopiar = document.querySelector('.texto__respuesta');

    // Seleccionar el texto dentro del elemento
    var seleccion = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(textoACopiar);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Limpiamos  la selección
    seleccion.removeAllRanges();

}

function mostrarResultado(resultado){
    const cajaSinResultados = document.querySelector('.caja__sin__resultados');
    cajaSinResultados.classList.add('ocultar');

    const cajaConResultados = document.querySelector('.caja__con__resultados');
    cajaConResultados.classList.remove('ocultar');

    var textoRespuesta = document.querySelector('.texto__respuesta');
    textoRespuesta.innerText = resultado;
}