import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { taskId } = route.params;

  // Fonction de modification du statut de la tâche
  const toggleTaskStatus = () => {
    // Implémentez ici la logique pour modifier le statut de la tâche
    // en fonction de l'ID de la tâche taskId
    console.log('Statut de la tâche modifié');
  };

  // Obtenez les détails de la tâche en fonction de l'ID de la tâche taskId
  // Vous pouvez utiliser votre propre logique pour récupérer les détails de la tâche
  const taskDetails = {
    id: taskId,
    title: 'Acheter des courses',
    description: 'Aliments, produits d\'entretien, etc.',
    completed: false,
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>{taskDetails.title}</Text>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>{taskDetails.description}</Text>
      <Text style={{ fontSize: 16, color: taskDetails.completed ? 'green' : 'red' }}>
        {taskDetails.completed ? 'Complétée' : 'Non complétée'}
      </Text>
      <Button title="Modifier le statut" onPress={toggleTaskStatus} />
    </View>
  );
};

export default TaskDetailsScreen;
