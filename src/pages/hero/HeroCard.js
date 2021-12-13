import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {



    return (
        <div>
            <li
                key={id}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 animate__animated animate__fadeIn"
            >
                <div className="flex-1 flex flex-col p-8">
                    <img className="h-96 w-auto flex-shrink-0 mx-auto rounded-md shadow-md" src={`/assets/${id}.jpg`} alt={superhero} />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{superhero}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm">{alter_ego}</dd>
                        <dd className="mt-3">
                            <span className="px-2 py-1 text-gray-800 text-xs font-medium bg-red-100 rounded-full">
                                {first_appearance}
                            </span>
                        </dd>
                    </dl>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                            <Link
                                to={`/hero/${id}`}
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-white text-gray-700 font-medium border rounded-bl-lg hover:text-gray-100 hover:bg-gray-900"
                            >
                                <span className="ml-3">Detalles</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}
