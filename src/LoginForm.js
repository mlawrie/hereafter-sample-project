import * as React from "react";

const styles = require('./LoginForm.scss');

export class LoginForm extends React.Component {
  render() {
    return <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <label className={styles.label}>
        Email address
        <input className={styles.input} type="text"/>
      </label>

      <label className={styles.label}>
        Password
        <input className={styles.input} type="password"/>
      </label>

      <input type="submit" value="Log in"/>
    </div>;
  }
}