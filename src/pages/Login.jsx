import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/user/userThunks';
import { toast } from 'react-toastify';
import { selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setError } from 'redux/rootSlice';

const Login = () => {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(setError());
  // }, [dispatch]);

  // useEffect(() =>{
  //   if (error) {
  //     error.name === 'MongoError'
  //       ? toast.info('This account already exists')
  //       : toast.info('Wrong login data');
  //   }
  // },[error])

  const onLogin = userData => {
    dispatch(loginThunk(userData))
    // .unwrap().then(()=>{
    //   if (error) {
    //   error.name === 'MongoError'
    //     ? toast.info('This account already exists')
    //     : toast.info('Wrong login data')}});
  };

  return (
    <main>
      <LoginForm onLogin={onLogin} />
    </main>
  );
};

export default Login;
