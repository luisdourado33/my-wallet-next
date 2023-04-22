import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import { signInMock, signOut } from '@/features/authentication/authenticationSlice';

export default function useAuth() {
  const authentication = useSelector((state: RootState) => state.authentication);
  const dispatch = useDispatch();

  return {
    ...authentication,
    signInMock: () => dispatch(signInMock()),
    signOut: dispatch(signOut())
  }
}