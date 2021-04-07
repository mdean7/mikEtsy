import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    let emailField = (
      <label>        
        <br />
        Email<br/>
        <input
          type="text"
          value={this.state.email}
          onChange={this.update("email")}
          className="signup-input"
          placeholder="Email"
          required
        />
      </label>

    );
    if (this.props.formType === "sign in") {
      emailField = null;
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType} or {this.props.otherForm}
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username<br/>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username"
                required
              />
            </label>
            {emailField}
            <br />
            <label>
              Password<br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="Password"
                required
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
