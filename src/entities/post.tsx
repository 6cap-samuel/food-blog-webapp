import { Food } from "./food";
import { Store } from "./store";

export interface Post {
    id?: string,
    description?: string,
    store: Store,
    rating: number,
    hash_tags: string[],
    foods?: Food[],
    positives: string[],
    neutrals: string[],
    negatives: string[]
}

