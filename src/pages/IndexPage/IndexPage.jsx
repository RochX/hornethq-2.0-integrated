import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import BillingCalculator from "../../components/Billing/BillingCalculator";
import Calendar from "../../components/Calendar/Calendar";
import "./IndexPage.css";

const IndexPage = () => {
  return (
    <div className="index-page-body">
      <div className="carousel-prog-bill">
        <div className="carousel-container section-bg">
          <Carousel />
        </div>
        <div className="bill-prog">
          <div className="progress section-bg section-padding">
            <h2>Progress</h2>
            <ProgressBar bgcolor="#8957E5" completed={20} title="Major" />
            <ProgressBar bgcolor="#F6781D" completed={90} title="Minor" />
          </div>
          <div className="section-bg section-padding">
            <h2>Billing</h2>
            <BillingCalculator />
          </div>
        </div>
      </div>
      <Calendar />
    </div>
  );
};

export default IndexPage;
