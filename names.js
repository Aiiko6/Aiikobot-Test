const  discord  =  require ( ' discord.js ' );
const  client  =  nouveau  discord.Client ();
 préfixe  const =  ' ! ' ;


client . on ( " prêt " , () => {
  var servers =  client . guildes . array (). carte ( g  =>  g . nom ). rejoindre ( ' , ' );
  console . log ( " -------------------------------------- " );
  
  client . utilisateur . setGame ( " #test " , " http://twitch.tv/highwaytraffic " ); // Joue à ...
});

client . on ( ' message ' , message  => {
  if ( message . content . startsWith ( ' #test ' )) {
      un message . répondre ( « oui » );
     }
});

// identification
var dt =  processus . env . DISCORD_TOKEN  ||  processus . argv [ 2 ];

if ( ! dt) {
    console . log ( ' votretoken ' );
}

client . connexion (dt);
