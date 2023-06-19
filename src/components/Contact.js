import React from "react";
import { useState } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const Contact = () => {

  const [con,setCon] = useState({
    Facebook:"",
    Email:"",
    Github:""
  })
  const {Facebook,Email,Github} =con
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                My Contact
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl p-6 pb-16 lg:pb-20 gap-y-6 flex flex-col items-start"
          >
            <input value={Facebook}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Facebook :  Ridwan A-wae"
            />
            <input value={Email}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Email :  ridwandev.219@gmail.com"
            />
             <input value={Github}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Github :  Ridwan-A-wae"
            />
            <button target="_blank" href="https://www.facebook.com/waaaaaan" className="btn btn-lg"><a target="_blank" href="https://www.facebook.com/waaaaaan/">
              Send me
              </a></button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
