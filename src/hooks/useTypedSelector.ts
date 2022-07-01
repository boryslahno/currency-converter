import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootSate } from '../store';

const useTypedSelector: TypedUseSelectorHook<RootSate> = useSelector;

export default useTypedSelector;