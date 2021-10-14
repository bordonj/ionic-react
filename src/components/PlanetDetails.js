import { useState, useEffect } from 'react';
import { IonPage, IonContent, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonCardContent, IonButton } from "@ionic/react";

const PlanetDetails = ({planet, resetPlanet}) => {

  let orbitalPeriod = planet.orbitalPeriod ? planet.orbitalPeriod: "n/a";
  let population = planet.population ? planet.population: "n/a";


  const showTerrain = () => {
    if (planet.terrains) {
      return (
        <>
          <h2>Terrain:</h2> {planet.terrains.map((terrain, idx) => {
            return (
              <IonItem key={idx}> 
                {terrain}
                </IonItem>
            )
          })}
        </>
      )
    }
  };

  const showClimates = () => {
    if (planet.climates) {
      return (
        <>
          <h2>Climates:</h2> {planet.climates.map((climate) => {
            return (
              <div key={climate}>
                <IonItem>{climate}</IonItem>
              </div>
            )
          })}
        </>
      )
    }
  }
  
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
                  <IonItem>
                    Orbital Period: {orbitalPeriod}
                  </IonItem>
                  <IonItem>
                    Population: {population}
                  </IonItem>
                  {showTerrain()}
                  {showClimates()}
                </IonList>
              </IonCardContent>
            </IonCardHeader>
            <IonButton onClick={resetPlanet}>Back to List</IonButton>
          </IonCard>
        </IonContent>
      </IonPage>
    )

  
}

export default PlanetDetails;
