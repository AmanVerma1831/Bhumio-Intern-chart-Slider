import React from 'react'

function Form() {
    return (
        <div className="flex flex-col items-end">
            <div className="py-4">
                <label htmlFor="gross">Gross Earnings : </label>
                <input
                    type="text" name="gross"
                    placeholder="Enter Number"
                    className='border border-sky-800 rounded-sm px-2'
                />
            </div>
            <div className="py-4">
                <label htmlFor="referral">Referral % : </label>
                <input
                    type="text" name="referral"
                    placeholder="Enter Number"
                    className='border border-sky-800 rounded-sm px-2'
                />
            </div>
        </div>
    )
}

export default Form
