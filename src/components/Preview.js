import React, { Fragment } from 'react';

const Preview = ({ data, onPrevStep }) => {
    return (
        <div className="preview">
            <p style={{ color: 'green', marginBottom: '0.5rem' }}>Your data</p>
            <div>
                <ul>
                    {data.map((input, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>
                            {!input.image
                                ? <Fragment><strong>{input.label} </strong> {input.value}</Fragment>
                                : <div><strong>{input.label} </strong> <img src={input.value} alt="" style={{ maxWidth: '100px' }} /></div>
                            }
                        </li>
                    ))}
                </ul>
                <div>
                    <button type="button" className='go' onClick={onPrevStep}>Go back</button>
                    <button type="submit" className="Submit">Submit form</button>
                </div>
            </div>
        </div>
    );
}

export default Preview;