import React from 'react'
import ReactPlayer from 'react-player'
import { Container, Icon } from './stayle';
import { CiPlay1 } from 'react-icons/ci'
import { BsPause } from 'react-icons/bs'
import { useState } from 'react';


const MovieModal = ({ isModalOpen, setIsModalOpen }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Container className='movie-modal' title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ReactPlayer width={'900px'} height={'500px'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={isPlaying} />
                {
                    !isPlaying ? <Icon onClick={()=> setIsPlaying(true)}>
                        <CiPlay1 />
                    </Icon> 
                    : <Icon onClick={()=> setIsPlaying(false)}>
                        <BsPause />
                    </Icon>
                }


            </Container>
        </div>
    )
}

export default MovieModal