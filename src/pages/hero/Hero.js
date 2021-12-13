import React, { useMemo } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';


export const Hero = () => {

    const { id } = useParams();

    const navigate = useNavigate()

    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) {
        return <Navigate to="/" />
    };

    const imgPath = `/assets/${hero.id}.jpg`;

    const handleReturn = () => {

        navigate(-1)

    }

    return (
        <main className="bg-white relative lg:min-h-screen">
            <div className="overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
                <img
                    src={imgPath}
                    alt={hero.superhero}
                    className="mx-auto h-auto w-auto object-right-top animate__animated animate__fadeInLeft"
                />
            </div>

            <div>
                <div className="max-w-2xl mx-20 sm:mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24 animate__animated animate__fadeInUp">
                    <div className="lg:col-start-2">
                        <p className="mt-2 mb-1 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{hero.superhero}</p>
                        <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
                            <div className="flex justify-between">
                                <dt>Alter Ego</dt>
                                <dd className="text-gray-900">{hero.alter_ego}</dd>
                            </div>

                            <div className="flex justify-between">
                                <dt>First Appearance</dt>
                                <dd className="text-gray-900">{hero.first_appearance}</dd>
                            </div>

                            <div className="flex justify-between">
                                <dt>Characters</dt>
                                <dd className="text-gray-900">{hero.characters}</dd>
                            </div>
                        </dl>


                        <div className="mt-16 border-t border-gray-200 py-6 text-right">
                            <button
                                to="/"
                                className="text-sm font-medium text-black hover:text-gray-500"
                                onClick={handleReturn}
                            >
                                Volver<span aria-hidden="true"> &rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
