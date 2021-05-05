export const SquareLeft = () => (
  <div
    style={{
      position: "absolute",
      width: "150px",
      height: "150px",
      top: "10px",
      left: "-140px",
      transform: "rotateZ(45deg)",
      backgroundColor: "#5AE4A8",
      border: "none",
    }}
  />
);

export const SquareRight = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        right: "-140px",
        top: "200px",
        transform: "rotateZ(45deg)",
        backgroundColor: "#D5F7E6",
      }}
    ></div>
  );
};

export const SquareBottom = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        left: "-150px",
        bottom: "-150px",
        transform: "rotateZ(45deg)",
        backgroundColor: "#D5F7E6",
      }}
    ></div>
  );
};

export const SquareTop = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "250px",
        height: "250px",
        right: "-125px",
        top: "-125px",
        transform: "rotateZ(45deg)",
        backgroundColor: "#D5F7E6",
      }}
    ></div>
  );
};
