import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

SearchForm.propTypes = {
    onKeyPress: PropTypes.func
};

SearchForm.defaultProps = {
    onKeyPress: null
};

function SearchForm(props) {

    const { onKeyPress } = props;
    const [value, setValue] = useState('');

    function handleOnSubmit(e) {
        e.preventDefault();
    }

    function handleOnKeyPress(e) {
        if (onKeyPress)
            onKeyPress(e);
    }

    return (
        <form className="search-form" onSubmit={(e) => handleOnSubmit(e)}>
            <input
                className="search-form--search"
                type="text"
                placeholder="Thành phố..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => handleOnKeyPress(e)}
            />
        </form>
    );
}

export default SearchForm;