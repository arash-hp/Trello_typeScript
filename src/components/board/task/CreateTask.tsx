import { FC, useMemo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../../redux/boardSlice";
import { BoardTask } from "../../../types/api/board";
import TaskForm,{ TaskFormProps }  from "./TaskForm";

interface CreateTaskProps {
    parentId: number,
}



const CreateTask: FC<CreateTaskProps> = (props) => {
  const [open, setOpen] = useState(false);

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
        setOpen(false)
    }, [])

    
  const handelOpen = () => {
    setOpen(true);
  };
  

    return <TaskForm item={item} onSubmit={onSubmit} onClick={handelOpen} open={open}/>
};

export default CreateTask;
