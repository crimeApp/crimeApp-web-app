import React, { useState } from "react";
import traslate from "../../assets/traslate/es.json";
import FormWrapper from "./FormWrapper";

import TheftInfo from "./StepsCurrentCrime/TheftInfo";
import StolenItems from "./StepsCurrentCrime/StolenItems";
import PersonalDetails from "./StepsCurrentCrime/PersonalDetails";
import PersonalDetails2 from "./StepsCurrentCrime/PersonalDetails2";
import TheftDetails from "./StepsCurrentCrime/TheftDetails";
import Review from "./Review";
import Submit from "./Submit"; 

import "./Form.css";
import { isMobile } from "react-device-detect";

export default function CurrentCrime() {
  const formData = {
    type: "",
    time: "",
    date: "",
    place_description: "",
    accompaniment: "",
    stolen_cash: "",
    stolen_items: "",
    victim_height: "",
    victim_skin: "",
    victim_clothing: "",
    victim_pyshical: "",
    victim_name: "",
    victim_dni: "",
    victim_gender: "",
    victim_age: "",
    thief_profile: "",
    thief_age: "",
    thief_height: "",
    thief_skin: "",
    thief_clothing: "",
    thief_pyshical: ""
  };

  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    setStep(step + 1);
  };

  const handleBack = (e) => {
    setStep(step - 1);
  };

  const returnToStep = (step) => {
    setStep(step);
  };

  switch (step) {
    case 1:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
          loading={10}
        >
          <TheftInfo
            formData={formData}
            handleNext={handleNext}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 2:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE"]}
          subtitle={""}
          loading={20}
        >
          <StolenItems
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 3:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE"]}
          subtitle={""}
          loading={30}
        >
          <PersonalDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 4:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE"]}
          subtitle={""}
          loading={40}
        >
          <PersonalDetails2
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 5:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE"]}
          subtitle={""}
          loading={50}
        >
          <TheftDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 6:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE"]}
          subtitle={"Revise si los datos son correctos."}
          hideprogress={true}
        >
          <Review
            formData={formData}
            handleBack={handleBack}
            handleNext={handleNext}
            handleEdit={returnToStep}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 7:
      return (
        <FormWrapper
          title={traslate["CONFIRMATION-DIALOG"]["TITLE"]}
          subtitle={traslate["CONFIRMATION-DIALOG"]["TEXT"]}
          hideprogress={true}
        >
          <Submit formData={formData} />
        </FormWrapper>
      );
    default:
      break;
  }
}
