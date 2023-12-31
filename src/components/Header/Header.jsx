/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import { AuthContext } from '../../store/context/authContext';

import {
   HISTORY_ROUTE,
   MAIN_ROUTE,
   FAVORITE_ROUTE,
   LOGIN_ROUTE,
   REGISTER_ROUTE,
} from '../../consts/consts';

import setDataInLocalStorage from '../../utils/localStorage/setDataInLocalStorage';
import { removeUser } from '../../store/slices/userSlice';

import style from './Header.module.css';

export function Header() {
   const dispatch = useDispatch();
   const { value } = useContext(AuthContext);
   const { toggleIsAuth } = useContext(AuthContext);

   const navigate = useNavigate();
   const logout = () => {
      navigate('/');
      setDataInLocalStorage('currentUser', {});
      dispatch(removeUser());
      toggleIsAuth();
   };
   if (value[0]) {
      return (
         <div className={style.header}>
            <div className='logo'>
               <Button
                  onClick={() => navigate(MAIN_ROUTE)}
                  variant='outline-light'
               >
                  HOME
               </Button>
            </div>
            <div className='center_buttons'>
               <Button
                  onClick={() => navigate(FAVORITE_ROUTE)}
                  variant='outline-light'
                  style={{ marginRight: '30px' }}
               >
                  Favorite
               </Button>
               <Button
                  onClick={() => navigate(HISTORY_ROUTE)}
                  variant='outline-light'
               >
                  History
               </Button>
            </div>
            <Button variant='outline-light' onClick={logout}>
               Выход
            </Button>
         </div>
      );
   }

   return (
      <div className={style.header}>
         <div className='logo'>
            <Button
               onClick={() => navigate(MAIN_ROUTE)}
               variant='outline-light'
            >
               Logo
            </Button>
         </div>
         <div className='auth_buttons'>
            <Button
               style={{ marginRight: '20px' }}
               onClick={() => navigate(LOGIN_ROUTE)}
               variant='outline-light'
            >
               Login
            </Button>
            <Button
               onClick={() => navigate(REGISTER_ROUTE)}
               variant='outline-light'
            >
               Register
            </Button>
         </div>
      </div>
   );
}
