p_cardinales = ['N','E','S','O']
cardinales_valores = [(0,1), (1,0), (0,-1), (-1,0)]


class rover:
    def __init__(self, orientacion, posicion):
        self.orientacion = orientacion
        self.posicion = posicion

    def get_posicion(self):
        return self.posicion

    def get_orientacion(self):
        return p_cardinales[self.orientacion % 4]

    def girarDerecha(self):
        self.orientacion += 1

    def girarIzquierda(self):
        self.orientacion -= 1

    def avanzar(self):
        self.posicion = tuple(sum(x) for x in zip(self.posicion, cardinales_valores[self.orientacion % 4]))

    def retroceder(self):
        self.posicion = tuple(a - b for a, b in zip(self.posicion, cardinales_valores[self.orientacion % 4]))

    def comando(self , instruccion):
        for x in instruccion:
            match x:
                case 'F':
                    self.avanzar()
                case 'B':
                    self.retroceder()
                case 'L':
                    self.girarIzquierda()
                case 'R':
                    self.girarDerecha()

def test_posicion():
    miRover = rover(0, (0,0))
    assert (0,0) == miRover.get_posicion()

def test_orientacion():
    miRover = rover(0, (0,0))
    assert 'N' == miRover.get_orientacion()

def test_girarDerecha():
    miRover = rover(0, (0,0))
    miRover.girarDerecha()
    assert 'E' == miRover.get_orientacion()

def test_girarIzquierda():
    miRover = rover(0, (0,0))
    miRover.girarIzquierda()
    assert 'O' == miRover.get_orientacion()

def test_avanzar():
    miRover = rover(0, (0,0))
    miRover.avanzar()
    assert (0,1) == miRover.get_posicion()

def test_retroceder():
    miRover = rover(0, (0,0))
    miRover.retroceder()
    assert (0,-1) == miRover.get_posicion()

def test_comandos():
    miRover = rover(0, (0,0))
    miRover.comando("FFRFF")
    assert(2,2) == miRover.get_posicion()