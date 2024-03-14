import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: "",
    };
  }
  onSearchChanged = (event) => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <SearchBox onChange={this.onSearchChanged} />
          <CardList robots={filteredRobots} />
        </header>
      </div>
    );
  }
}

export default App;
