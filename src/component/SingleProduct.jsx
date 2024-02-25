import { useLoaderData } from 'react-router-dom'

export default function SingleProduct() {
  const item = useLoaderData()
  // console.log(item)
  const {id, title, price, description, image, rating} = item
  
  return (
    <>
    <h1 className='text-center bold display-3 mb-4'>Single Product</h1>
    <div id='single-container'>
    <div key={id}>
         <h2>{title}</h2> <br/> 
          <img src={image}/> <br/> 
           <p>{description}</p> <br/> 
         <h4>£{price}</h4>  <br />
              {rating[0]}
          </div>
          </div>
      </>
  )
}




// const product = useLoaderData()
  
// console.log(product)

// return (
//   <>
//     <h1>Single Product</h1>
//     {product.map((product, index) => {
//       // {console.log(product.title)}
//       return <div key={index}>
//         {product.title} <br />
        
//         <img src={product.image} /> <br />
        
//         {product.description} <br />
//         {product.rating.rate}
//       </div>
//     })}
//   </>
// )
// }