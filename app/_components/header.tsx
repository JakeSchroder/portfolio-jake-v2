'use client'
import mixpanel from 'mixpanel-browser';

export default function Header(){
    mixpanel.init('ca520d84479abab06d5e788d45bd2dde', { debug: true, track_pageview: true, persistence: 'localStorage', ignore_dnt: true });

    return(
        <div className=" flex items-center justify-center fixed gap-5 w-screen backdrop-blur-lg bg-white/50 h-24">
            <a className=" btn-nav" href='https://github.com/JakeSchroder' onClick={()=>mixpanel.track('Github')}>Github</a>
            <a className=" btn-nav" href="https://www.linkedin.com/in/jakeschroder/" onClick={()=>mixpanel.track('Linkedin')}>LinkedIn</a>
            <a className=" btn-nav" href="https://app.enhancv.com/share/2fb5e132/" onClick={()=>mixpanel.track('Resume')}>Resume</a>
        </div>
    )
}