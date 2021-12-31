export interface Post {
    id: string,
    description: string,
    store: Store,
    rating: number,
    hash_tags: string[]
}

export interface Store {
    id: string,
    name: string,
    image_url: string,
    location: string,
    lat: number,
    long: number
}