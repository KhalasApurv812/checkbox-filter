import React, { useEffect, useState } from "react";
import Listdata from "./Listdata";

import ScrollTOTop from "./ScrollTOTop";

export default function Home() {
  const [time, setTime] = useState(20);

  const link = () => {
    return (
      <a href="https://stackoverflow.com/questions/62294102/countdown-timer-using-react-hooks">
        link is ready.
      </a>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      time - 1 < 0 ? link() : setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div>
      <div className="my-3">
        <center>
          {time === 0 ? (
            <p> Your {link()}</p>
          ) : (
            <p>Your link will be ready for {time} seconds.</p>
          )}
        </center>
      </div>
      <Listdata />
      <ScrollTOTop />
    </div>
  );
}
