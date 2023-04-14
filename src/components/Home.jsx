import React from 'react'
import CircularSliderUI from './CircularSliderUI'
import Form from './Form'

function Home() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-center h-[100vh] w-full">
            <div className="rounded-lg md:h-[80vh] md:w-[30vw] border-2 border-sky-800 md:mr-4 flex justify-center py-16">
                <Form />
            </div>
            <div className="rounded-lg md:h-[80vh] md:w-[50vw] border-2 border-sky-800">
                <CircularSliderUI />
            </div>
        </div>
    )
}

export default Home
