import { useState, useEffect } from 'react';
import { IonPage, IonContent, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonCardContent, IonButton } from "@ionic/react";

const PlanetDetails = (props) => {
  const [thisPlanet, setThisPlanet] = useState(props.planet);
  const [terrains, setTerrains] = useState(props.planet.terrains);
  const [climates, setClimates] = useState(props.planet.climates)
  console.log('this planet', thisPlanet)
  console.log('props', props)
  console.log('props planet', props.planet)
  console.log('props planet terrains', props.planet.terrains)

  let orbitalPeriod = props.planet.orbitalPeriod ? props.planet.orbitalPeriod: "n/a";
  let population = props.planet.population ? props.planet.population: "n/a";

  useEffect(() => {
    // if (thisPlanet) {
    //   setThisPlanet(planet);
    //   setTerrains(planet.terrains);
    // }
    setThisPlanet(props.planet);
    setTerrains(props.planet.terrains);
    
  }, [thisPlanet, terrains]);

  const showTerrain = () => {
    if (props?.planet?.terrains) {
      return (
        <>
          <h2>Terrain:</h2> {props.planet?.terrains?.map((terrain, idx) => {
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
    if (props?.planet?.climates) {
      return (
        <>
          <h2>Climates:</h2> {props.planet.climates.map((climate) => {
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
  
  console.log('terrains', terrains)
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              {props.planet.name} Details
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
                Name: {props.planet.name}
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
              <IonButton onClick={()=> props.setPlanetVisible(!props.planetVisible)}>Back</IonButton>
            </IonCardHeader>
          </IonCard>
        </IonContent>
      </IonPage>
    )

  
}

export default PlanetDetails
