const lightTheme = {
  background: "#F8F8F9",
  transition: "0.5s"
};

const darkTheme = {
  background: "#161617",
  transition: "0.5s"
};

const theme = (mode) => (mode === false ? lightTheme : darkTheme);

export default theme;
