import React from 'react';
import config from '../../../config'
import replyIcon from '../../../common/images/reply.svg'
import timeIcon from '../../../common/images/time.svg'
import computerIcon from '../../../common/images/computer.svg'
import './featured-course.css'

const FeaturedCourse = (props) => {
  let course = props.item.coursePublication.course;
  return (
    <li key={props.item.id} className='featured-course-item'>
      <img className='featured-banner' src={ config.storageImages + course.featuredBanner } alt={ course.name } ></img>
      <div className='info'>
        <span className='course-title'>{ course.name }</span>
        <span className='featured-badget'>Featured</span>
        <span className='course-provider'>{ course.provider.name }</span>
        <div className='aditional-info'>
          <div className='course-time'>
            <object data={ timeIcon } >Time</object>
            <span>{ props.item.coursePublication.totalHours } Hours</span>
          </div>
          <div className='delivery-method'>
            <object data={ computerIcon } >Computer</object>
            <span>Computer Based Training</span>
          </div>
        </div>
      </div>
      <div className='course-actions'>
        { /* Because all featured courses are getting null on price, 10 is show for illustrative purposes */ }
        <span className='course-price'>${ course.price || '10.00' }</span>
        <button className='share-course'><object data={ replyIcon } className='reply-icon'>Share</object></button>
      </div>
    </li>
  );
}

export default FeaturedCourse;