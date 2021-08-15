import '../styles/globals.css'
import React, {useEffect} from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    let scroll;
    import("locomotive-scroll/dist/locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            smoothMobile: false,
            resetNativeScroll: true
        });
    });

    // `useEffect`'s cleanup phase
    return () => scroll.destroy();
});

  return <Component {...pageProps} />
}

export default MyApp
