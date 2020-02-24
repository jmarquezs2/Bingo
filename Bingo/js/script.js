//Jquery (Actividad de Registro)
var mano;
var banco=0;
var nombre;
var apellido;
var email;
var dni;
var fecha;
var tarjeta;
$(document).ready(function(){
    $("#Registro").click(function(){
      $(this).slideUp(1000);
      	
      setTimeout(function() {
        $("#formulario").slideDown(1000)
      }, 1000);
      
    });
    
      $("#generar").click(function(){
        document.getElementById("generar").setAttribute('disabled',"disabled");
        
        var cont=0;
        var time = setInterval(function (){
            var n = generarNum();
           
            $('#monedas').append('<span id=\'moneda\'>'+n+'</span>')
            cont=cont+1;
            console.log(cont);
            if (cont >= 11){
                clearInterval(time);
            }
        
        },3000)

      });

      $.validator.addMethod("comprobarDNI", function(value, element) {
        if(/^([0-9]{8})*[a-zA-Z]+$/.test(value)){
          var numero = value.substr(0,value.length-1);
          var let = value.substr(value.length-1,1).toUpperCase();
          numero = numero % 23;
          var letra='TRWAGMYFPDXBNJZSQVHLCKET';
          letra = letra.substring(numero,numero+1);
          if (letra==let) return true;
          return false;
        }
        return this.optional(element);
      }, "DNI no válido");

      $("#formulario").validate({
        rules: {
            
            nombre: {
                required: true,
                minlength: 2,
                maxlenght: 30,
                text:true
               
            },
             apellido: {
                required: true,
                minlength: 2,
                maxlength: 60

            },
            date: "required",

            dni: {
                required: true,
              
                comprobarDNI: true
            },
            email: {
                required: true,
                email:true
                

            },
            credit: {
                required: true,
                creditcard: true,
                number:true

            },
            bonos: {
                required: true,
                number:true,
                minlength: 2,
                maxlength: 3
            },
            
        },
        messages: {
            
            nombre: {
                required: "Falta el nombre",
                minlength: "Mínimo 2 characteres",
                maxlength: "Máximo 30 characteres",

                text:"Solo letras, es un nombre"
                
            },
            apellido: {
                required: "El apellido falta",
                minlength: "Mínimo 2 characters",
                maxlength: "Máximo 60 characters"
            },
            date: "La fecha hay que ponerla",
            dni: {
                required: "El dni falta",
                /* minlength:"Tamaño incorrecto,faltan números",
                maxlength:"Tamaño incorrecto, sobran números", */
                comprobarDNI: "El dni es incorrecto"
            },
            email: {
                required: "El email es requerido",
                email: "Tiene que ser un email valido"
            },
            bonos: {
                required: "Los bonos caballero!",
                number: "Solo números, los bonos son dinero del juego",
                minlength: "Mínimo 10$",
                maxlength: "Máximo 999$"
            },
            credit: {
                required: "Es requerido",
                creditcard: "El número no es correcto, esto es una simulación, no es nesesario escribir tu número personal",
                number:"Solo números"
            },
        }  
    });

  });
 
$("#simular").click(function() {


   
    
        mano=parseInt(document.getElementById("bonos").value);
        apellido =document.getElementById("apellido").value;
        nombre =document.getElementById("nombre").value;
        email =document.getElementById("email").value;
        dni =document.getElementById("dni").value;
        fecha =document.getElementById("date").value;
        tarjeta =document.getElementById("credit").value;
       $("#formulario").slideUp(1000);
           
       setTimeout(function() {
           document.getElementById("insertN").innerHTML=nombre+" "+apellido;
           document.getElementById("mano").innerHTML=mano;
         $("#MenuGame").slideDown(1000)
       }, 1000);
       
 

});
function generarNum(){
var coin= Math.floor(Math.random() * 89 + 1);
if(coin<10){
    return "0"+coin;
}else{
    return coin;
}
}


//JavaScript(Pre JQuery)
var count = 1;
countT=1;
      function partida() {
         countT+=1;
         while(document.getElementById("marcada") != null){
            document.getElementById("marcada").setAttribute("id","casilla");
         }
         
        if(count==5){
          count=1;

          document.getElementById("partidaN").innerHTML = count;
        }else{
          count += 1;
          document.getElementById("partidaN").innerHTML = count;
        }
        $("#generar").removeAttr("disabled");
        $("#monedas").fadeOut();
        document.getElementById("monedas").innerHTML="";
      };

     


      function marcar(){
          document.getElementById("casilla").setAttribute("id","marcada");
      }


function banca(){
    var res = prompt("Tienes "+mano+"$ en mano y "+banco+"$ en el banco. \r¿Desea sacar o ingresar dinero?");
    if(res==="sacar"){
        var din = parseInt(prompt("¿Cuanto desea sacar?"));
        if(din>banco){
            alert("No tienes tanto dinero en el banco");

        }else{
            mano= mano+din;
            banco= banco-din;
            document.getElementById("mano").innerHTML=mano;
        }
    }else{
        if(res==="ingresar"){
            var din = parseInt( prompt("¿Cuanto desea ingresar?"));
            if(din>mano){
                alert("No tienes tanto dinero en mano para ingresar");
            }else{
                banco=banco+din;
                mano=mano-din;
                document.getElementById("mano").innerHTML=mano;
            }
        }else{
            alert("Operción incorrecta");
        }
    }
}



function micuenta(){
    alert("Nombre: "+ nombre+" "+apellido+"\rEmail: "+email+"\rDNI: "+dni+"\rCumpleaños: "+fecha+"\rTarjeta de Credito: "+tarjeta+"\rDinero total: "+(banco+mano)+"$ \nPartidas jugadas: "+countT);
}

function marcar(element){
    element.setAttribute("id","marcada");
}