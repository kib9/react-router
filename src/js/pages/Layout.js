import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

class Layout extends React.Component {
  navigate = () => {
    console.log(this.props.history);
    this.props.history.push("/"); //SPAのリンクの遷移が全て履歴に残る 戻るで一つずつ戻る形になる
    // this.props.history.replace('/'); //ブラウザの履歴に残らない
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/archives/some-other-articles?date=yesterday&filter=none" class="btn btn-warning">archives (some other articles)</Link>
        <Link to="/archives?date=today&filter=hot" class="btn btn-danger">archives</Link>
        <NavLink to="/settings/main" class="btn btn-success" activeClassName="btn btn-danger">settings</NavLink>
        <Link to="/settings/extra" class="btn btn-success">settings (extra)</Link>
        <button class="btn btn-info" onClick={this.navigate}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);
