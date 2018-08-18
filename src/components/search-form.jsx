import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div className="search-form">
        <input
          className="search-input"
          onChange={this.handleInputChange}
          value={this.state.searchText}
          type="text"
        />
        <button
          className="search-button"
          onClick={() => this.props.onSearch(this.state.searchText)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
