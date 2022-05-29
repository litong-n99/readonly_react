import React, {useMemo} from 'react';
import { DeepReadonly } from './DeepReadonly';

import {
    removeTodo, 
    changeStute,
    unFinishedTodo,
    finishedTodo
  } from './app/todoSlice'
import { useAppDispatch, useAppSelector } from './app/hooks';

export default function Todo(props: DeepReadonly<{title: string, isFinish: boolean}>) {
    const dispatch = useAppDispatch();
    
    // As below, If you try to modify props, you'll get a typescript error
    // props.title = 'aaa';

    const unFinishedList = useAppSelector(unFinishedTodo);
    const finishedList = useAppSelector(finishedTodo);

    // As below, If you try to modify a redux state, you'll get a typescript error
    // finishedList[0].name = 'bbb';

    const list = useMemo(() => props.isFinish ? finishedList : unFinishedList, [props.isFinish, finishedList, unFinishedList])
    const updateBtnText = useMemo(() => props.isFinish ? 'Undone' : 'Done', [props.isFinish])

    return <div>
        {props.title}
    <ul>
        {list.map(item => (<li key={item.id}>
            {item.name}
            <button onClick={() => dispatch(removeTodo(item.id))}> delete </button>
            <button onClick={() => dispatch(changeStute({id: item.id, isFinish: !item.isFinish}))}> {updateBtnText} </button>
        </li>))}
    </ul>
    </div>
}