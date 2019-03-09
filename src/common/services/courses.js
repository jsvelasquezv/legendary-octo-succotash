import config from '../../config';

class Courses {

  static GetFeatured(params) {
    let url = new URL(config.apiUrl + config.endpoints.featuredCourses);
    url.search = new URLSearchParams(params);
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        return res;
      }
    );
  }

  static Search(params) {
    let url = new URL(config.apiUrl + config.endpoints.searchCourses);
    url.search = new URLSearchParams(params);
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        return res;
      }
      );
  }

}

export default Courses;