"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards, Keyboard} from 'swiper/modules';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-cards';
//import '/styles.css';

const certifications = [
    {
        src:'/certifications/AdvancedReactCert.png',
        alt:'Advanced React Certification'
    },
    {
        src:'/certifications/FrontEndIntroCert.png',
        alt:'Introduction to Front-End Development Certification'
    },
    {
        src:'/certifications/JavascriptCert.png',
        alt:'Programming with JavaScript Certification'
    },
    {
        src:'/certifications/ReactBasicsCert.png',
        alt:'React Basics Certification'
    },
    {
        src:'/certifications/VersionControlCert.png',
        alt:'Version Control Certification'
    },
    {
        src:'/certifications/UXDesignCert.png',
        alt:'Foundations of User Experience (UX) Design Certification'
    },
]
export default function CertificationShowcase(){
    return(
        <div className=' flex flex-col h-screen justify-center gap-10'>
            <h1 className=' text-center font-semibold text-6xl sm:text-4xl'>Certifications</h1>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                keyboard={{ enabled: true,}}
                modules={[EffectCards, Keyboard]}
                className=" swiper"
            >
                {
                    certifications.map((cert, index)=> {
                        return(
                            <SwiperSlide key={index} className=' swiper-slider'>
                                <Image
                                src={cert.src}
                                alt={cert.alt}
                                width={800}
                                height={600}
                                priority/>
                            </SwiperSlide>
                    )})
                }
            </Swiper>
        </div>
    )
}