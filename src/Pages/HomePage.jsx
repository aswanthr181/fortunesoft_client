import React, { useEffect, useState } from 'react'
import UserAxios from '../axios/useAxios'
import { ClipLoader } from 'react-spinners'
import RowPost from '../Components/RowPost/RowPost'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'

function HomePage() {
    const userAxios = UserAxios()
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [bannerArray,setBannerArray]=useState([])
    useEffect(() => {
        setLoading(true)
        userAxios.get('/fetchmovies')
            .then((response) => {
                console.log('hi');
                const data = response.data.result
                setList(data)
                const random=Math.floor(Math.random()*data.length)
                setBannerArray(data[random].movies)
                console.log(response.data.result);
                console.log('listtttt', list);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log('list', list);
    console.log('bannerarray',bannerArray);
    return (
        <>
            {loading ? (
                <ClipLoader loading={loading} />
            ) :
                <>
                    <Navbar />
                    <Banner array={bannerArray} /> 
                    {list.map((item, index) => (
                        <RowPost key={index} category={item.category} array={item.movies} />
                    ))}
                </>}
        </>
    )
}

export default HomePage