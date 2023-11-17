


## Créateur de Docker
Jérôme Petazzoni


## configuration ssh 
## git clone (repo) (à l'interieur d'un repertoire)
## .git : contient des config
## repository git (systeme de versionnement ) 
## git est un projet distribué, c'est un graphe asycycle,  orienté  (il n'y pas d'erreur, toujours ) : permet de reconstruire
## arret : transition entre deux commit
## noeud : commit
## savoir faire des operation matricielles
## git checkout ( hash, tag, nom de branch)
## le tronc c'est la premier branch sur laquelle on merge tout
## git checkout -b nom_branche
## squasher 
## Keybase.io : signé un commit



#### Fondamentaux sur Docker
 ** Docker : le principe d'utiliser un container pour deployer une application
     *** Container : sert à tester (sans vm) isoler l'influence d'une application A sur une machine B
     *** Télécharger une image de container : docker pull _nom_d_image
     *** Créer un container à partir d'une image : docker run --name _nom_container_  _nom_d_image -iTd (d: exécuter en arrière plan) (std in & out)  
     *** tty pour teletype 
     *** -p 9999:8083:udp (default tcp) -> port mapping P_i:P_a 
	** Couche : TCP : UDP

# Podman (à installer)

