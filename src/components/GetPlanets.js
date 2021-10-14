import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { IonPage, IonSearchbar, IonContent, IonList, IonItem } from "@ionic/react";
import { LOAD_PLANETS, LOAD_PLANET } from '../GraphQL/Queries';
import PlanetDetails from './PlanetDetails';

function GetPlanets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [id, setId] = useState('');
  const [planet, setPlanet] = useState({});
  const [planetVisible, setPlanetVisible] = useState(false);

  const { data } = useQuery(LOAD_PLANETS);
  const { data: datum } = useQuery(LOAD_PLANET, {
    variables: { "planetId": id }
  });

  const handleChangingPlanetId = id => {
    setId(id);
    setPlanetVisible(true);
  }

  useEffect(() => {
    if (data) {
      setResults(data.allPlanets.planets);
    }
    if (datum) {
      setPlanet(datum.planet)
    }
  }, [data, datum]);

  const sorted = [...results];
  sorted.sort((a, b) => {
    return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
  });

  if (!planetVisible) {
    return (
      <IonPage>
        <div className="get-planets">
          <IonSearchbar
            onIonChange={event => setSearchTerm(event.target.value)}
            placeholder="Search..."
          />
          <IonContent
            style={{height: "100vh"}}>
            <IonList>
            {sorted.sort().filter(val => {
              if (searchTerm == "") {
                return val;
              } else if (val.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
                return val;
              }
            }).map((val, key) => {
              return (
                <IonItem key={key}>
                  <div 
                    className="planet" 
                    key={val.id}
                    onClick={() => handleChangingPlanetId(val.id)}
                  >
                    <h3>{val.name}</h3>
                  </div>
                </IonItem>
              )
            })}
            </IonList>
          </IonContent>
        </div>
      </IonPage>
    )
  } else {
    return (
      <PlanetDetails 
        planet={planet}
        planetVisible={planetVisible}
        setPlanetVisible={setPlanetVisible}
      />
    )
  }

}

export default GetPlanets;
