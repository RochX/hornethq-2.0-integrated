const ProgressBar = (props) => {
  const { bgcolor, completed, title } = props;

  const containerStyles = {
    height: 20,
    width: "95%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div>
      <h3>{!title ? "Enter title" : title}</h3>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${
            completed === undefined ? "0" : completed
          }%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
