# language: es
@HU-09
Característica: Niveles de dificultad

  @CA-09
  Escenario: Iniciar una partida en dificultad fácil
    Dado que el jugador selecciona la dificultad "Fácil"
    Cuando inicia una partida
    Entonces debe tener 6 vidas
    Y la palabra seleccionada debe tener entre 4 y 5 letras