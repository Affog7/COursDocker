 

export const getImageSource = (weatherType) => {
    switch (weatherType) {
      case 'Ensoleillé':
        return require('../assets/Ensoleille.png');
      case 'Pluvieux':
        return require('../assets/Pluvieux.png');
      case 'Nuageux':
        return require('../assets/Nuageux.png');
       case 'Dégagé' :
        return require('../assets/Degage.png');
      default:
        return require('../assets/type.png');
    }
  };