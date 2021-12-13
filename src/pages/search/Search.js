import { useMemo } from "react";
import { useForm } from "react-hook-form";
import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";



export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        navigate(`?q=${data.search}`);
    }



    const heroesFileted = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <h1>Search Page</h1>
            <hr />

            <div className="bg-gray-50">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16" >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">Search</h2>
                                    <div className="mt-4">
                                        <div className="mt-1">
                                            <label htmlFor="search">Search</label>
                                            <input
                                                type="text"
                                                id="search"
                                                autoComplete="off"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                {...register('search')}
                                            />

                                        </div>
                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <button
                                                type="submit"
                                                className="w-full bg-gray-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                            >
                                                Find ...
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">Heroe</h2>

                            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">

                                {
                                    (q === '')
                                        ?
                                        <div
                                            className="w-full bg-gray-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base text-center font-medium text-white animate-pulse"
                                        >
                                            Buscar un Heroe
                                        </div>
                                        :
                                        (heroesFileted.length === 0) && <div className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base text-center font-medium text-white"
                                        >
                                            Oops!, No hay resultados para: {q}
                                        </div>
                                }


                                {heroesFileted.map((item) => (
                                    <HeroCard
                                        key={item.id}
                                        {...item}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
