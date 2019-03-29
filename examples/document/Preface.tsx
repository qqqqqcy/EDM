import React from "react";
import { Button } from "@component/index";
import Logo from "./component/Logo";
import { Link } from "react-router-dom";

const Preface = () => {
  return (
    <div className="preface">
      <header>
        <Logo />
        <p>基于 React 的移动端组件库</p>
        <Link to="/document/button">
          <Button className="preface-btn" _size="large" _inline={true}>
            document
          </Button>
        </Link>
        <Link to="/instance">
          <Button
            _ghost={true}
            className="preface-btn"
            _size="large"
            _inline={true}
          >
            instance
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default Preface;
