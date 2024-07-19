import React, { lazy, Suspense } from 'react'

export default function Home() {

    const Banner = lazy(()=>import('./Banner'));
    const Section = lazy(()=>import('./Section'))
    const Header = lazy(()=>import('./Header'));
    return (
    <>
    <h3>Home page</h3>

        {/* basically suspense used only uhtil your component not render then this is show the message */}

        <Suspense fallback={<h4>Header is Loading</h4>} >
            <Header/>
        </Suspense>

        <Suspense fallback={<h4>Bannner is loading...</h4>} >
        <Banner/>
        <Section/>
        </Suspense>



    </>
  )
}
