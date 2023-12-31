import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import {
   addToFavorite,
   removeFromFavorite,
} from '../../store/slices/favoriteSlice';
import { AuthContext } from '../../store/context/authContext';
import { LOGIN_ROUTE } from '../../consts/consts';

export function ButtonFavorite({ id }) {
   const favorites = useSelector((state) => state.favorites.favorites) || [];
   const isFavoriteIncludes = favorites.includes(id);
   const dispatch = useDispatch();

   const { value } = useContext(AuthContext);
   // const { toggleIsAuth } = useContext(AuthContext);

   const navigate = useNavigate();

   const addToFav = (movieId) => {
      if (value[0]) {
         dispatch(addToFavorite(movieId));
      } else {
         navigate(LOGIN_ROUTE);
      }
   };
   const removeFromFav = (movieId) => {
      dispatch(removeFromFavorite(movieId));
   };

   if (isFavoriteIncludes && value[0]) {
      return (
         <Button variant='danger' size='sm' onClick={() => removeFromFav(id)}>
            Удалить
         </Button>
      );
   }
   return (
      <Button variant='primary' size='sm' onClick={() => addToFav(id)}>
         Добавить
      </Button>
   );
}
