import React, { Fragment } from 'react'
import { Form } from './components/Form'

export const App = () => {
    return (
        <Fragment>
            <div className='h1'>
                <div>
                    <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Multi Step Form</h1>
                </div>
            </div>
            <section>
                <div>
                    <div>
                        <div>
                            <div>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
