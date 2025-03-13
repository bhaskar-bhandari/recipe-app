import React,{ useContext } from 'react'
import { GlobalContext } from '../../context/context';
import RecipeItem from '../../components/RecipeItem';


const Favorites = () => {
       const { favoritesList} = useContext(GlobalContext)

 
       return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
          {favoritesList && favoritesList.length > 0 ? (
            favoritesList.map((item) => (
              <RecipeItem key={item.id} item={item} /> // Add a unique key prop
            ))
          ) : (
            <div>
              <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
                Nothing is added to favorites.
              </p>
            </div>
          )}
        </div>
      );
  
}

export default Favorites
