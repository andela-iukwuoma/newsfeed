import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const articleClass = location.pathname.match(/^\/news/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} data-target=".navbar-inverse-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="javascript:void(0)">HotNews</a>
          </div>
          <div class={"navbar-collapse navbar-inverse-collapse " + navClass}>
            <ul class="nav navbar-nav navbar-right">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={articleClass}>
                <Link to="news" onClick={this.toggleCollapse.bind(this)}>Article</Link>
              </li>
              <li class="dropdown">
                <a href="bootstrap-elements.html" data-target="#" class="dropdown-toggle" data-toggle="dropdown">User
                  <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)">Logout</a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form navbar-right">
              <div class="form-group">
                <input type="text" class="form-control col-md-8" placeholder="Search" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}