
import ReciepeList from "@/components/ui/reciepe-list/index";


async function fetchListRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json()
        
        return data?.recipes
    }
    catch (e) {
        throw new Error(e)
    }
}

export default async function Recipes() {
    const reciepeList = await fetchListRecipes();
    
    return (
        <>

    <ReciepeList reciepeList={reciepeList} />
    </>
)


}