/* eslint-disable react/prop-types */

/* eslint-disable prefer-template */
import React from 'react';
import { FAVORITE_ROUTE, MAIN_ROUTE } from '../../consts/consts';
import style from './ItemComponent.module.css';
import { Link } from 'react-router-dom';

export function ItemComponent({ itemId }) {
   return (
      <div className={style.item}>
         <Link to={`${MAIN_ROUTE}${itemId}`}>132rtgwethgf</Link>
      </div>
   );
}
