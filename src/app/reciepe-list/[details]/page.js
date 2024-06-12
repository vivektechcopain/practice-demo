
    import RecipeDetailItem from "@/components/ui/recipe-detail"
    async function fetchRecipeDetail(currentRecipeId){
        try{
            const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
            const data = await apiResponse.json()

            return data

    }
        catch(error){
            throw new Error(error)
        }
    }
export default async function RecipeDetails({params}){
    const  getRecipeDetail = await fetchRecipeDetail(params?.details)
    return(
        <RecipeDetailItem getRecipeDetail={getRecipeDetail}/>
    )
}
