import React, { Component } from 'react';
import './search.css';
import searchIcon from '../../../common/images/search.svg'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      courseName: ''
    }
  }

  handleChange = (event) => {
    this.setState({ courseName: event.target.value })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.searchCourse(this.state.courseName);
    }
  }

  render() {
    return(
      <div className='search-section'>
        <div className='search-selectors'>
          <p>Find CE for a</p>
          <button>Florida <span className='caret'></span></button>
          <button>Medical Doctor  <span className='caret'></span></button>
        </div>
        <div className='search-box'>
          <object data={searchIcon} className='search-icon-input'>Search</object>
          <input type='text' placeholder='Search courses and providers' className='search-input' onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress} />
        </div>
        <div className='tabs'>
          <span className='tab active'>
            <a href='#'>COURSES</a>
          </span>
          <span className='tab'>
            <a href='#'>PROVIDERS</a>
          </span>
        </div>
      </div>
    )
  }

}

export default Search;