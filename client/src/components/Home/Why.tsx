import React from 'react'

const Why = () => {
  return (
        <div className=' mb-20 container m-auto'>
            <div className="text-6xl my-20 text-center" >Почему мы?</div>

            <div className="flex justify-between gap-10 px-20">

                <div className="w-3/12 flex flex-col justify-center items-center">
                    <img src="/why/1.png" alt="" className="h-28 mb-3"/>
                    <p  className="text-red-900 text-xl text-center">
                    Выдаем документы на возмещение расходов на эвакуатор
                    </p>
                </div>

                <div className="w-3/12 flex flex-col justify-center items-center">
                    <img src="/why/2.png" alt="" className="h-28 mb-3"/>
                    <p  className="text-red-900 text-xl text-center">
                    Режим работы: всегда! Работаем круглосуточно и в любые праздники
                    </p>
                </div>

                <div className="w-3/12 flex flex-col justify-center items-center">
                    <img src="/why/3.png" alt="" className="h-28 mb-3"/>
                    <p  className="text-red-900 text-xl text-center">
                    При необходимости можем застраховать перевозку на случай ЧП
                    </p>
                </div>

                <div className="w-3/12 flex flex-col justify-center items-center">
                    <img src="/why/4.png" alt="" className="h-28 mb-3"/>
                    <p  className="text-red-900 text-xl text-center">
                    Оплата как наличными, так и через расчетный счет, в том числе с НДС
                    </p>
                </div>


       

      

        </div>
        </div>
  )
}

export default Why