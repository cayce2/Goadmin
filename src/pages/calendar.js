import React, { useState } from "react";
import Calendar from "react-awesome-calendar";
import moment from "moment";
import "../App.css";

const events = [
  {
    id: 1,
    color: "#D92550",
    from: "2021-11-12T18:00:00+00:00",
    to: "2021-11-17T19:00:00+00:00",
    title: "This is an event",
  },
  {
    id: 2,
    color: "green",
    from: "2019-05-01T13:00:00+00:00",
    to: "2019-05-05T14:00:00+00:00",
    title: "This is another event",
  },
  {
    id: 3,
    color: "#3694DF",
    from: "2019-05-05T13:00:00+00:00",
    to: "2019-05-05T20:00:00+00:00",
    title: "This is also another event",
  },
];

const Header = ({ current, onClickPrev, onClickNext }) => {
  const mo = moment().month(current.month).format("MMMM");
  const l = "<";
  const r = ">";
  return (
    <div className="header">
      <p>
        <span onClick={onClickPrev}>{l}</span>
        {mo}
        <span>{current.year}</span>
        <span onClick={onClickNext}>{r}</span>
      </p>
    </div>
  );
};

const App = () => {
  const [current, setCurrent] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const handleClickPrev = () => {
    let { month, year } = current;
    if (month === 0) {
      month = 11;
      year -= 1;
    } else {
      month -= 1;
    }
    setCurrent({ month, year });
  };

  const handleClickNext = () => {
    let { month, year } = current;
    if (month === 11) {
      month = 0;
      year += 1;
    } else {
      month += 1;
    }
    setCurrent({ month, year });
  };

  return (
    <div>
      <Header
        current={current}
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
      />
      <Calendar events={events} />
    </div>
  );
};

export default App;
