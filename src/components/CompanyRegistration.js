import React, { useState } from 'react';
import axios from 'axios';

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
    readynessDigitalTransition: ''

  });

  const { companyName, kvkNumber, address, zipCode, city, sector, foundingYear, numberOfEmployees, yearlyRevenue, 
    originOfRevenue, originOfCustomers, companyProfile, readynessDigitalTransition } = companyCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyCredentials({ ...companyCredentials, [name]: value });
    console.log(name, value);
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
      alert.success('Registratie succesvol!');
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Bedrijfsnaam</label>
        <div>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>Kvk-nummer</label>
        <div>
          <input
            type="text"
            name="kvkNumber"
            value={kvkNumber}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>Adres</label>
        <div>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>Postcode</label>
        <div>
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>Plaats</label>
        <div>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>In welke bedrijfssector is uw bedrijf voornamelijk actief?</label>
        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Landbouw, bosbouw en visserij"
              checked={sector === 'Landbouw, bosbouw en visserij'}
              onChange={handleChange}
            />
            Landbouw, bosbouw en visserij
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Winning of productie delfstoffen, water, elektriciteit of aardgas"
              checked={sector === 'Winning of productie delfstoffen, water, elektriciteit of aardgas'}
              onChange={handleChange}
            />
            Winning of productie delfstoffen, water, elektriciteit of aardgas
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Industrie (productiebedrijf)"
              checked={sector === 'Industrie (productiebedrijf)'}
              onChange={handleChange}
            />
            Industrie (productiebedrijf)
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Bouw"
              checked={sector === 'Bouw'}
              onChange={handleChange}
            />
            Bouw
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Detailhandel, groothandel en reparatie van auto's"
              checked={sector === 'Detailhandel, groothandel en reparatie van auto'}
              onChange={handleChange}
            />
            Detailhandel, groothandel en reparatie van auto's
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Vervoer en opslag"
              checked={sector === 'Vervoer en opslag'}
              onChange={handleChange}
            />
            Vervoer en opslag
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Horeca"
              checked={sector === 'Horeca'}
              onChange={handleChange}
            />
            Horeca
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Informatie en communicatie"
              checked={sector === 'Informatie en communicatie'}
              onChange={handleChange}
            />
            Informatie en communicatie
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)"
              checked={sector === 'Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)'}
              onChange={handleChange}
            />
            Zakelijke dienstverlening (inclusief verhuur/handel onroerend goed)
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Overheid, Onderwijs, Zorg"
              checked={sector === 'Overheid, Onderwijs, Zorg'}
              onChange={handleChange}
            />
            Overheid, Onderwijs, Zorg
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Cultuur, sport en recreatie"
              checked={sector === 'Cultuur, sport en recreatie'}
              onChange={handleChange}
            />
            Cultuur, sport en recreatie
          </label>
        </div>

        <div>
          <label>
            <input
              name="sector"
              type="radio"
              value="Overige dienstverlening"
              checked={sector === 'Overige dienstverlening'}
              onChange={handleChange}
            />
            Overige dienstverlening
          </label>
        </div>


        <label>Oprichtingsjaar</label>
        <div>
          <input
            type="text"
            name="foundingYear"
            value={foundingYear}
            placeholder="Your answer"
            onChange={handleChange}
          />
        </div>

        <label>Aantal medewerkers (in fte)</label>
        <div>
          <input
            type="text"
            name="numberOfEmployees"
            value={numberOfEmployees}
            placeholder="Your answer"
            onChange={handleChange}
          />
        </div>

        <label>Jaarlijkse omzet (gemiddelde afgelopen 3 jaar)</label>
        <div>
          <input
            type="text"
            name="yearlyRevenue"
            value={yearlyRevenue}
            placeholder="Your answer"
            onChange={handleChange}
          />
        </div>

        <label>Hoeveel procent van uw omzet komt van wie?</label>
        <section>1 = 100% B2C, 5 = 100% B2B</section>
        <div className="score">1 2 3 4 5</div>

        <div className="flex-container">
            <h4>Consumenten</h4>
            <div>   
                <input type="radio" value="1" name="originOfRevenue" checked={originOfRevenue === '1'}  onChange={handleChange}/>
                <input type="radio" value="2" name="originOfRevenue" checked={originOfRevenue === '2'}  onChange={handleChange}/>
                <input type="radio" value="3" name="originOfRevenue" checked={originOfRevenue === '3'}  onChange={handleChange}/>
                <input type="radio" value="4" name="originOfRevenue" checked={originOfRevenue === '4'}  onChange={handleChange}/>
                <input type="radio" value="5" name="originOfRevenue" checked={originOfRevenue === '5'}  onChange={handleChange}/>
            </div>
            <h4>Bedrijven, inclusief overheid of ander en non-profit</h4>
        </div>

        {/* // this is not correct */}
        <label>Waar komen de meeste van uw klanten vandaan?</label>
        <div>
            <div>   
                <input type="radio" value="Eigen regio" name="originOfCustomers" checked={originOfCustomers === 'Eigen regio'}  onChange={handleChange}/>Eigen regio 
            </div>
            <div>
                <input type="radio" value="Heel Nederland" name="originOfCustomers" checked={originOfCustomers === 'Heel Nederland'} onChange={handleChange}/>Heel Nederland
            </div>
            <div>
                <input type="radio" value="Europa" name="originOfCustomers" checked={originOfCustomers === 'Europa'}  onChange={handleChange}/>Europa
            </div>
            <div>
                <input type="radio" value="Wereldwijd" name="originOfCustomers" checked={originOfCustomers === 'Wereldwijd'}  onChange={handleChange}/>Wereldwijd
            </div>
        </div> 

        <label>Welk profiel past het best bij uw bedrijf?</label>
        <div>
            <div>
                <input type="radio" 
                       value="Mijn bedrijf is koploper (in haar sector) op het gebied van de ontwikkeling en introductie van nieuwe producten, 
                            diensten en processen." 
                       name="companyProfile" 
                       checked={companyProfile === 'Mijn bedrijf is koploper (in haar sector) op het gebied van de ontwikkeling en introductie van nieuwe producten, diensten en processen.'} 
                       onChange={handleChange}
                       />
                      
                        Mijn bedrijf is koploper (in haar sector) op het gebied van de ontwikkeling en introductie van nieuwe producten, 
                            diensten en processen.
            </div>

            <div>
                <input type="radio" 
                       value="Mijn bedrijf ontwikkelt zelf nieuwe producten en diensten en/of vernieuwt bedrijfsprocessen" 
                       name="companyProfile" 
                       checked={companyProfile === 'Mijn bedrijf ontwikkelt zelf nieuwe producten en diensten en/of vernieuwt bedrijfsprocessen'}
                       onChange={handleChange}
                       /> 
                       Mijn bedrijf ontwikkelt zelf nieuwe producten en diensten en/of vernieuwt bedrijfsprocessen
            </div>

            <div>
                <input type="radio" 
                       value="Mijn bedrijf vernieuwt producten, diensten en processen maar ontwikkelt deze niet zelf." 
                       name="companyProfile" 
                       checked={companyProfile === 'Mijn bedrijf vernieuwt producten, diensten en processen maar ontwikkelt deze niet zelf.'}
                       onChange={handleChange}
                       /> 
                       Mijn bedrijf vernieuwt producten, diensten en processen maar ontwikkelt deze niet zelf.
            </div>

            <div>
                <input type="radio" 
                       value="Geen van bovenstaande maar er vinden wel innovatie-activiteiten plaats in mijn bedrijf" 
                       name="companyProfile" 
                       checked={companyProfile === 'Geen van bovenstaande maar er vinden wel innovatie-activiteiten plaats in mijn bedrijf'}
                       onChange={handleChange}
                       /> 
                       Geen van bovenstaande maar er vinden wel innovatie-activiteiten plaats in mijn bedrijf
            </div>

            <div>
                <input type="radio" 
                       value="In mijn bedrijf vinden geen innovatie-activiteiten plaats" 
                       name="companyProfile" 
                       checked={companyProfile === 'In mijn bedrijf vinden geen innovatie-activiteiten plaats'}
                       onChange={handleChange}
                       />
                       In mijn bedrijf vinden geen innovatie-activiteiten plaats
            </div>


        </div>

        <label>In hoeverre zijn u en uw management klaar om de digitale transitie te leiden?</label>
        
        <div className="score">1 2 3 4 5</div>

        <div className="flex-container">
            <h4>Zeer onvoldoende</h4>
            <div>
                <input type="radio" value="1" name="readynessDigitalTransition" checked={readynessDigitalTransition === '1'} onChange={handleChange}/>
                <input type="radio" value="2" name="readynessDigitalTransition" checked={readynessDigitalTransition === '2'} onChange={handleChange}/>
                <input type="radio" value="3" name="readynessDigitalTransition" checked={readynessDigitalTransition === '3'} onChange={handleChange}/>
                <input type="radio" value="4" name="readynessDigitalTransition" checked={readynessDigitalTransition === '4'} onChange={handleChange}/>
                <input type="radio" value="5" name="readynessDigitalTransition" checked={readynessDigitalTransition === '5'} onChange={handleChange}/>
            </div>
            <h4>Uitstekend</h4>
        </div>
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompanyRegistration;



            








            
            
            
           
            


