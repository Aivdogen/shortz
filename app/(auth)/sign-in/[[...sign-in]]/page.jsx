import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import login from '../../../../public/login5.jpg'

export default function Page() {
    return (
        <div className=''>
            <div>
                <Image src={login} alt='login'  className='w-full object-cover h-screen  blur-[3px]' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md'>
                <SignIn />
                </div>
            </div>
          
               
            
        </div>
    )
}