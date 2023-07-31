import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
// import Home from '../pages/Home/Home';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsThunk,
  // addContactThunk,
  // deleteContactThunk,
} from 'redux/operations';
// import { setFilter } from 'redux/slice';
// import {
//   selectContacts,
//   selectError,
//   selectFilter,
//   selectFilteredContacts,
//   selectLoading,
// } from 'redux/selectors';
// import Form from './Form/Form';
// import ContactList from './ContactList/ContactList';
// import Section from './Section/Section';
// import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';
// import Notification from './Notification/Notification';

const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));

export function App() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);
  //   const filterValue = useSelector(selectFilter);
  //   const error = useSelector(selectError);


    useEffect(() => {
      dispatch(getContactsThunk());
      //     .unwrap().catch((error)=>{
      // toast.error(error.message);
      // })
    }, [dispatch]);

  //   useEffect(() => {
  //     if (!error) return;
  //     toast.info(error);
  //   }, [error]);



  //   const onFilter = filterData => {
  //     dispatch(setFilter(filterData));
  //   };

   return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
// <Route path="/home" element={<Home />}/>
// <Route path="/" element={<SharedLayout />}>
