const encriptar   = document.getElementById('encriptar')
const desencriptar= document.getElementById('desencriptar')
const copy        = document.getElementById('copy')


encriptar.addEventListener('click', (e) =>{ 
    e.preventDefault()
    var phrase= document.getElementById('phrase')
    var phras =Array.from(phrase.value);
    
    let key=   ['ai', 'enter', 'imes', 'ober', 'ufat']
    let vocals=['a' , 'e'    , 'i'   , 'o'   , 'u'   ]
    for (let i = 0; i < phras.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (phras[i]==vocals[j]) {
                phras[i]=key[j];
            }
        }    
    }
    document.getElementById("result").value=phras.join('');
})

desencriptar.addEventListener('click', (e) =>{ 
    e.preventDefault()
    let key = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    str = (document.getElementById('phrase')).value
    for(let i = 0; i <key.length; i++){
        if(str.includes(key[i][1])){
            str = str.replaceAll(key[i][1], key[i][0])
        }    
    }
    document.getElementById("result").value=str;
})


copy.addEventListener('click', (e) =>{ e.preventDefault()
    document.getElementById('clipboard').value=document.getElementById('result').value;

    navigator.clipboard.writeText(document.getElementById('result').value)
    .then(() => {
        document.getElementById('message').style.display="block";
        
        setTimeout(function(){
            document.getElementById('message').style.display="none";
        }, 2000);
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    })


})