/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* text */}
          <motion.div 
          
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          
          >
            <div style={{display:"flex"}}>
            <div
            style={{width:"600px"}}>
            <a href="#"><img src="https://images.unsplash.com/photo-1575314027842-c33656c1f3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" title="source: imgur.com" /></a>              
          </div>
            <div style={{marginLeft:"40px",height:"300px"}}>
            <div className="flex-1">
              <h2 className="h2 text-accent">About Me.</h2>
              <h3 className="h3 mb-4">
                I'm a Junior Full-Stack Developer 
              </h3>
              <p className="mb-6">
              My name is Ridwan. I'm 23 years old and I'm from Thailand. I aspire to become a skilled full-stack developer. Currently, I am continuously learning to achieve my goal.
              </p>
            </div>
            {/* stats */}
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"><a target="_blank" href="https://www.facebook.com/waaaaaan/">
              Contact me
              </a></button>
              <a href="" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
            </div>
            
    
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
