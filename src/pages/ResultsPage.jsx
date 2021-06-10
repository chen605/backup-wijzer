import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import ScoresInterpretation from "../components/ScoresInterpretation";
import { CircleProgress } from "react-gradient-progress";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

export default function ResultsPage() {
  const [progress, setprogress] = useState([]);
  const domainName = process.env.REACT_APP_DOMAIN_NAME;
  const getProgressData = () =>
    axios
      .get(`${domainName}/userprogress`, {
        headers: {
          "Content-Type": "application/json",
          userFirebaseId: "5",
        },
      })
      .then((res) => {
        setprogress(res.data);
      });

  useEffect(() => {
    getProgressData();
  }, []);

  console.log(progress);
  const { data, crm, ai, company, digitalProducts, security } = progress;
  console.log(data);

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
      <div className="results-page">
        <div className="results-page__circle">
          <CircleProgress
            width={150}
            percentage={data ? 100 : 0}
            strokeWidth={8}
            primaryColor={["#040FD9", "#040FD9"]}
            secondaryColor="#f0f0f0"
          />

          <StyledButton
            variant="contained"
            onClick={() => history.push("/domain-one")}
          >
            Ga naar eerste domein
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <CircleProgress
            width={150}
            percentage={crm ? 100 : 0}
            strokeWidth={8}
            primaryColor={["#020873", "#020873"]}
            secondaryColor="#f0f0f0"
          />
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={() => history.push("/domain-two")}
          >
            Ga naar tweede domein
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <CircleProgress
            width={150}
            percentage={digitalProducts ? 100 : 0}
            strokeWidth={8}
            primaryColor={["#0554F2", "#0554F2"]}
            secondaryColor="#f0f0f0"
          />
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => history.push("/domain-three")}
          >
            Ga naar derde domein
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <CircleProgress
            width={150}
            percentage={security ? 100 : 0}
            strokeWidth={8}
            primaryColor={["#0597F2", "#0597F2"]}
            secondaryColor="#f0f0f0"
          />

          <StyledButton
            color="#ffd542"
            className="domain-button"
            variant="contained"
            onClick={() => history.push("/domain-four")}
          >
            Ga naar vierde domein
          </StyledButton>
        </div>

        <div className="results-page__circle">
          <CircleProgress
            width={150}
            percentage={ai ? 100 : 0}
            strokeWidth={8}
            primaryColor={["#05AFF2", "#05AFF2"]}
            secondaryColor="#f0f0f0"
          />
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => history.push("/domain-five")}
          >
            Ga naar vijfde domein
          </StyledButton>
        </div>
      </div>

      <div className="chart-container">
        <Chart />
      </div>
      <div className="interpretation-results-container">
        <ScoresInterpretation />
      </div>
    </div>
  );
}
