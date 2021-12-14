import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Brandy</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/icon')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
    </IonContent>
    </IonPage>
  );
};

export default Home;
