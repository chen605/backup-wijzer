import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from './custom-component/CustomButton';
import Banner from './Banner/Banner';

const CompanyRegistration = () => {
  const [companyCredentials, setCompanyCredentials] = useState({
    companyName: '',
    kvkNumber: '',
    address: '',
    zipCode: '',
    city: '',
    sector: '',
    foundingYear: '',
    numberOfEmployees: '',
    yearlyRevenue: '',
    originOfRevenue: '',
    originOfCustomers: '',
    companyProfile: '',
    readynessDigitalTransition: '',
  });

  const {
    companyName,
    kvkNumber,
    address,
    zipCode,
    city,
    sector,
    foundingYear,
    numberOfEmployees,
    yearlyRevenue,
    originOfRevenue,
    originOfCustomers,
    companyProfile,
    readynessDigitalTransition,
  } = companyCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyCredentials({ ...companyCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const company = JSON.stringify(companyCredentials);
    try {
      await axios.post('http://localhost:8080/companies/signup', company, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Registratie succesvol!');
      setCompanyCredentials({
        companyName: '',
        kvkNumber: '',
        address: '',
        zipCode: '',
        city: '',
        sector: '',
        foundingYear: '',
        numberOfEmployees: '',
        yearlyRevenue: '',
        originOfRevenue: '',
        originOfCustomers: '',
        companyProfile: '',
        readynessDigitalTransition: '',
      });
    } catch (e) {
      alert.error('Iets ging verkeerd. ' + e.response.data);
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
            name="companyName"
            value={companyName}
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
            name="zipCode"
            value={zipCode}
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
              name="sector"
              type="radio"
              value="Landbouw, bosbouw en visserij"
              checked={sector === 'Landbouw, bosbouw en visserij'}
              onChange={handleChange}
            />
            &nbsp;Landbouw, bosbouw en visserij
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Winning of productie delfstoffen, water, elektriciteit of aardgas"
              checked={
                sector ===
                'Winning of productie delfstoffen, water, elektriciteit of aardgas'
              }
              onChange={handleChange}
            />
            &nbsp;Winning of productie delfstoffen, water, elektriciteit of
            aardgas
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Industrie (productiebedrijf)"
              checked={sector === 'Industrie (productiebedrijf)'}
              onChange={handleChange}
            />
            &nbsp;Industrie (productiebedrijf)
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Bouw"
              checked={sector === 'Bouw'}
              onChange={handleChange}
            />
            &nbsp;Bouw
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Detailhandel, groothandel en reparatie van auto's"
              checked={
                sector === 'Detailhandel, groothandel en reparatie van auto'
              }
              onChange={handleChange}
            />
            &nbsp;Detailhandel, groothandel en reparatie van auto's
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Vervoer en opslag"
              checked={sector === 'Vervoer en opslag'}
              onChange={handleChange}
            />
            &nbsp;Vervoer en opslag
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Horeca"
              checked={sector === 'Horeca'}
              onChange={handleChange}
            />
            &nbsp;Horeca
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Informatie en communicatie"
              checked={sector === 'Informatie en communicatie'}
              onChange={handleChange}
            />
            &nbsp;Informatie en communicatie
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)"
              checked={
                sector ===
                'Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)'
              }
              onChange={handleChange}
            />
            &nbsp;Zakelijke dienstverlening (inclusief verhuur/handel onroerend
            goed)
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Overheid, Onderwijs, Zorg"
              checked={sector === 'Overheid, Onderwijs, Zorg'}
              onChange={handleChange}
            />
            &nbsp;Overheid, Onderwijs, Zorg
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Cultuur, sport en recreatie"
              checked={sector === 'Cultuur, sport en recreatie'}
              onChange={handleChange}
            />
            &nbsp;Cultuur, sport en recreatie
          </label>

          <label className="company-registration__input__checkbox">
            <input
              name="sector"
              type="radio"
              value="Overige dienstverlening"
              checked={sector === 'Overige dienstverlening'}
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
            name="numberOfEmployees"
            value={numberOfEmployees}
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
            name="yearlyRevenue"
            value={yearlyRevenue}
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
                  name="originOfRevenue"
                  checked={originOfRevenue === '1'}
                  onChange={handleChange}
                />
                <label>1</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="originOfRevenue"
                  checked={originOfRevenue === '2'}
                  onChange={handleChange}
                />
                <label>2</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="originOfRevenue"
                  checked={originOfRevenue === '3'}
                  onChange={handleChange}
                />
                <label>3</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="originOfRevenue"
                  checked={originOfRevenue === '4'}
                  onChange={handleChange}
                />
                <label>4</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="originOfRevenue"
                  checked={originOfRevenue === '5'}
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
              name="originOfCustomers"
              checked={originOfCustomers === 'Eigen regio'}
              onChange={handleChange}
            />
            &nbsp;Eigen regio
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Heel Nederland"
              name="originOfCustomers"
              checked={originOfCustomers === 'Heel Nederland'}
              onChange={handleChange}
            />
            &nbsp;Heel Nederland
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Europa"
              name="originOfCustomers"
              checked={originOfCustomers === 'Europa'}
              onChange={handleChange}
            />
            &nbsp;Europa
          </label>

          <label className="company-registration__input__checkbox">
            <input
              type="radio"
              value="Wereldwijd"
              name="originOfCustomers"
              checked={originOfCustomers === 'Wereldwijd'}
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
                  name="readynessDigitalTransition"
                  checked={readynessDigitalTransition === '1'}
                  onChange={handleChange}
                />
                <label>1</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="2"
                  name="readynessDigitalTransition"
                  checked={readynessDigitalTransition === '2'}
                  onChange={handleChange}
                />
                <label>2</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="3"
                  name="readynessDigitalTransition"
                  checked={readynessDigitalTransition === '3'}
                  onChange={handleChange}
                />
                <label>3</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="4"
                  name="readynessDigitalTransition"
                  checked={readynessDigitalTransition === '4'}
                  onChange={handleChange}
                />
                <label>4</label>
              </li>

              <li>
                <input
                  type="radio"
                  value="5"
                  name="readynessDigitalTransition"
                  checked={readynessDigitalTransition === '5'}
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
