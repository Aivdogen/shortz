import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  

const CustomLoading = ({loading}) => {
  return (
    <AlertDialog open={loading}>

  <AlertDialogContent className="bg-white ">
  <div className=' bg-white flex flex-col items-center justify-center my-10'>
    <Image src="/loading.gif" alt="loading" width={50} height={50} />
    <h2 className='text-lg font-medium'>Generating Video</h2>
  </div>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default CustomLoading