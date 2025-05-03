import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={styles.header}
      className="p-0 overflow-hidden justify-center items-center flex-nowrap w-min flex relative flex-col w-min h-min"
    >
      <button style={styles.button} className="h-min rounded-3xl">
        <p style={styles.btnText} className="rounded-3xl font-semibold">
          Our Process
        </p>
      </button>
      <div>
        <p className="text-5xl font-medium">
          Become a <span style={{ color: "#a35ca2" }}>Zuperior Pro</span> in
          sec...
        </p>
      </div>
      <p>🚀 Sign up. Fund. Trade.</p>
    </header>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  header: {
    gap: "15px",
    width: "100%",
    height: "20%",
  },
  button: {
    border: "1px solid rgba(255, 255, 255, 0.25)",
    cursor: "pointer",
  },
  btnText: {
    padding: "0.2rem 1.3rem",
    color: "transparent",
    backgroundImage: "linear-gradient(91deg, #c8bae8, #b195f0 98.2475%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
