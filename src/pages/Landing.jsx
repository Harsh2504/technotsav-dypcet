import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Landing() {
  return (
    <>
    <div className='relative w-screen h-screen '>
        <Spline scene="https://prod.spline.design/3LhodsAeMvPQ7-K4/scene.splinecode" />
        <div className='absolute bottom-0 right-0 bg-[#e3e3e3] w-full md:w-[200px] h-[80px] text-center flex flex-col justify-center items-center'>
          <p className='font-bold text-4xl block md:hidden'>Technotsav 2k25</p>
          <p className='font-bold text-2xl text-[#444444] block md:hidden '>Coming Soon....</p>
        </div>
    </div>
    <div className='flex flex-col justify-start items-center w-screen h-screen overflow-x-hidden py-20 px-40'>
        <h1 className='text-5xl font-medium'>What's Technotsav?</h1>
        <p className='my-5 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis officia velit beatae est, voluptatum aliquid? Odio aliquid necessitatibus earum est illum maiores obcaecati qui perferendis fugiat modi, officia numquam omnis porro repellendus eaque asperiores deleniti rem quos possimus? Accusantium, tempora mollitia consequatur molestias sint expedita iste consectetur iusto temporibus maiores corporis reprehenderit iure rem provident fugiat porro, laborum repellat, optio sed quaerat natus maxime delectus quasi! Natus, possimus repudiandae. Veritatis ratione in neque vero, cum earum iste, iure quidem natus quis at officiis harum laborum illum temporibus delectus nam expedita, cupiditate nobis minus ab optio! Soluta esse quidem accusantium repellat similique numquam, illum, perferendis minus est hic, eaque aliquid aliquam omnis? Debitis accusantium commodi sit quasi ipsam illum exercitationem nemo, quae iusto rerum voluptas nihil excepturi, vero pariatur voluptates minima quo cupiditate eveniet quis consectetur? Maxime, exercitationem dolor et cum consequuntur fugiat, ut laudantium dicta aliquam mollitia, expedita ipsa architecto corporis! Commodi corporis, voluptas vitae rem labore explicabo ullam minus debitis praesentium consectetur reprehenderit at aspernatur totam inventore magnam dolor. Quo assumenda quia, vitae non dolor praesentium sit ipsum enim impedit voluptas id earum, odio fugiat accusamus inventore delectus aliquam sapiente tempora nihil autem dolorem neque doloribus! Temporibus, harum, quis molestias quidem cum delectus veniam ratione possimus sapiente similique sed voluptatem ea sequi consequatur reiciendis ab illo. Distinctio, unde nulla amet minima reprehenderit possimus debitis sed tenetur nobis, dicta perferendis sit architecto consectetur porro rem inventore deleniti asperiores fugit iste nesciunt, illo fugiat. Ipsam asperiores, sed illo deserunt et porro unde voluptate a natus tempore eius in harum nesciunt quae illum assumenda consectetur voluptatum at neque inventore atque esse blanditiis autem dolores? Sapiente a sequi beatae. Quam doloremque vel fugiat voluptas tempora dolor at eveniet impedit non harum exercitationem odit doloribus incidunt nemo debitis quis, illo perferendis, cumque explicabo vitae!</p>
    </div>
    </>
  )
}
