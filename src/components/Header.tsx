import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={styles.header}
      className="p-0 overflow-hidden justify-center items-center flex-nowrap w-min flex relative flex-col w-min h-min"
    >
      <button style={styles.button} className="h-min rounded-3xl">Our Process</button>
    </header>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  header: {
    gap: "15px",
    width: "100%",
    height: "20%"
  },
  button: {
    padding: "0 1rem",
    color:'#b195f0',
    border: "1px solid rgba(255, 255, 255, 0.25)",
  },
  nav: {
    marginTop: "0.5rem",
  },
  link: {
    margin: "0 1rem",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header;
