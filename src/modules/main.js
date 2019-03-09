import React, { Component } from 'react';
import Courses from '../common/services/courses'
import FeaturedCourse from '../common/components/featured-course/featured-course';
import Course from '../common/components/course/course';
import Search from '../common/components/search/search';
import Filters from '../common/components/filters/filters';
import Utils from '../common/utils/utils';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      featuredCourses: [],
      courses: [],
      pageIndex: 1,
      pageSize: 10,
      totalPages: 0,
      totalCourses: 0,
      courseName: ''
    };
  }

  componentDidMount() {
    this.loadFeatured();
    this.search();
  }

  loadFeatured = async () => {
    try {
      let response = await Courses.GetFeatured({ profession: 36 });
      this.setState({
        featuredCourses: response
      });
    } catch (error) {
      return
    }
  }

  search = async (courseName = this.state.courseName) => {
    try {
      let response = await Courses.Search({ 
        expand: 'totalItems',
        pageIndex: this.state.pageIndex,
        pageSize: this.state.pageSize,
        sortField: 'RELEVANCE',
        profession: 36,
        courseType: 'CD_ANYTIME',
        sortShufflingSeed: 27,
        courseName: courseName
      });
      this.setState({
        courses: response.items,
        totalCourses: response.totalItems,
        totalPages: Math.ceil(response.totalItems / this.state.pageSize),
        courseName: courseName
      });
    } catch (error) {
      return
    }
  }

  changePage(pageIndex) {
    this.setState({ pageIndex });
    this.search(this.state.courseName);
  }

  renderPagination = () => {
    let pageRange = Utils.generatePageRange(this.state.pageIndex, this.state.totalPages);
    return (
      <div className='pagination'>
 
        { this.state.pageIndex != 1 && <button onClick={() => this.changePage(this.state.pageIndex - 1)} > &lt; </button> }
        {
          pageRange.map((item) => {
            return <button key={item} onClick={() => this.changePage(item)}> {item} </button>;
          })
        }
        {this.state.pageIndex != this.state.totalPages && <button onClick={() => this.changePage(this.state.pageIndex + 1)} > &gt; </button>}
      </div>
    )
  }

  renderCourses = () => {
    return (
      <ul className='course-list' >
        {
          this.state.featuredCourses.map((item) => {
            return <FeaturedCourse item={ item } key={ item.id }></FeaturedCourse>
          })
        }
        {
          this.state.courses.map((item) => {
            return <Course item={ item } key={item.id}></Course>
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div style={{ paddingTop: '80px' }}>
        <div className='page'>
          <div className='navbar'>
            <div className='container'>
              <div className='navbar-logo'>
                <img src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_256/react.png' alt='react'></img>
              </div>
              <ul className='navbar-menu'>
                <li className='navbar-menu-item'><a href='#'>Fatures</a></li>
                <li className='navbar-menu-item'><a href='#'>Plans</a></li>
                <li className='navbar-menu-item'><a href='#'>Organizations</a></li>
                <li className='navbar-menu-item active'><a href='#'>Browse courses</a></li>
                <li className='navbar-menu-item'><a href='#'>Support</a></li>
              </ul>
              <div className='navbar-menu-buttons'>
                <button>Sign in</button>
                <button className='success'>7 day trial</button>
              </div>
            </div>
          </div>
          <div className='content'>
            <Search searchCourse={this.search} ></Search>
            <div className='content-container'>
              <Filters></Filters>
              <div className='course-list-container'>
                <div className="results-header">
                  <div className='page-info'>
                    <p>Page { this.state.pageIndex } of { this.state.totalCourses } results</p>
                  </div>
                  <div className='sorted-by'>
                    Sorted by:
                    <button className='sorted-by-select'>Relevance</button>
                  </div>
                </div>
                { this.renderCourses() }
                { this.renderPagination() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;