import React from 'react'
import language from '../utils/languageConstant';
const GptSerachBar = () => {
  return (
    <div className='pt-[10%] flex justify-center  '>

    <form className= ' w-1/2 bg-black grid grid-cols-12 '>
        <input type='text' className='p-4 m-4 col-span-9' placeholder= {language.hindi.gptSearchPlaceholder}/>
        <button className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md '>{language.hindi.search}</button>
    </form>

    </div>
  )
}

export default GptSerachBar;
