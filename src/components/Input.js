import React from 'react';
import PropTypes from "prop-types";

const Input = ({ type = 'text', placeholder, name, value, onChange, error }) => {
    return (
        <>
            <div>
                <input
                    className=''
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                />
            </div>
            {error && <p className='error'>{error}</p>}
        </>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired,

}

export default Input;