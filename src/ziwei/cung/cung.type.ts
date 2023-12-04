import { Chi } from "../chi/chi.type"

export type Cung<C extends Chi> = {
    name: C['name'],
    isMenh: boolean,
    isThan: boolean,
}
