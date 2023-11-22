[![Build Status](https://codefirst.iut.uca.fr/api/badges/augustin.affognon/MeteoApp/status.svg)](https://codefirst.iut.uca.fr/augustin.affognon/MeteoApp)

# Projet
<h2>Application native de météo </h2>

* Les données méologiques recupérées via une api <a href="https://iut-weather-api.azurewebsites.net/swagger-ui/"> WEATHER API</a>

* La persistance avec <b>AsyncStorage</b>

## MeteoApp Sketch
  Accueil                 |   Page Detail                
:-------------------------:|:-------------------------:
<img size=500 src="https://share.balsamiq.com/c/o1Hmu5p1qDXA4mbhw136Zk.png" />   |<img size=500 src="https://share.balsamiq.com/c/68xffMTdJcTdx9QhRhqPDh.png" />  


## MeteoApp Screenshots (Réalisations)
  Accueil                 |   Page Detail      |  Page Favoris                 | Liste Favoris                
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
<img size=500 src="Documentation/images/home.png" />   |<img size=500 src="Documentation/images/detail.png" />  | <img size=500 src="Documentation/images/favorite.png" />  | <img size=500 src="Documentation/images/favorites.png" />  

## Explication

*  Accueil
    - Affichage de la liste des météos par ville,
    - Search bar pour rechercher

* Page de Détails
    - Affichage avec des couleurs et images dynamiques des autres informations complètes sur la météo du jour d'une ville
    - Un boutton [+] pour ajouter la météo actuelle de la ville au Favoris
    - Un boutton [Favoris] en bas de la page pour naviger sur la liste des Favoris

* Page de Favoris

    [*] Page de tous les favoris de tous les villes

        - Affiche de la liste des villes, pour naviger sur la page de favoris de la ville

    [*] Page de Favoris d'une ville
    
        - Les favoris sont affichés avec un composant UI qui comporte un boutton de suppression du favoris


## Notation checklist

* [x] Documentation (6 pts)
    - [x] Application sketches (4 pts)
    - [x] A Readme describing your project/application. (2 pts)
* [x] Basics (20 pts (- 2))
    - [x] Navigation (3 pts)
        + [x] Tab bottom navigation (2 pts) AND at least one button (1 pts)
    - [x] Redux Store (10 pts)
        + [x] Read data from redux store (2 pts)
        + [x] Update data to redux store with actions and reducers (slice = 0) (4 pts)
        + [x] Update data to redux store using redux-thunk (API AND|OR AsyncStorage) (4 pts)
    - [x] Display list of items (2 pts)
        + [x] FlatList or VirtualizedList or SectionList
    - [x] Display dynamic image (2 pts)
    - [x] Binding child component props (1 pts)
    - [x] Handle a TextInput correctly (2 pts)
        + [x] Beware of keyboard management
* [x] Application features (14 pts (- 2))
    - [x] Retrieve data using the Web API (6 pts)
        + [x] Handle fetch success callback (3 pts)
        + [x] Handle fetch error callback (3 pts)
    - [x] Store favorite data into phone storage (2 pts)
    - [x] Write Tests (6 pts (- 1))
        + [x] all actions payload (1 pts)
        + [x] all reducers case (2 pts)
        + [-] one UI Component (3 pts)

## Directory Structure
```
source
│  
└───Meteo
    │───Components
    |    
    │───Data
    │      
    |   
    │───redux
    |    │──actions
    |    │──reducers
    |    │──store.ts
    |    └──constants.ts
    |
    │───Screens
    |
    |       
    │───tests
    |    
    └───thunk
         
```
### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

## Author : 

* <a >Augustin AFFOGNON</a>


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



---- instruction docker run : docker run .............. -e MAVAR=_valeur_
--- docker exec _nom_ctn -it _nom_ctn _cmd_a_exe :: sh -c "echo salut"
