import React, { useRef } from 'react';
import PropTypes from "prop-types";

const FileInput = ({ onChange, name, error, stepKey, fileName }) => {
    const fileInput = useRef();

    const openFilePicker = (e) => {
        fileInput.current.click();
    }

    const fileChangeHandler = (e) => {
        if (e.target.files[0]) {
            onChange(name, e.target.files[0], stepKey);
        }
        else {
            onChange(name, {}, stepKey);
        }
    }

    return (
        <>
            <div>
                <input
                    type="file"
                    name={name}
                    onChange={fileChangeHandler}
                    ref={fileInput}
                    style={{ display: 'none' }}
                />
                <div style={{ alignItems: 'center', display: 'flex', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                    <button type='button' className='choose' onClick={openFilePicker}>Choose File</button>
                    <p>
                        {fileName}
                        {fileName !== 'No file choosen' &&
                            <button className='no' type='button' onClick={() => onChange(name, {}, stepKey)}>Cancel</button>
                        }
                    </p>
                </div>
                {error && <p className='error'>{error}</p>}
            </div>
        </>
    );
};

FileInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    stepKey: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
}



export default FileInput;
