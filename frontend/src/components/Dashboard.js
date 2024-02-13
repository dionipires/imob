// Dashboard.js
import { useEffect, useState } from 'react';
import { auth, firestore } from '../config/firebaseConfig';

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Verifique o papel do usuário no banco de dados Firebase
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        const role = userDoc.data().role;
        setUserRole(role);
      } else {
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {userRole === 'admin' && <AdminDashboard />}
      {userRole === 'colaborador' && <ColaboradorDashboard />}
      {userRole === 'visitante' && <VisitanteDashboard />}
    </div>
  );
};
