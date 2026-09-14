@HU-01
Feature: Iniciar una partida

Como jugador
Quiero que al apretar el botón "Jugar" me aparezca la palabra a descubrir con casilleros vacíos
Para empezar a jugar

@CA-01
Scenario: Mostrar un casillero por cada letra de la palabra
Given que el jugador inicia una partida con la palabra "ESPEJO"
When presiona el botón "Jugar"
Then debe ver 6 casilleros vacíos
