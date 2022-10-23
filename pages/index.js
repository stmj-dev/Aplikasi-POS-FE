import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AppLayout from '../layouts/AppLayout'

export default function Home() {
  
  return (
    <div>
      <AppLayout>
        <h1>This Home</h1>
      </AppLayout>
    </div>
  )
}
