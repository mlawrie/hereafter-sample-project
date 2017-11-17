import * as React from "react";

const styles = require('./LoginForm.scss');

export class LoginForm extends React.Component {
  render() {
    return <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
    </div>;
  }
}