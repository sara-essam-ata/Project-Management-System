export interface IProject {
    title: string,
    description: string,
}

export interface IListProject {
    id: number,
    title: string,
    description: string,
    creationDate: string,
    modificationDate: string,
    task: any
}
