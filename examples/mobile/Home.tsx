import * as React from "react";
import { cpConfig } from "../until/pageList";
import { Button } from "@component/index";
import { Link } from "react-router-dom";

const Home: React.SFC = () => {
  return (
    <div>
      {cpConfig.component.map(key => (
        <div key={key}>
          <br />
          <Link to={`/mobile/${key}`}>
            <Button radius={false} ghost={true}>
              {key}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
