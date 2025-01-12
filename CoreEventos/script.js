// Obtenemos el botón por su id
var cambiarBoton = document.getElementById("btn1");
var desaparece = document.getElementById("btn3");
var megustang = document.getElementById("btn2");
var megustanp = document.getElementById("btn4");
var likesGatos = document.getElementById("btn4");
var likesPerros = document.getElementById("btn2");
let numCountGatos = 0;
let numCountPerros = 0;


// Agregamos un evento 'click' al botón

cambiarBoton.addEventListener("click", function(){
// Cambiamos el contenido del botón utilizando this y innerText
    
    if(this.innerText == "Iniciar Sesion"){
        this.innerText = "Cerrar sesión";
    }else{
        this.innerText = "Iniciar Sesion";
    }
});

// Desaparece elemento al hacerle click
 
desaparece.addEventListener("click", function(){
    this.remove();
})


// Alert

megustang.addEventListener("click", function(){
    alert("Me gustan los gatos");
})


megustanp.addEventListener("click", function(){
    alert("Me gustan los Perros");
})

// Contar Likes

likesGatos.addEventListener("click", function(){
    numCountGatos ++;
    this.innerText = numCountGatos +  " Me gusta";
});

likesPerros.addEventListener("click", function(){
    numCountPerros ++;
    this.innerText = numCountPerros +  " Me gusta";
});
