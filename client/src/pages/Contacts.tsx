import React from 'react'

const Contacts = () => {
  return (
    <div className='container mb-auto text-black mx-auto px-20'>
      <div className="text-5xl text-center mb-20 mt-10 ">Контакты</div>
      <div className="">
        <div className="text-3xl mb-20">Юридический адрес:
            <p className='text-xl pl-10'>Оренбургская область ГОРОД ОРЕНБУРГ ГОРОД ОРЕНБУРГ УЛ Транспортная 4</p>
        </div>

        <div className="text-3xl flex flex-col gap-5">Для связи с нами:
            <p className='text-xl pl-10 flex gap-3'><span className='text-amber-600'>Номер телефона:</span>  +7 909 610-72-73</p>
            <p className='text-xl pl-10 flex gap-3'><span className='text-amber-600'>Почта:</span>  i_p.musagaliyev@mail.ru</p>
            <p className='text-xl pl-10 flex gap-3'><span className='text-amber-600'>График работы:</span> круглосуточно, 24/7</p>
            
        </div>
          
      </div>
    </div>
  )
}

export default Contacts