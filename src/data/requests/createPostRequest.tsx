export interface CreatePostRequest {
    store_name: string,
    store_image: string,
    store_location: string,
    store_lat: number,
    store_long: number,
    rating: number,
    positives: string[],
    neutrals: string[],
    negatives: string[],
    hash_tags: string[]
}
