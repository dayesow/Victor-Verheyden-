// eslint-disable-next-line react/prop-types
const XIcon = ({ size = 20, color = "black", lineWidth = 2 }) => (
  <div
    style={{
      position: "relative",
      width: `${size}px`,
      height: `${size}px`,
    }}
  >
    <span
      style={{
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        width: `${lineWidth}px`,
        height: "100%",
        backgroundColor: color,
        transformOrigin: "center",
        transform: "rotate(45deg)",
      }}
    ></span>
    <span
      style={{
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        width: `${lineWidth}px`,
        height: "100%",
        backgroundColor: color,
        transformOrigin: "center",
        transform: "rotate(-45deg)",
      }}
    ></span>
  </div>
);

export default XIcon;
