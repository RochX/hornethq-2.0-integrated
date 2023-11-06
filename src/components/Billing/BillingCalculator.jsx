import React from "react";
import "./BillingCalculator.css";

const BillingCalculator = () => {
  const boxes = [
    { name: "Owed", amount: 1_000 },
    { name: "Owing", amount: 23 },
    { name: "Total", amount: 0 },
  ];
  function checkColor(name, amount) {
    let className = "";
    if (name === "Owed") {
      className = amount > 0 ? " green " : "";
    }
    if (name === "Owing") {
      className = amount > 0 ? " red " : "";
    }
    if (name === "Total") {
      className = amount >= 0 ? " green " : " red ";
    }
    return className;
  }

  function getAmount() {
    let owed;
    boxes.forEach((box) => {
      if (box.name === "Owed") owed = box.amount;
    });
    let owing;
    boxes.forEach((box) => {
      if (box.name === "Owing") owing = box.amount;
    });

    return owed - owing;
  }

  return (
    <div className="billing">
      {boxes.map((box) => (
        <div className="box">
          <h4 className="name">{box.name}</h4>
          <p
            className={
              " amount " +
              checkColor(
                box.name,
                box.name === "Total" ? getAmount() : box.amount
              )
            }
          >
            {box.name === "Total" ? getAmount() : box.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BillingCalculator;
