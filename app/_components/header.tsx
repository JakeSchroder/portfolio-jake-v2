'use client'
import va from '@vercel/analytics';

export default function Header(){
    return(
        <div className=" flex items-center justify-center fixed gap-5 w-screen backdrop-blur-lg bg-white/50 h-24">
            <a className=" btn-nav" href='https://github.com/JakeSchroder' onClick={()=>va.track('Github')}>Github</a>
            <a className=" btn-nav" href="https://www.linkedin.com/in/jakeschroder/" onClick={()=>va.track('Linkedin')}>LinkedIn</a>
            <a className=" btn-nav" href="https://app.enhancv.com/share/2fb5e132/" onClick={()=>va.track('Resume')}>Resume</a>
        </div>
    )
}