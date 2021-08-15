import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import React, {useEffect} from 'react';
import { gsap } from "gsap";
import Contenido from './pc.png'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    console.log("useEfecto contenido");
    console.log(scroll);
      
      gsap.to('.c_1', {
        duration:3,
        y: 0,
        ease: "none",
        opacity: 1,
        stagger: 1,
        scrollTrigger:{
            scroller: ".containerScroll",
            trigger: `.c_1`,
            //trigger: '.c_1',
            start: 'top bottom',
            end: 'center 70%',
            markers:true,     
            scrub: 1,
            toggleActions: 'restart pause reverse reset'
        }
        
    });

    gsap.to('.c_1', {
      duration:3,
      y: 0,
      ease: "none",
      opacity: 1,
      stagger: 1,
      scrollTrigger:{
          scroller: ".containerScroll",
          trigger: `.c_2`,
          //trigger: '.c_1',
          start: 'top bottom',
          end: 'center 70%',
          markers:true,     
          scrub: 1,
          toggleActions: 'restart pause reverse reset'
      }
      
  });

  gsap.to('.c_1', {
    duration:3,
    y: 0,
    ease: "none",
    opacity: 1,
    stagger: 1,
    scrollTrigger:{
        scroller: ".containerScroll",
        trigger: `.c_3`,
        //trigger: '.c_1',
        start: 'top bottom',
        end: 'center 70%',
        markers:true,     
        scrub: 1,
        toggleActions: 'restart pause reverse reset'
    }
    
});
    ScrollTrigger.refresh();
 
 }, []);

  return (
    <div className={`${styles.containerScroll} containerScroll`} data-scroll-container>
    <div className={styles.container}>
        <div className={`${styles.acceso_contenido} c_1 acceso_contenido`}>
              <div className={`${styles.img_thumb} img_thumb`}>
                <Image src={Contenido} alt="Picture of the author" />
              </div>
              <div className={`${styles.titulo} titulo`}>
                  <h4>Un titulo de prueba
                      <a className={`${styles.verHome} verHome`}>ver</a>
                  </h4> 
              </div>
          </div>
          <div className={`${styles.acceso_contenido} c_2 acceso_contenido`}>
            <div className={`${styles.img_thumb} img_thumb`}>
            <Image src={Contenido} alt="Picture of the author" />
            </div>
            <div className={`${styles.titulo} titulo`}>
                <h4>Un titulo de prueba
                    <a className={`${styles.verHome} verHome`}>ver</a>
                </h4> 
            </div>
        </div>
        <div className={`${styles.acceso_contenido} c_3 acceso_contenido`}>
            <div className={`${styles.img_thumb} img_thumb`}>
            <Image src={Contenido} alt="Picture of the author" />
            </div>
            <div className={`${styles.titulo} titulo`}>
                <h4>Un titulo de prueba
                    <a className={`${styles.verHome} verHome`}>ver</a>
                </h4> 
            </div>
        </div>
    </div>
    </div>
  )
}
