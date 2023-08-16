"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards, Keyboard} from 'swiper/modules';
import {certifications} from '../_lib/constants'
import 'swiper/css';
import 'swiper/css/effect-cards';

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