import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from './custom-component/CustomButton';
import Banner from './Banner/Banner';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const CompanyRegistration = () => {
  const { uid } = useSelector(selectUser);

  const [companyCredentials, setCompanyCredentials] = useState({
    name: '',
    kvkNumber: '',
    address: '',
    postalCode: '',
    registryDate: '',
    city: '',
    companyType: '',
    foundingYear: '',
    numberOfEmployeesInFte: '',
    annualSales: '',
    percentageSalesBusiness2Consumer: '',
    originClient: '',
    companyProfile: '',
    percentageReadynessDigitalTransformation: '',
    userFirebaseId: uid,
  });

  const {
    name,
    kvkNumber,
    address,
    postalCode,
    city,
    companyType,
    foundingYear,
    numberOfEmployeesInFte,
    annualSales,
    percentageSalesBusiness2Consumer,
    originClient,
    companyProfile,
    percentageReadynessDigitalTransformation,
  } = companyCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyCredentials({ ...companyCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const company = JSON.stringify(companyCredentials);
    try {
      await axios.post('http://localhost:8080/user/company2/signup', company, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Registratie succesvol!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="company-registration">
      <Banner />
      <form onSubmit={handleSubmit}>
        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Bedrijfsnaam
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Kvk-nummer
          </label>
          <input
            type="text"
            name="kvkNumber"
            value={kvkNumber}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <div className="company-registration__input">
          <label className="company-registration__input__title">Adres</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <div className="company-registration__input">
          <label className="company-registration__input__title">Postcode</label>
          <input
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <div className="company-registration__input">
          <label className="company-registration__input__title">Plaats</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        {/* multiple radio buttons */}
        <div className="company-registration__input">
          <label className="company-registration__input__title">
            In welke bedrijfssector is uw bedrijf voornamelijk actief?
          </label>
          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Landbouw, bosbouw en visserij"
              checked={companyType === 'Landbouw, bosbouw en visserij'}
              onChange={handleChange}
            />
            &nbsp;Landbouw, bosbouw en visserij
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Winning of productie delfstoffen, water, elektriciteit of aardgas"
              checked={
                companyType ===
                'Winning of productie delfstoffen, water, elektriciteit of aardgas'
              }
              onChange={handleChange}
            />
            &nbsp;Winning of productie delfstoffen, water, elektriciteit of
            aardgas
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Industrie (productiebedrijf)"
              checked={companyType === 'Industrie (productiebedrijf)'}
              onChange={handleChange}
            />
            &nbsp;Industrie (productiebedrijf)
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Bouw"
              checked={companyType === 'Bouw'}
              onChange={handleChange}
            />
            &nbsp;Bouw
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Detailhandel, groothandel en reparatie van auto's"
              checked={
                companyType ===
                'Detailhandel, groothandel en reparatie van auto'
              }
              onChange={handleChange}
            />
            &nbsp;Detailhandel, groothandel en reparatie van auto's
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Vervoer en opslag"
              checked={companyType === 'Vervoer en opslag'}
              onChange={handleChange}
            />
            &nbsp;Vervoer en opslag
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Horeca"
              checked={companyType === 'Horeca'}
              onChange={handleChange}
            />
            &nbsp;Horeca
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Informatie en communicatie"
              checked={companyType === 'Informatie en communicatie'}
              onChange={handleChange}
            />
            &nbsp;Informatie en communicatie
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)"
              checked={
                companyType ===
                'Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)'
              }
              onChange={handleChange}
            />
            &nbsp;Zakelijke dienstverlening (inclusief verhuur/handel onroerend
            goed)
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Overheid, Onderwijs, Zorg"
              checked={companyType === 'Overheid, Onderwijs, Zorg'}
              onChange={handleChange}
            />
            &nbsp;Overheid, Onderwijs, Zorg
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Cultuur, sport en recreatie"
              checked={companyType === 'Cultuur, sport en recreatie'}
              onChange={handleChange}
            />
            &nbsp;Cultuur, sport en recreatie
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="companyType"
              type="radio"
              value="Overige dienstverlening"
              checked={companyType === 'Overige dienstverlening'}
              onChange={handleChange}
            />
            &nbsp;Overige dienstverlening
          </label>
        </div>
        {/* end of sector question */}

        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Oprichtingsjaar
          </label>
          <input
            type="text"
            name="foundingYear"
            value={foundingYear}
            placeholder="Your answer"
            onChange={handleChange}
          />
        </div>

        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Aantal medewerkers (in fte)
          </label>
          <input
            type="text"
            name="numberOfEmployeesInFte"
            value={numberOfEmployeesInFte}
            placeholder="Your answer"
            onChange={handleChange}
          />
        </div>

        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Jaarlijkse omzet (gemiddelde afgelopen 3 jaar)
          </label>
          <input
            type="text"
            name="annualSales"
            value={annualSales}
            placeholder="Your answer"
            onChange={handleChange}
          />
        </div>

        {/* next question */}
        <div className="origin-revenue-container">
          <div className="move-down">
            <label className="company-registration__input__title">
              Hoeveel procent van uw omzet komt van wie?
            </label>
            <h5 className="company-registration__input__title__two">
              1 = 100% van consumenten, 5 = 100% van bedrijven, inclusief
              overheid en/of non-profit
            </h5>

            <ul className="origin-revenue-answers move-further-down">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="percentageSalesBusiness2Consumer"
                  checked={percentageSalesBusiness2Consumer === '1'}
                  onChange={handleChange}
                />
                <label>1</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="percentageSalesBusiness2Consumer"
                  checked={percentageSalesBusiness2Consumer === '2'}
                  onChange={handleChange}
                />
                <label>2</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="percentageSalesBusiness2Consumer"
                  checked={percentageSalesBusiness2Consumer === '3'}
                  onChange={handleChange}
                />
                <label>3</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="percentageSalesBusiness2Consumer"
                  checked={percentageSalesBusiness2Consumer === '4'}
                  onChange={handleChange}
                />
                <label>4</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="percentageSalesBusiness2Consumer"
                  checked={percentageSalesBusiness2Consumer === '5'}
                  onChange={handleChange}
                />
                <label>5</label>
              </li>
            </ul>
          </div>
        </div>

        {/* next question */}
        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Waar komen de meeste van uw klanten vandaan?
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Eigen regio"
              name="originClient"
              checked={originClient === 'Eigen regio'}
              onChange={handleChange}
            />
            &nbsp;Eigen regio
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Heel Nederland"
              name="originClient"
              checked={originClient === 'Heel Nederland'}
              onChange={handleChange}
            />
            &nbsp;Heel Nederland
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Europa"
              name="originClient"
              checked={originClient === 'Europa'}
              onChange={handleChange}
            />
            &nbsp;Europa
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Wereldwijd"
              name="originClient"
              checked={originClient === 'Wereldwijd'}
              onChange={handleChange}
            />
            &nbsp;Wereldwijd
          </label>
        </div>

        {/* next question */}
        <div className="company-registration__input">
          <label className="company-registration__input__title">
            Welk profiel past het best bij uw bedrijf?
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Mijn bedrijf is koploper (in haar sector) op het gebied van de ontwikkeling en introductie van nieuwe producten, diensten en processen."
              name="companyProfile"
              checked={
                companyProfile ===
                'Mijn bedrijf is koploper (in haar sector) op het gebied van de ontwikkeling en introductie van nieuwe producten, diensten en processen.'
              }
              onChange={handleChange}
            />
            Mijn bedrijf is koploper (in haar sector) op het gebied van de
            ontwikkeling en introductie van nieuwe producten, diensten en
            processen.
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Mijn bedrijf ontwikkelt zelf nieuwe producten en diensten en/of vernieuwt bedrijfsprocessen"
              name="companyProfile"
              checked={
                companyProfile ===
                'Mijn bedrijf ontwikkelt zelf nieuwe producten en diensten en/of vernieuwt bedrijfsprocessen'
              }
              onChange={handleChange}
            />
            Mijn bedrijf ontwikkelt zelf nieuwe producten en diensten en/of
            vernieuwt bedrijfsprocessen
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Mijn bedrijf vernieuwt producten, diensten en processen maar ontwikkelt deze niet zelf."
              name="companyProfile"
              checked={
                companyProfile ===
                'Mijn bedrijf vernieuwt producten, diensten en processen maar ontwikkelt deze niet zelf.'
              }
              onChange={handleChange}
            />
            Mijn bedrijf vernieuwt producten, diensten en processen maar
            ontwikkelt deze niet zelf.
          </label>


          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Geen van bovenstaande maar er vinden wel innovatie-activiteiten plaats in mijn bedrijf"
              name="companyProfile"
              checked={
                companyProfile ===
                'Geen van bovenstaande maar er vinden wel innovatie-activiteiten plaats in mijn bedrijf'
              }
              onChange={handleChange}
            />
            Geen van bovenstaande maar er vinden wel innovatie-activiteiten
            plaats in mijn bedrijf
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="In mijn bedrijf vinden geen innovatie-activiteiten plaats"
              name="companyProfile"
              checked={
                companyProfile ===
                'In mijn bedrijf vinden geen innovatie-activiteiten plaats'
              }
              onChange={handleChange}
            />
            In mijn bedrijf vinden geen innovatie-activiteiten plaats
          </label>
        </div>

        {/* last question */}
        <div className="readyness-transition-container">
          <div className="move-down">
            <label className="company-registration__input__title">
              In hoeverre zijn u en uw management klaar om de digitale transitie
              te leiden?
            </label>
            <h5 className="company-registration__input__title__two">
              1 = 0% klaar, 5 = 100% klaar
            </h5>

            <ul className="digital-transition-answers move-further-down">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="percentageReadynessDigitalTransformation"
                  checked={percentageReadynessDigitalTransformation === '1'}
                  onChange={handleChange}
                />
                <label>1</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="2"
                  name="percentageReadynessDigitalTransformation"
                  checked={percentageReadynessDigitalTransformation === '2'}
                  onChange={handleChange}
                />
                <label>2</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="3"
                  name="percentageReadynessDigitalTransformation"
                  checked={percentageReadynessDigitalTransformation === '3'}
                  onChange={handleChange}
                />
                <label>3</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="4"
                  name="percentageReadynessDigitalTransformation"
                  checked={percentageReadynessDigitalTransformation === '4'}
                  onChange={handleChange}
                />
                <label>4</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="5"
                  name="percentageReadynessDigitalTransformation"
                  checked={percentageReadynessDigitalTransformation === '5'}
                  onChange={handleChange}
                />
                <label>5</label>
              </li>
            </ul>
          </div>
        </div>
        <CustomButton type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default CompanyRegistration;
