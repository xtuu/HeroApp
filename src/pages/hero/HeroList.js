import React, { Fragment, useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <Fragment>
            <ul role="list" className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  animate__animated animate__fadeIn">
                {heroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
