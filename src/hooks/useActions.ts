import {useAppDispatch} from "./useAppDispatch";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creator/'

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionCreators, dispatch);
}