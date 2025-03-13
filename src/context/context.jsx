import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParam,setSearchParam] =useState('')
    const [loading,setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData,setRecipeDetailsData] = useState(null)
    const [favoritesList,setFavoritesList] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async(event) => {
        event.preventDefault()
         try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json()

            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
                navigate('/')
            }
            console.log(data)

         } catch (error) {
            console.log(error)
         }
    }

    const handleAddtoFavorite = (getCurrentItem) =>{
        console.log(getCurrentItem)
        let cpyFavoritesList = [...favoritesList]
        const index = cpyFavoritesList.findIndex(item=>item.id === getCurrentItem.id)

        if(index===-1){
            cpyFavoritesList.push(getCurrentItem)
        }else{
            cpyFavoritesList.splice(index,1)
        }
        setFavoritesList(cpyFavoritesList)
    }

    console.log(loading,recipeList)

    return <GlobalContext.Provider value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddtoFavorite,
        favoritesList
    }}>{children}</GlobalContext.Provider>
}