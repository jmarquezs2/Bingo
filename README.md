# Bingo Saloon
Página Web de bingo con Bootstrap y JavaScript


<b>Formulario<b><br>

  Para practicar con Jquery y Jquery validation, se ha incorporado un formulario con validación automatica y que se expande y se contrae de forma dinamica mediante metodos jquery que se encuentran en el archivo ".js".
  Hay dos botones. Uno de ellos hace submit al formulario y verifica la validación, luego recarga la página. Otro hace la función de simular que se ha registrado un usuario, ignora l validación del formulario y recoge cualquier entrada y pasa a mostrar la web con los datos introducidos en  el tablón del jugador y en el botón de "Mi cuenta". Los datos introducidos solo sirven para esto último, no se enviaran a ninguna parte ni se usaran para otro fin.


<b>Menu de navegación</b> <br>
<br>
El botón "Partida nueva" restablece todas las casillas que hayan sido marcadas a la normalidad. Además suma una partida en el tablón del jugador.<br><br>
El botón Banca añade un sistema de banco virtual. Podemos sacar dinero para agragarlo a la mano ( represetanda por "Botín" en el tablón del jugador) o ingresar dinero de esta al banco. Si queremos añadir dinero debemos responder con la palabra "ingresar" y si queremos retirar dinero usamos la palabra "sacar". Luego se escribe la cantidad deseada y se comprueba si es posible hacer la actividad.<br><br>
El botón Mi cuenta muestra los datos del jugador como su nombre completo, el dinero total (mano más banco) y el número de partidas jugadas.<br><br>
El resto de botónes aun no tienen ninguna función.<br>
El meno aparecera contraido si estamos en un tamaño movil.<br>

<b>Tablón del jugador</b> <br>
Aquí se muestra la información del jugador como su nombre, el dinero en mano y las partidas que lleva. Cuando estas llegan a 5 se reinicia el contador.<br>
El tablón aparecera a la izquierda si se esta en una pantalla grande y aparecera debajo del menu si estamos en una pantalla inferior.
<br>

<b>Cartones<b><br>
Los cartones aparecen en dos filas y dos columnas si estamos en una pantalla mediana o superior. Tambien aparecen en este orden si el móvil esta en horizontal. Los números en estos casos aparecen en dorado.<br>
Si la pantalla corresponde a un móvil y esta en posisión vertical apareceran en una unica fila y los números aparecen en verde.
