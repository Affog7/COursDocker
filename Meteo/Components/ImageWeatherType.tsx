 
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

  export const getTemperatureColor = (temperature) => {
    if (temperature < 10) {
      return '#00aaff'; // Bleu pour les températures froides
    } else if (temperature > 30) {
      return '#fde880'; // Rouge pour les températures chaudes
    } else {
      return '#adcac0'; // Noir par défaut
    }
  };