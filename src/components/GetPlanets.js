import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { IonPage, IonSearchbar, IonContent, IonList, IonItem } from "@ionic/react";
import { LOAD_PLANETS } from '../GraphQL/Queries';

function GetPlanets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  const { data } = useQuery(LOAD_PLANETS);
  

  useEffect(() => {
    if (data) {
      setResults(data.allPlanets.planets)
    }
  }, [data]);

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
          {results.filter(val => {
            if (searchTerm == "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((val, key) => {
            return (
              <IonItem>
                <div className="planet" key={key}>
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
}

export default GetPlanets;
