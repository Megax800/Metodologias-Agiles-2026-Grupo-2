# language: es
@HU-11
Característica: Teclado en pantalla

  @CA-11a
  Escenario: El jugador adivina una letra con el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "E" del teclado en pantalla
    Entonces se ve la palabra "E _ _ E _ _"
    Y la tecla "E" del teclado en pantalla está deshabilitada

  @CA-11b
  Escenario: El jugador falla una letra con el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "A" del teclado en pantalla
    Entonces debe tener 4 vidas restantes
    Y la tecla "A" del teclado en pantalla está deshabilitada

  @CA-11c
  Escenario: El jugador pierde usando solo el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "A" del teclado en pantalla
    Y presiona la tecla "B" del teclado en pantalla
    Y presiona la tecla "C" del teclado en pantalla
    Y presiona la tecla "D" del teclado en pantalla
    Y presiona la tecla "F" del teclado en pantalla
    Entonces debe ver el mensaje "¡Perdiste!"
    
  @CA-11d
  Escenario: El jugador gana usando solo el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "E" del teclado en pantalla
    Y presiona la tecla "S" del teclado en pantalla
    Y presiona la tecla "P" del teclado en pantalla
    Y presiona la tecla "J" del teclado en pantalla
    Y presiona la tecla "O" del teclado en pantalla
    Entonces debe ver el mensaje "¡Ganaste!"

  @CA-11e
  Escenario: El teclado queda deshabilitado cuando el jugador pierde
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "A" del teclado en pantalla
    Entonces la tecla "G" del teclado en pantalla está habilitada
    Cuando presiona la tecla "B" del teclado en pantalla
    Y presiona la tecla "C" del teclado en pantalla
    Y presiona la tecla "D" del teclado en pantalla
    Y presiona la tecla "F" del teclado en pantalla
    Entonces la tecla "G" del teclado en pantalla está deshabilitada

  @CA-11f
  Escenario: El teclado queda deshabilitado cuando el jugador gana
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "E" del teclado en pantalla
    Entonces la tecla "G" del teclado en pantalla está habilitada
    Cuando presiona la tecla "S" del teclado en pantalla
    Y presiona la tecla "P" del teclado en pantalla
    Y presiona la tecla "J" del teclado en pantalla
    Y presiona la tecla "O" del teclado en pantalla
    Entonces la tecla "G" del teclado en pantalla está deshabilitada
  
  @CA-11g
  Escenario: El jugador ve la palabra secreta al perder con el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "A" del teclado en pantalla
    Y presiona la tecla "B" del teclado en pantalla
    Y presiona la tecla "C" del teclado en pantalla
    Y presiona la tecla "D" del teclado en pantalla
    Y presiona la tecla "F" del teclado en pantalla
    Entonces debe ver la palabra secreta "ESPEJO"

  @CA-11h
  Escenario: El jugador ve el botón Jugar de nuevo al perder con el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "A" del teclado en pantalla
    Y presiona la tecla "B" del teclado en pantalla
    Y presiona la tecla "C" del teclado en pantalla
    Y presiona la tecla "D" del teclado en pantalla
    Y presiona la tecla "F" del teclado en pantalla
    Entonces debe ver el botón "Jugar de nuevo"