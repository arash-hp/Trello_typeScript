export interface BoardColumn {
    id: number;
    title: string;
    tasks: number[];
}

export interface BoardTask {
    id: number,
    parentId: number,
    title: string,
    order:number,
}
