import "./App.css";
import { Children, Component, Fragment } from "react";
import PropTypes from "prop-types";

const Card = ({ title, message, tag, user }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__info">
        <div className="avatar">{user}</div>
        <div>{tag}</div>
      </div>
    </div>
  );
};

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, cards, title } = this.props;
    const classNames = [type, "colum-wrapper"];
    return (
      <div className={classNames.join(" ")}>
        <h2 className="colum-wrapper__title">{title}</h2>
        {cards.map((card, index) => (
          <Card
            title={card.title}
            message={card.message}
            tag={card.tag}
            user={card.user}
            key={card.title}
          />
        ))}
      </div>
    );
  }
}

PropTypes.shape({
  title: PropTypes.string,
  message: PropTypes.string,
  tag: PropTypes.string,
  user: PropTypes.string,
});

Wrapper.propTypes = {
  type: PropTypes.oneOf(["to-do", "in-progress", "reviev", "done"]).isRequired,
  cards: PropTypes.array,
};

function App() {
  const cards = [
    {
      title: "Write code",
      message: "",
      tag: "go",
      user: "A",
    },
    {
      title: "Write code",
      message: "",
      tag: "go",
      user: "A",
    },
    {
      title: "Write code",
      message: "",
      tag: "go",
      user: "A",
    },
  ];
  return (
    <div className="app">
      <h1 className="title">Trello</h1>
      <div className="desck">
        <Wrapper title={"To-do"} type="to-do" cards={cards} />
        <Wrapper title={"In-Progress"} type="in-progress" cards={cards} />
        <Wrapper title={"Reviev"} type="reviev" cards={cards} />
        <Wrapper title={"Done"} type="done" cards={cards} />
      </div>
    </div>
  );
}

export default App;
