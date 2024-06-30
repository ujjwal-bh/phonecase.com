import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string,
    dark?: boolean
}
const Phone = ({className, imgSrc, dark=false, ...props}: IProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
        <img className='pointer-events-none z-50 select-none' src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} alt='phone image'/>
        <div className="absolute -z-10 inset-0">
            <img src={imgSrc} className='object-cover min-w-full min-h-full' alt='overlay phone image'/>
        </div>
    </div>
  )
}

export default Phone