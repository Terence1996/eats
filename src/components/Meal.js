import React, { useState } from 'react'
import { mealData } from './data'
import {ArrowSmRightIcon} from '@heroicons/react/outline'


export const Meal = () => {

const[foods,setFoods] = useState(mealData)
const fillerCat = (category )=> {
    setFoods(
        mealData.filter((item)=>{
return item.category === category
        })
        )
}

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-blue-700 font-bold text-2xl text-center py-2'>Our Meals
      </h1> 
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center'>
<button
onClick={()=>setFoods(mealData)}
className='font-bold m-1 border-blue-700 text-black hover:bg-white hover:text-blue-700 hover:border-blue-700' >All</button>

<button
onClick={()=>fillerCat("pizza")}
className='font-bold m-1 border-blue-700 text-black  hover:bg-white hover:text-blue-700 hover:border-blue-700'>Pizza</button>

<button
onClick={()=>fillerCat("chicken")}
className='font-bold m-1 border-blue-700 text-black  hover:bg-white hover:text-blue-700 hover:border-blue-700'>Chicken</button>

<button 
onClick={()=>fillerCat("salad")}
className='font-bold m-1 border-blue-700 text-black hover:bg-white hover:text-blue-700 hover:border-blue-700'>Salad</button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {
foods.map((item)=> (
<div key={item.id} className='border-none hover:scale-105 duration-300'> 
<img src={item.image}
alt={item.name}
className='w-full h-[200px] object-cover rounded-lg'
/>
<div className='flex justify-between py-2 px-2'>
    <p className='font-bold'>{item.name}</p>
    <p className='bg-blue-700 h-18 w-18 rounded-3xl py-4 px-2 text-white -mt-10 border-8 font-bold'>{item.price}</p>
</div>
<div className='pl-2 py-4 -mt-7'> 
<p className='flex items-center text-indigo-500 '>View More<ArrowSmRightIcon className='w-5 ml-2'/></p>
</div>
</div>
))
}
        </div>  
    </div>
  )
}
