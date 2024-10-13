'use client'
import { db } from '@/config/db';
import { Users } from '@/config/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react';

function Provider({children}) {

    const {user} = useUser();


    useEffect(() => {
        user&&isNewUser();
    }, [user]);

    const isNewUser = async () => {
        const result = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

        if(!result[0]){
            await db.insert(Users).values({
                email: user?.primaryEmailAddress?.emailAddress,
                name: user.fullName,
                image: user?.imageUrl,
                
            })
        }
    };

  return (
    <div>
        {children}
    </div>
  )
}

export default Provider