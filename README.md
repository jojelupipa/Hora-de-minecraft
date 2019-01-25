# Hora-de-minecraft
¿Sientes la necesidad ocasional de jugar a Minecraft? ¿Quieres jugar
con tus amigos pero no puedes/sabes/quieres montar un servidor en tu
pc? ¡¡¡Olvídate de todos tus problemas con **Hora de Minecraft**!!!

Con **Hora de Minecraft** podrás tener en unos instantes un servidor
alojado en Azure con solo clonar este repo y teclear dos comandos.

*Intento de aplicar algunos de mis conocimientos adquiridos para que todos podamos jugar a minecraft.*




## Necesitarás:

- [Vagrant](https://www.vagrantup.com/downloads.html)

- [Flightplan](https://www.npmjs.com/package/flightplan) (*local y globalmente*, se puede instalar siguiendo las instrucciones del previo enlace)

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


## Estado actual

Actualmente puedes crear un mundo, jugar con tus amigos y guardarlo,
para cargar un mundo propio o elegir una semilla personalizada pronto
se incorporarán más cambios ;)
