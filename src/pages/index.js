import React from 'react'
import Layout from '../components/layout'
import Photoslidertopfinals from '../components/wt/photoslidertopfinals'
import Floatingfeaturedblocks from '../components/wt/floatingfeaturedblocks'
import Upcomingmatchbgpicturetop from '../components/wt/upcomingmatchbgpicturetop'
import Standings from '../components/standings'
import Previousmatch from '../components/wt/previousmatch'
import Watchlive from '../components/watchlive'
import Schedroster from '../components/schedroster'


const Index = () => (
    <Layout>
        <Photoslidertopfinals />
        <Floatingfeaturedblocks />
        <Schedroster />
        <Standings />
        <Upcomingmatchbgpicturetop />
        <Previousmatch />
        <Watchlive />
    </Layout>
)

export default Index