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
          
      };

      function marcar(){
          document.getElementById("caasilla").setAttribute("id","marcada");
      }

var mano=0;
var banco = 2000;
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
    alert("Nombre: John Wayne \rDinero total: "+(banco+mano)+"$ \nPartidas jugadas: "+countT);
}

function marcar(element){
    element.setAttribute("id","marcada");
}