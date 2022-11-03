import { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
        avatar : "" 
    }
  }

  componentWillMount() {
    console.log("Will Mount", this.state.avatar);
  }

  componentDidMount() {
    console.log("Did mount", this.state.avatar);
    this.setState({
        avatar : `https://avatars.dicebear.com/api/human/${this.props.name}.svg`
    })
  }

  shouldComponentUpdate() {
    return true // burasi "false" olursa update etmez. foto olmaz isim degismez.
  }



  componentDidUpdate(prevProps, prevState) {
    console.log("aktuelle props", this.props.name);
    console.log("vorherige props", prevProps.name);

    console.log("aktueller state", this.state.avatar);
    console.log("vorheriger state", prevState.name);
    setTimeout(() => {
        console.log("Did Update - Call Database on Change", this.state.avatar);
    }, 2000)
  }

  componentWillUnmount() {
    console.log("wird unmounted");
  }

  render() {
    console.log("Render");
    const { loggedIn, name } = this.props;
    return (
      <div>
        <img src={this.state.avatar} width="200"></img>
        <div>Username: Nilanka</div>
        <div>Location: Düsseldorf</div>
        <div>Name: {name}</div>
        <div>Logged in: {loggedIn ? "logged in" : "not logged in"}</div>
      </div>
    );
  }
}
