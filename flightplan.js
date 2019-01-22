const plan = require('flightplan');

plan.target('azure', {
    host: 'duckcraft.westeurope.cloudapp.azure.com',
    username: 'vagrant',
    agent: process.env.SSH_AUTH_SOCK
});

plan.remote(
    'deployTo',
    remote => {
        remote.log('Let\'s set a duckcraft server');
        
        // Cloning repository
        remote.exec('git clone https://github.com/jojelupipa/Hora-de-minecraft.git');

        // Download java
        remote.exec('wget https://javadl.oracle.com/webapps/download/AutoDL?BundleId=236878_42970487e3af4f5aa5bca3f542482c60');

        // Rename downloaded file
        remote.exec('mv AutoDL?BundleId=236878_42970487e3af4f5aa5bca3f542482c60 java.tar.gz');

        // Unzip
        remote.exec('tar zxvf java.tar.gz');

        // Download server
        remote.exec('wget https://launcher.mojang.com/v1/objects/3737db93722a9e39eeada7c27e7aca28b144ffa7/server.jar');

        // Move server to right dir
        remote.exec('mv server.jar Hora-de-minecraft');

        // Run server
        remote.exec('./jre1.8.0_201/bin/java -Xmx1024M -Xms1024M -jar Hora-de-minecraft/server.jar nogui');
        
    });

plan.remote(
    'run',
    remote => {
        // Launching server
         remote.exec('./jre1.8.0_201/bin/java -Xmx1024M -Xms1024M -jar Hora-de-minecraft/server.jar nogui');
    });

plan.remote(
    'stop',
    remote => {
       // TODO
    });

plan.remote(
    'deleteAll',
    remote => {
        remote.rm('-rf .');
    });
