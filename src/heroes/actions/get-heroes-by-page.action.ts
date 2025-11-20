import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes.response";

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
    const { data } =  await heroApi.get<HeroesResponse>(`/`);

    const BASE_URL = import.meta.env.VITE_API_URL;

    const heroes = data.heroes.map( hero => ({
        ...hero,
        imageUrl: `${BASE_URL}/images/${ hero.image }`,
    }));

    return { 
        ...data,
        heroes,
    };
}