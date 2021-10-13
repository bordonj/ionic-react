import { useState, useEffect } from 'react';
import { IonPage, IonContent, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonCardContent, IonButton } from "@ionic/react";

const PlanetDetails = ({planet, planetVisible, setPlanetVisible}) => {
  const [thisPlanet, setThisPlanet] = useState(planet);

  let orbitalPeriod = planet.orbitalPeriod? planet.orbitalPeriod: "n/a";
  let population = planet.population? planet.population: "n/a";

  useEffect(() => {
    if (planet) {
      setThisPlanet(planet);
    }
    
  }, [thisPlanet]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {planet.name} Details
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              Here you will find some details about the planet
            </IonCardSubtitle>
            <IonCardTitle>
              Name: {planet.name}
            </IonCardTitle>

            <IonCardContent>
              <IonList>
                <IonItem>Orbital Period: {orbitalPeriod}</IonItem>
                <IonItem>Population: {population}</IonItem>
                <IonItem>Terrain: {planet.terrains.map((terrain, idx) => {
                  return (
                    <div key={idx}>
                      <IonItem>{terrain}</IonItem>
                    </div>
                  )
                })}</IonItem>
                <IonItem>Climates: {planet.climates.map((climate, idx) => {
                  return (
                    <div key={climate}>
                      <IonItem>{climate}</IonItem>
                    </div>
                  )
                })}</IonItem>
              </IonList>
            </IonCardContent>
            <IonButton onClick={()=> setPlanetVisible(!planetVisible)}>Back</IonButton>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  )
  
}

export default PlanetDetails
