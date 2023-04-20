import { useQuery,useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) =>{
    const ProductId=queryKey[1]
    return axios.get(`http://localhost:4000/products/${ProductId}`)
}

export const useSuperHeroData = (id) => {
    const queryClient= useQueryClient()
    return useQuery(['products',id],fetchSuperHero,{
        initialData:()=>{
            const data = queryClient.getQueryData("products")
            ?.data?.find((item)=>item.id === parseInt(id))

            if(data) {
                return {
                    data:data
                }
            }else {
                return undefined
            }
        }
    })
}