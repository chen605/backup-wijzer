import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const interpretationDataScoresArray = [
  '1. Beginnen: zoals veel bedrijven verzamelen zij al data, maar gegevens digitaliseren en (centraal) opslaan gebeurt nog niet (bewust) en het nut ervan is niet altijd duidelijk.Heeft hulp nodig om dit überhaupt systematisch op te pakken en de technische,juridische, commerciële en ethische mogelijkheden te bepalen.',
  '2. Verzamelen en beschrijven: verzamelt data en kan gegevens ontsluiten, maar heeft moeite om te bepalen welke data er toe doet en waarmee ze hun prestaties kunnen beïnvloeden, datastromen op te schonen en te visualiseren/ ontsluiten.',
  '3. Analyseren: kan data toegankelijk maken en prioriteren en visualiseren en daarmee verbanden leggen en experimenteren. Krijgt ook voldoende input. Heeft ondersteuning nodig om eerste voorspellingen te maken.',
  '4. Voorspellen: kan analyses maken van en verbanden ontdekken in business gerelateerde trends en ontwikkelen, maar heeft ondersteuning nodig om die patronen verder te gebruiken voor diepgaande voorspellingen.',
  '5. Groeien: kent de ontwikkelingen en mogelijkheden op het gebied van data, dashboards & business intelligence en heeft met name behoefte aan toegang tot kapitaal, talent en inzicht in de laatste ontwikkelingen en het toepassen van nieuwe relevante datastromen.',
];

const interpretationCrmScoresArray = [
  '1. Beginnen: Zoals veel bedrijven verzamelen zij al relatiegegevens in Excelsheets, mailprogramma’s of contactlijsten, maar gegevens digitaliseren en (centraal) opslaan gebeurt nog niet (bewust) en het nut ervan is niet altijd duidelijk. Heeft hulp nodig om überhaupt de volledige klantreis te overzien en de technische, juridische, commerciële en ethische mogelijkheden van CRM te bepalen.',
  '2. Verzamelen en beschrijven: verzamelt gegevens van relaties, personen en projecten. Heeft moeite om te bepalen welke andere data er toe doet, datastromen op te schonen en te visualiseren/ ontsluiten.',
  '3. Analyseren: kan naast gegevens van relaties, personen en projecten ook andere relevante data en ontwikkelen verzamelen en toegankelijk maken. Willen deze data gebruiken als ondersteuning bij hun dagelijkse commerciële activiteiten.',
  '4. Voorspellen: kan CRM gebruiken om analyses maken en verbanden te ontdekken in de hele klantreis, maar heeft ondersteuning nodig om die patronen verder te gebruiken voor diepgaande voorspellingen over de effectiviteit van de verkoopstrategie, marketingcampagnes of andere commerciële activiteiten.',
  '5. Groeien: kent de ontwikkelingen en mogelijkheden op het gebied van CRM en heeft met name behoefte aan toegang tot kapitaal, talent en inzicht in de laatste ontwikkelingen en dit ook toe te passen op meer andere categorieën relaties van het bedrijf, zoals leveranciers.',
];

const interpretationDigitalProductsScoresArray = [
  '1. Beginnen: veel interactie met klanten gaat nog handmatig en is reactief. Heeft hulp nodig om überhaupt de volledige klantreis te overzien en de technische, juridische, commerciële en ethische mogelijkheden van digitale interactie met (potentiële) klanten te bepalen.',
  '2. Verzamelen en beschrijven: gebruikt (gestandaardiseerde) digitale kanalen voor klantinteractie en verzamelt gegevens van klantinteracties en marketingactiviteiten. Heeft moeite om te bepalen welke data er toe doet en welke patronen te ontdekken zijn.',
  '3. Analyseren: kan klantinteracties en marketingactiviteiten visualiseren en analyseren om daarmee marketing en ander klantcontacten te automatiseren en verbeteren. Ze willen vooral mogelijkheden om dit verder te optimaliseren.',
  '4. Voorspellen: Kan marketingactiviteiten en klantcontact optimaliseren en automatiseren door de hele klantreis op basis van historische data. Heeft verdere ondersteuning nodig om deze inzichten om te zetten in voorspellingen en meer geautomatiseerde persoonlijke interacties. Wil vooral weten hoe zij zelf de eigen content of kanalen verder kunnen ontwikkelen en optimaliseren.',
  '5. Groeien: kent de ontwikkelingen en mogelijkheden op het gebied van digitale producten, services en marketing, neemt deze kanalen als uitgangspunt in hun strategie en kan hierop toekomstige interacties voorspellen en optimaliseren. Heeft met name behoefte aan toegang tot kapitaal, talent en inzicht in de laatste ontwikkelingen om eigen kanalen verder te optimaliseren.',
];

const interpretationCloudScoresArray = [
  '1. Beginnen: De digitale infrastructuur van een bedrijf is sinds de oprichting meegegroeid met het bedrijf en er is een beperkt bewustzijn van de veiligheidsrisico’s. Er is vooral behoefte aan overzicht in de technische, juridische en operationele mogelijkheden.',
  '2.	Verzamelen en beschrijven: Heeft inzicht in de mogelijkheden en verschillende aanbieders van infrastructuur, office, cloud en veiligheid, maar welke keuze past het beste bij het bedrijf? Er is vooral behoefte aan ondersteuning bij het bepalen van selectiecriteria en maken van keuzes.',
  '3.	Analyseren: Is in staat om aanbieders te beoordelen aan de hand van voor het bedrijf relevante selectiecriteria en kan ook de bestendigheid en veiligheid van de huidige situatie beoordelen. Er is behoefte aan inzicht in de toekomstige behoefte van het bedrijf.',
  '4.	Voorspellen: Heeft al grip op toekomstige behoefte en risico’s van het netwerk met infrastructuur, office, cloud en veiligheid-oplossingen die met het bedrijf mee ontwikkelen. Personaliseert de (security)instellingen van standaardsoftware vergaand en heeft de ontwikkeling van infrastructuur, cloud en office toepassingen opgenomen in hun business planning/ investeringsagenda.',
  '5.	Groeien: kent de ontwikkelingen en mogelijkheden op het gebied van infrastructuur, office, cloud en veiligheid en heeft met name behoefte aan toegang tot kapitaal, talent en de laatste ontwikkelingen.',
];

const interpretationAiScoresArray = [
  '1.	Beginnen: nieuwe technologieën zijn ver-van-mijn-bedshow, er zijn geen bewuste toepassingen en er is geen inzicht in de kansen.',
  '2.	Verzamelen en beschrijven: het bedrijf experimenteert met nieuwe technologieën en werkt actief aan het kennisniveau. Kent ook de eigen zwakheden en probeert middels samenwerkingen en trainingen van medewerkers de mogelijkheden van nieuwe technologie te testen.',
  '3.	Analyseren: het bedrijf is zich bewust van ontwikkelingen die relevant zijn voor de branche en bekijkt hoe deze structureel toegepast kunnen worden aan het bedrijfsproces.',
  '4.	Voorspellen: AI en andere nieuwe technologieën zijn bewust opgenomen in de businessplanning en investeringsagenda van een bedrijf en er zijn samenwerkingen met kennisinstellingen, technische specialisten of sectorverenigingen die collectief werken aan de toepassing van nieuwe technologieën. ',
  '5.	Groeien: kent de ontwikkelingen en mogelijkheden van AI en andere nieuwe technologieën en heeft met name behoefte aan toegang tot kapitaal, talent en de laatste ontwikkelingen.',
];

const ScoresInterpretation = () => {
  const { uid } = useSelector(selectUser);
  const [dataScore, setDataScore] = useState([]);
  const [crmScore, setCrmScore] = useState([]);
  const [digitalProductsScore, setDigitalProductsScore] = useState([]);

  const [cloudScore, setCloudScore] = useState([]);
  const [aiScore, setAiScore] = useState([]);
  const domainName = process.env.REACT_APP_DOMAIN_NAME;

  function getMeaningOfScore() {
    axios
      .get(`${domainName}/userprogress`, {
        headers: {
          'Content-Type': 'application/json',
          userFirebaseId: uid,
        },
      })
      .then((res) => {
        const data = res.data;
        const resultsArray = [];

        let dataRating = data.dataRating;
        let crmRating = data.crmRating;
        let digitalProductsRating = data.digitalProductsRating;
        let securityRating = data.securityRating;
        let aiRating = data.aiRating;

        resultsArray.push(
          dataRating,
          crmRating,
          digitalProductsRating,
          securityRating,
          aiRating
        );
        setDataScore(resultsArray);
        setCrmScore(resultsArray);
        setDigitalProductsScore(resultsArray);

        const meaningScores = () => {
          let dataScore = Math.round(resultsArray[0]);
          let crmScore = Math.round(resultsArray[1]);
          let digitalProductsScore = Math.round(resultsArray[2]);
          let cloudScore = Math.round(resultsArray[3]);
          let aiScore = Math.round(resultsArray[4]);

          setDataScore(interpretationDataScoresArray[dataScore - 1]);
          setCrmScore(interpretationCrmScoresArray[crmScore - 1]);
          setDigitalProductsScore(
            interpretationDigitalProductsScoresArray[digitalProductsScore - 1]
          );
          setCloudScore(interpretationCloudScoresArray[cloudScore - 1]);
          setAiScore(interpretationAiScoresArray[aiScore - 1]);
        };

        meaningScores();
      });
  }

  useEffect(() => {
    getMeaningOfScore();
  }, []);

  return (
    <div className="scores-container">
      <h2 className="scores-interpretation-title">Resultaat</h2>
      <div className="data-container">
        <h3>Data, Dashboards &amp; Business Intelligence</h3>
        <section>{dataScore}</section>
      </div>

      <div className="crm-container">
        <h3>CRM en Klantreis</h3>
        <section>{crmScore}</section>
      </div>

      <div className="digital-products-container">
        <h3>Digital producten, Service &amp; Marketing</h3>
        <section>{digitalProductsScore}</section>
      </div>

      <div className="cloud-container">
        <h3>Infrastructuur, Office, Cloud en Veiligheid</h3>
        <section>{cloudScore}</section>
      </div>

      <div className="ai-container">
        <h3>Artificial Intelligence &amp; en andere opkomende technologieën</h3>
        <section>{aiScore}</section>
      </div>
    </div>
  );
};

export default ScoresInterpretation;
