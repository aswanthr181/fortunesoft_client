import React, { useEffect, useState } from 'react'
import './Banner.css'
function Banner({ array }) {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        setInterval(() => {
            fetchBanner();
        }, 3000)
    }, [])

    const fetchBanner = () => {
        const random = Math.floor(Math.random() * array.length)
        setBanner(array[random])
    }
    return (
        <>
        {banner?
            <div className="banner"
            style={{
                backgroundImage: `url(${banner.poster})`
            }}>
            <div className="content">
                <h1 className="title">{banner.title} </h1>
                <div className='banner_button'>

                    <h1>{banner.slug}</h1>
                    <div>
                        <h5>
                            imdb_ 
                            { banner.
                                imdb_rating
                            }*</h5>
                    </div>
                    <h5>{banner.length}</h5>
                </div>

            </div>

        </div>:''
        }
        </>
        
    )
}

export default Banner