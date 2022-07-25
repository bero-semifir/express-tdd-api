import { Actor } from "./Actor.type"

export type Film = {
    title: string,
    synopsys: string,
    releaseDate?: Date,
    actors: Actor[],
    status: 'released' | 'unreleased'
};
