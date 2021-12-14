import React from 'react';
import { IonButton, IonPage, IonContent, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';

export const IconExample: React.FC = () => {
  return <IonPage><IonButton><IonIcon icon={camera} />
      Take Picture
    </IonButton></IonPage>
};