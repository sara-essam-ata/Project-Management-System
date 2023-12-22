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
export interface IListTasks {
    id: number,
    title: string,
    status: string,
    description: string,
    creationDate: string,
    modificationDate: string,
    project: IListProject
    employee: Employee
}

export interface Employee{
    id: number;
    userName: string;
    isActivated: string

}

export interface ITask {
    title: string,
    description: string,
    employeeId: number,
    projectId: number
}
