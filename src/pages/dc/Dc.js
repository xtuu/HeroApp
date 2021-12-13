import React from 'react'
import { HeroList } from '../hero/HeroList'

export const Dc = () => {
    return (
        <div>
            <h1 className="mt-2 mb-1 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Dc Page</h1>
            <hr />
            <div className='p-4'>
                <HeroList publisher={'DC Comics'} />
            </div>
        </div>
    )
}
