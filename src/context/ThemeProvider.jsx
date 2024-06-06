import { useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
