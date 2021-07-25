import React, { Suspense, lazy } from 'react';
const About = lazy(() => import('./about'))
const Index = () => {
    return <div>
        <Suspense fallback={<div>loading</div>}>
            <About />
        </Suspense>
    </div>
}
export default Index;