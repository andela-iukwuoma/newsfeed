import React from 'react';
import Source from './Source';


/**
 * The search form
 * @class SearchSources
 * @extends {React.Component}
 */
export default class SearchSources extends React.Component {


  /**
   * Creates an instance of SearchSources.
   * Initialize the value of the search form
   * @memberOf SearchSources
   */
  constructor() {
    super();
    this.updateSearch = this.updateSearch.bind(this);
    this.state = { search: '' };
  }


  /**
   * Updates the value of the search form
   * @param {any} event where user types of the search
   * @memberOf SearchSources
   */
  updateSearch(event) {
    if (!/[^A-Za-z]/.test(event.target.value)) {
      this.setState({ search: event.target.value.substr(0, 10) });
    }
  }


  /**
   * Extracts a list of sources that match users search charaters
   * @returns the search form with a list of sources that matches the value
   * @memberOf SearchSources
   */
  render() {
    const filteredList = this.props.sources.filter(source =>
    source.name.toLowerCase()
    .indexOf(this.state.search.toLowerCase()) !== -1).map(source =>
    <Source key={source.id} source={source}
    headlines={this.props.headlines} />);

    return (
      <div class="nav-form-div">
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" value={this.state.search}
            onChange={this.updateSearch} placeholder="Search sources..." />
          </div>
        </form>
        <div class="searched-sources">
          <ul>
            { this.state.search.length > 0 ? filteredList.slice(0, 5) : [] }
          </ul>
        </div>
      </div>
    );
  }
}
