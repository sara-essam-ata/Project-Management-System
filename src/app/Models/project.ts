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

export interface TableData {
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    data:Employee
}
export interface Employee{
    id: number,
    userName: string,
    isActivated: string,
    phoneNumber: string,
    email: string,
    creationDate: string,
    group: Group
}
export interface Group {
    id: number,
    name: string,
    creationDate: string,
    modificationDate: string
}

export interface ITask {
    title: string,
    description: string,
    employeeId: number,
    projectId: number
}
export interface ITaskId {
    id: number,
}

