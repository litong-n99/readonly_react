import { EqualityFn, useDispatch, useSelector } from 'react-redux';
import { DeepReadonly } from '../DeepReadonly';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// You need to reset the type of useSelector, Add DeepReadonly generic for its return value
export const useAppSelector
    = useSelector as <Selected = unknown>(selector: (state: RootState) => Selected, equalityFn?: EqualityFn<Selected> | undefined) => DeepReadonly<Selected>;

