# Hora-de-minecraft
Intento de aplicar mis conocimientos adquiridos para que todos podamos jugar a minecraft


## Necesitarás:

- [Vagrant]()

- [Flightplan]()

- Una suscripción en Azure (si eres estudiante tal vez dispongas de una ;) )


## Arriba!

Lanza tu máquina con:

`vagrant up`

Levanta tu servidor con:

`fly deployTo:azure`

*Modifica el nombre de la máquina virtual en el archivo Vagrantfile
para tener tu propio dominio*


## Déjalo ya

Guarda una copia de tu mundo:

`rsync -avzh vagrant@<IP_de_tu_maquina>:/home/vagrant/world .`

Si no sabes cual es tu IP usa:

`fly getIP:azure`

Elimina tu máquina virtual cuando no la estés usando con:

`vagrant destroy`
