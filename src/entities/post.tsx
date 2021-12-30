export interface Post {
    id: string,
    description: string,
    store: Store
}

export interface Store {
    id: string,
    name: string,
    image_url: string,
    location: string,
    lat: number,
    long: number
}