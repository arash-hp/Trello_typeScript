import { FC, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../../redux/boardSlice";
import { BoardTask } from "../../../types/api/board";
import TaskForm,{ TaskFormProps }  from "./TaskForm";

interface CreateTaskProps {
    parentId: number,
}



const CreateTask: FC<CreateTaskProps> = (props) => {
    const dispatch = useDispatch()
    const item = useMemo(() => {
        return {
            id: 0,
            parentId: props.parentId,
            title: ''
        } as BoardTask
    }, [])

    const onSubmit: TaskFormProps['onSubmit'] = useCallback(({parentId,title}, { resetForm }) => {
        dispatch(createTask({ title, parentId }));
    }, [])

    return <TaskForm item={item} onSubmit={onSubmit} />
};

export default CreateTask;
