import React, { useEffect, useState } from 'react'
import UserAxios from '../axios/useAxios'
import { ClipLoader } from 'react-spinners'
import RowPost from '../Components/RowPost/RowPost'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import { TokenUp } from '../Redux/userAuth'
import { useDispatch } from 'react-redux'

function HomePage() {
    const userAxios = UserAxios()
    const dispatch=useDispatch()
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [bannerArray,setBannerArray]=useState([])
    const[search,setSearch]=useState('')
    useEffect(() => {
        setLoading(true)
        userAxios.get('/fetchmovies')
            .then((response) => {
                const data = response.data.result
                setList(data)
                const random=Math.floor(Math.random()*data.length)
                setBannerArray(data[random].movies)
                
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log('list', list);
    console.log('bannerarray',bannerArray);
    const handleSearch=()=>{
        list.forEach((item)=>{
            item.forEach((movie)=>{
                
            })
        })
    }
    return (
        <>
            {loading ? (
                <ClipLoader loading={loading} />
            ) :
                <>
                    <Navbar />
                    <input type="text" 
                    value={search}
                    onChange={(e)=>e.value}
                    />
                    <button onClick={handleSearch}></button>
                    <Banner array={bannerArray} /> 
                    {list.map((item, index) => (
                        <RowPost key={index} category={item.category} array={item.movies} />
                    ))}
                </>}
        </>
    )
}

export default HomePage