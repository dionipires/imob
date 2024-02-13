// admin.js
import { firestore } from './firebaseConfig';

const grantUserRole = async (userId, role) => {
  try {
    await firestore.collection('users').doc(userId).update({
      role: role
    });
    console.log(`Papel do usuário ${userId} atualizado para ${role}.`);
  } catch (error) {
    console.error('Erro ao conceder papel de usuário:', error);
  }
};

const revokeUserRole = async (userId) => {
  try {
    await firestore.collection('users').doc(userId).update({
      role: 'visitante'
    });
    console.log(`Papel do usuário ${userId} revogado.`);
  } catch (error) {
    console.error('Erro ao revogar papel de usuário:', error);
  }
};
