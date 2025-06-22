"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react"

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <motion.div
          initial={{ x: 200, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backInOut" }}
        >
          <CustomButton
            title='Sign in'
            btnType='button'
            containerStyles='text-primary-blue rounded-xl bg-blue-200 min-w-[130px]'
          />
      </motion.div>
    </nav>
  </header>
);

export default NavBar;
