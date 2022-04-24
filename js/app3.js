///////////////////////////////Crifrado Rail Fance ///////////////////////////////////////////////////////////

function Encrypt() {
    textoSinFormato = document.getElementById("p").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(textoSinFormato.length < 1){ alert("por favor ingrese algo de texto sin formato"); return; }    
    let key = parseInt(document.getElementById("key").value);
    if(key > Math.floor(2*(textoSinFormato.length-1))){ alert("la clave es demasiado grande para la longitud del texto sin formato."); return; }  
    textoCifrado = "";
    for(line=0; line<key-1; line++){
       skip=2*(key-line-1);   j=0;
        for(i=line; i<textoSinFormato.length;){
            textoCifrado += textoSinFormato.charAt(i);
            if((line==0) || (j%2 == 0)) i+=skip;
           else i+=2*(key-1) - skip;  
           j++;          
        }
    }
    for(i=line; i<textoSinFormato.length; i+=2*(key-1)) textoCifrado += textoSinFormato.charAt(i);
    document.getElementById("c").value = textoCifrado;
}

function Decrypt(f) {
    textoCifrado = document.getElementById("c").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(textoCifrado.length < 1){ alert("por favor ingrese algún texto cifrado (solo letras)"); return; }    
    let key = parseInt(document.getElementById("key").value);
    if(key > Math.floor(2*(textoCifrado.length-1))){ alert("por favor ingrese 1 - 22."); return; }      
    pt = new Array(textoCifrado.length);   k=0;
    for(line=0; line<key-1; line++){
       skip=2*(key-line-1);  j=0;
        for(i=line; i<textoCifrado.length;){
            pt[i] = textoCifrado.charAt(k++);
            if((line==0) || (j%2 == 0)) i+=skip;
           else i+=2*(key-1) - skip;  
           j++;        
        }
    }
    for(i=line; i<textoCifrado.length; i+=2*(key-1)) pt[i] = textoCifrado.charAt(k++);
    document.getElementById("p").value = pt.join("");
}