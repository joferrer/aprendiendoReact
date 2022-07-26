
import { useFetchGift } from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";


export const GiftGrid = ({category}) => {

  const { images,isLoading} = useFetchGift(category);
  


  return (
    <div>
        <h3>{category}</h3>
        {isLoading && <p>Loading..</p>}
        <div className="card-grid">
          {
            images.map( ({id,title,url}) =>(
              
                <GiftItem key={id} title={title} url ={url} />

            ))
              
          }
        </div>
    </div>
  )
}
