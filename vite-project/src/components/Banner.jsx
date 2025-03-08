import React from 'react'

function Banner() {
  return (
    <div className='md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://scontent.fixm2-1.fna.fbcdn.net/v/t1.6435-9/57155209_2348968348721015_2070087001591250944_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0K4GE0HvgRgQ7kNvgGW1Ast&_nc_oc=Adi6ZCDAQXpcaBLf93rcReq8lYUfkKJDoqZJGeCqGoPMvYZGbyM1Cac74FHp2fxx-dKEM3r5rZNPc_qNneOI3ECB&_nc_zt=23&_nc_ht=scontent.fixm2-1.fna&_nc_gid=AknEBjnI49bbqgQ-DMakHpM&oh=00_AYAdRCvhxAM5EtuIVLVw1Suo6_qNILu154ezNqbUHGvJNg&oe=67EB3B2B)`}}>
        <div className='text-white font-bold text-2xl  text-center w-full bg-gray-900/70 p-2  '>
            Avengers Endgame
        </div>
    </div>
  )
}

export default Banner