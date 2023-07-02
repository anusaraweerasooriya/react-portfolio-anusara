import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const Testimonials = () => {

  const testamonialStyles = `
    mx-auto
    relative
    max-w-[400px]
    h-[350px]
    flex
    flex-col
    justify-end
    pt-16
    mt-48
    before:absolute
    before:top-[-120px]
    before:-ml-[110px]
    before:left-1/2
  `;

  return (
    <section
      id="testimonials"
      className="pt-32 pb-16"
    >
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0}
        }}
      >
        <p 
            className="
                font-playfair
                font-semibold
                text-4xl
                text-red
                mb-5
            "
        >
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">
            This is text area which will expose 
            my testimonials to user who enters this section.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div 
        className="
          md:flex
          md:justify-between
          gap-8
        "
      >

      </div>

    </section>
  );
}

export default Testimonials