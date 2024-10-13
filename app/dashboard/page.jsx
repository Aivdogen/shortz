"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/config/db';
import { VideoData } from '@/config/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import EmptyState from './_components/EmptyState';
import VideoList from './_components/VideoList';
import React from 'react';


function Dashboard() {
    const [videoList, setVideoList] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            getVideoList();
        }
    }, [user]);

    const getVideoList = async () => {
        try {
            const result = await db.select().from(VideoData).where(eq(VideoData.createdBy, user.primaryEmailAddress?.emailAddress));
            console.log("Video List Data:", JSON.stringify(result, null, 2));
            setVideoList(result);
        } catch (error) {
            console.error("Error fetching video list:", error);
        }
    }

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className="font-bold text-3xl">Dashboard</h2>
                <Link href={'/dashboard/create-new'}>
                    <Button className='flex items-center gap-2'> <FiPlusCircle /> Create New</Button>
                </Link>
            </div>

            {videoList.length === 0 ? (
                <EmptyState />
            ) : (
                <VideoList videoList={videoList} />
            )}
        </div>
    )
}

export default Dashboard
