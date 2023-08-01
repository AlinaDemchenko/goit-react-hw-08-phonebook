import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';
import { useState } from 'react';

function Filter({ onFilter, filter }) {
  const [visibleClass, setVisibleClass] = useState('');

  const handleClick = () => {
    visibleClass ? setVisibleClass('') : setVisibleClass('visible');
  };

  const handleInputChange = event => {
    onFilter(event.target.value);
  };
  return (
    <StyledFilter>
      <input
        onChange={handleInputChange}
        className={visibleClass}
        // value={filter}
        type="text"
      />
      <button type="button" onClick={handleClick}>
        <span>Filter</span>
      </button>
    </StyledFilter>
  );
}

// Filter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export default Filter;
