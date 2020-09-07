import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from '../../components/Favorites/FavoriteItem';

//    Used React Hooks


const Favorites = props => {
  const favoriteProducts = useSelector(state =>
    state.data.filter(p => p.isFavorite)
  );

      let content = <h3 style={{textAlign: 'center', color:"red"}}>Opps....Got no favorites yet!</h3>;
  if (favoriteProducts.length > 0) {
    content = (
        <div >
        {favoriteProducts.map(proj => (
          <FavoriteItem
            key={proj.id}
            id={proj.id}
            name={proj.name}
            date={proj.date}
            language={proj.language}
          />
        ))}
      </div>
    );
  }
  return content;
};

export default Favorites;
