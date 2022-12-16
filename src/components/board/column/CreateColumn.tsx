import { FC, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createColumn, createTask } from "../../../redux/boardSlice";
import { BoardColumn, BoardTask } from "../../../types/api/board";
import ColumnForm,{ ColumnFormProps }  from "./ColumnForm";

interface CreateColumnProps {
  
}



const CreateColumn: FC<CreateColumnProps> = (props) => {
    const dispatch = useDispatch()
    const column = useMemo(() => {
        return {
            id: 0,
            title: '',
            tasks:[]
        } as BoardColumn
    }, [])

    const onSubmit: ColumnFormProps['onSubmit'] = useCallback(({title}, { resetForm }) => {
        console.log(title)
        dispatch(createColumn(title));
    }, [])

    return <ColumnForm item={column} onSubmit={onSubmit} />
};

export default CreateColumn;
