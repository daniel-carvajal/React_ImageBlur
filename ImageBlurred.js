const wrapper = {
  width: "600px",
  // height: "600px",
  margin: "0auto",
  position: "relative",
};
const cover = {
  zIndex: 1,
  position: "relative",
};
const blurred = {
  filter: "blur(100px)",
  position: "absolute",
  opacity: 1,
  zIndex: 0,
};

export default function ImageBlurred(props) {
  const {
    src = "https://i.imgur.com/x01Vmo1.jpg",
    wrapperWidth = "600px",
    coverStyle,
    blurredStyle,
    // height = "16rem",
    // width = "16rem",
    opacity
  } = props;

  return (
    <div style={{ ...wrapper, width: wrapperWidth }}>
      <img
        src={src}
        alt=""
        // className="object-cover"
        style={{ ...blurredStyle, ...blurred, opacity }}
      />
      <img
        src={src}
        alt=""
        // class="object-cover"
        style={{ ...coverStyle, ...cover }}
      />
    </div>
  );
}
