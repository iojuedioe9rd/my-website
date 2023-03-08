

import * as React from 'react';

export interface Props  { 
    children: React.ReactNode | React.ReactNode[]
    className?: string
 }

export default function Container( { children, className }: Props) {

    if (typeof className === 'string')
    {
        return (
            <div className={"container " + className}>
                {children}
          
            </div>
      )
    }

    return (
        <div className={"container"}>
            {children}
      
        </div>
  )
}
