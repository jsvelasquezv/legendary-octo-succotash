import React from 'react';
import './filters.css';

const Filters = () => {
  return (
    <div className='filters-container'>
      <div className='filters-section'>
        <h3 className='filters-header'>Filter course results</h3>
      </div>
      <div className='filters-section'>
        <h4 className='filters-title'><span>Course type</span> <span className='caret'>&and;</span></h4>
        <div className='filters-radios'>
          <label className="radio"><input type="radio" name="course-type" className="hidden" />
            <span className="point"></span>Self paced
            </label>
          <label className="radio"><input type="radio" name="course-type" className="hidden" />
            <span className="point"></span>Live
            </label>
        </div>
      </div>
      <div className='filters-section'>
        <h4 className='filters-title'><span>Delivery type</span> <span className='caret'>&and;</span></h4>
        <div className='filters-radios'>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>Any delivery type
            </label>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>Computer based training
            </label>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>Correspondence
            </label>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>Mailed material
            </label>
        </div>
        <a href='#' className='view-more'>View more</a>
      </div>
      <div className='filters-section'>
        <h4 className='filters-title'><span>Subject area</span> <span className='caret'>&and;</span></h4>
        <div className='filters-radios'>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>Any subject area
            </label>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>HIV/AIDS
            </label>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>End of life care and palliative health care
            </label>
          <label className="radio"><input type="radio" name="delivery-type" className="hidden" />
            <span className="point"></span>Domestic violence
            </label>
        </div>

        <a href='#' className='view-more'>View more</a>
      </div>
    </div>
  );
}

export default Filters;