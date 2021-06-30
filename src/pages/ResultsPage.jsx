import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import { CircleProgress } from "react-gradient-progress";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import ScoresInterpretation from "../components/ScoresInterpretation";
import dashboard from "../img/dashboard-icon.png";

export default function ResultsPage() {
  const { uid } = useSelector(selectUser);

  const [progress, setprogress] = useState([]);
  const domainName = process.env.REACT_APP_DOMAIN_NAME;
  const getProgressData = () =>
    axios
      .get(`${domainName}/userprogress`, {
        headers: {
          "Content-Type": "application/json",
          userFirebaseId: uid,
        },
      })
      .then((res) => {
        setprogress(res.data);
      });

  useEffect(() => {
    getProgressData();
  }, []);

  const { data, crm, ai, company, digitalProducts, security } = progress;

  const StyledButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #ffd542 30%, #fff992 90%)",
      borderRadius: 3,
      border: 0,
      color: "black",
      height: "30px",
      padding: "0 30px",
      boxShadow: "0 1px 1px 1px rgba(59, 79, 228, .1)",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  const history = useHistory();
  return (
    <div className="results-container">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="results-page">
        <div className="results-page__circle">
          <StyledButton
            variant="contained"
            onClick={() => history.push("/data")}
          >
            {data
              ? "Vul uw antwoorden van Data, Dashboards & Business opnieuw in"
              : "Start met Data, Dashboards & Business Intelligence"}
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <StyledButton variant="contained">
            {data ? (
              <view>
                '• Data, Dashboards & Business Intelligence - Je hebt kosteloos
                toegang tot een verdiepende online leeromgeving over
                digitalisering (twv 75 euro). ('
                <a href="https://airtable.com/shrVIUH2XcnsQPFQe">Klik Hier</a>
              </view>
            ) : (
              "• Beloning	Data, Dashboards & Business Intelligence - Je hebt kosteloos toegang tot een verdiepende online leeromgeving over digitalisering (twv 75 euro). "
            )}
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={() => history.push("/crm")}
          >
            {crm
              ? "Vul uw antwoorden van CRM en Klantreis opnieuw in"
              : "Start met CRM en Klantreis"}
          </StyledButton>
        </div>
        <div className="results-page__circle">
          <StyledButton variant="contained">
            {crm
              ? "	•	CRM & Klantreis - Ontdek wat je kunt doen en ga aan de slag met onderzoekers, experts en studenten van kennisinstellingen onder begeleiding van MKB Digital Workspace (mail to: mike@mkbdigitalworkspace.nl). "
              : "• Beloning	CRM & Klantreis - Ontdek wat je kunt doen en ga aan de slag met onderzoekers, experts en studenten van kennisinstellingen onder begeleiding van MKB Digital Workspace"}
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => history.push("/digitalproducts")}
          >
            {digitalProducts
              ? "Vul uw antwoorden van Digitale producten, Services & Marketing opnieuw in"
              : "Start met Digitale producten, Services & Marketing"}
          </StyledButton>
        </div>
        <div className="results-page__circle">
          <StyledButton variant="contained">
            {digitalProducts ? (
              <view>
                ' • Digitale producten, services & marketing - Zoek je tech
                talent? Neem contact op met Techgrounds.{" "}
                <a href="https://techgrounds.nl/partnerform">Klik Hier</a>'
              </view>
            ) : (
              "•	Beloning Digitale producten, Services & Marketing - Zoek je tech talent?"
            )}
          </StyledButton>
        </div>
        <div className="results-page__circle">
          <StyledButton
            color="#ffd542"
            className="domain-button"
            variant="contained"
            onClick={() => history.push("/security")}
          >
            {security
              ? "Vul uw antwoorden van Infrastructuur, Office, Cloud en Veiligheid opnieuw in"
              : "Start met Infrastructuur, Office, Cloud en Veiligheid"}
          </StyledButton>
        </div>
        <div className="results-page__circle">
          <StyledButton variant="contained">
            {security ? (
              <view>
                '• Beloning Infrastructuur, Office, Cloud en Veiligheid - AWS:
                500 euro korting op testproject: cloud migratie, kosten analyse
                en veiligheidscheck{" "}
                <a href="https://techgrounds.nl/partnerform">Klik Hier</a>'
              </view>
            ) : (
              "•	Beloning Infrastructuur, Office, Cloud en Veiligheid: ??? euro korting op testproject: cloud migratie, kosten analyse en veiligheidscheck"
            )}
          </StyledButton>
        </div>
        <div className="results-page__circle">
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => history.push("/ai")}
          >
            {ai
              ? "Vul uw antwoorden van Artificial Intelligence & andere opkomende technologie opnieuw in"
              : "Start met Artificial Intelligence & andere opkomende technologie"}
          </StyledButton>
        </div>
        <div className="results-page__circle2">
          <StyledButton variant="contained">
            {ai ? (
              <view>
                '• Beloning • AI & andere opkomende technologieën -Je hebt
                kosteloos toegang tot een verdiepende online leeromgeving over
                digitalisering (twv 75 euro).
                <a href="https://airtable.com/shrVIUH2XcnsQPFQe">Klik Hier</a>'
              </view>
            ) : (
              "•	Beloning •	AI & andere opkomende technologieën -Je hebt kosteloos toegang tot een verdiepende online leeromgeving over digitalisering (twv 75 euro)."
            )}
          </StyledButton>
        </div>
      </div>

      <div className="chart-container">
        <Chart />
        <ScoresInterpretation />
      </div>
      {/* <div className="image-dashboard-container">
        <img src={dashboard} alt="" />
      </div> */}
    </div>
  );
}
