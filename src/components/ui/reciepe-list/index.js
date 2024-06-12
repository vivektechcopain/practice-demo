import Link from "next/link"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { ReceiptCent } from "lucide-react"
  

export default function ReciepeList({ reciepeList }){
    console.log("Recipe data", reciepeList)
    return <div>
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
            <Link href={'/'}>Go to Home</Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                reciepeList && reciepeList.length > 0 ? 
                reciepeList.map(recipe =><Link href={`/recipe-list/${recipe.id}`}>
                <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                        />
                        </div>
                        <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600"> Eating: {recipe.rating}</p>
                        <div className="ml-auto">
                        <p className="text-lg text-gray-600">{recipe.cuisine}</p>
                        </div>
                        </div>
                        </div>

                    </CardContent>
                </Card>
                </Link>)
               : null
            }
            </div>
        </div>
    </div>
}