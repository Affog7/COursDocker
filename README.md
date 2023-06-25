[![Build Status](https://codefirst.iut.uca.fr/api/badges/augustin.affognon/MeteoApp/status.svg)](https://codefirst.iut.uca.fr/augustin.affognon/MeteoApp)

# Projet
<h2>Application native de météo </h2>

* Les données méologiques recupérées via une api <a href="https://iut-weather-api.azurewebsites.net/swagger-ui/"> WEATHER API</a>

* La persistance avec <b>AsyncStorage</b>

## MeteoApp Sketch
  Accueil                 |   Page Detail                
:-------------------------:|:-------------------------:
<img size=500 src="https://share.balsamiq.com/c/o1Hmu5p1qDXA4mbhw136Zk.png" />   |<img size=500 src="https://share.balsamiq.com/c/68xffMTdJcTdx9QhRhqPDh.png" />  


## MeteoApp Screenshots (Réalisatons)
  Accueil                 |   Page Detail      |  Page Favoris                 | Liste Favoris                
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
<img size=500 src="Documentation/images/home.png" />   |<img size=500 src="Documentation/images/detail.png" />  | <img size=500 src="Documentation/images/favorite.png" />  | <img size=500 src="Documentation/images/favorites.png" />  
 

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