import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import ys from '../../asserts/ys.svg'
const Trust = () => {

    const styles = {
        header: `font-bold font-black text-3xl font-extrabold  text-slate-900 pb-8`,
        title: `proStyle relative inline-flex items-center w-full px-2 py-3 text-xl
        inline-block text-1xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-medium`,
        body: `text-base font-bold text-gray-500 dark:text-white  pl-11 pb-3`
    }
    return(
        <>
        <section className='bg-slate-50 pt-5 pb-5'>
            <div className='bg-card shadow-md'>
            <div class="lg:grid lg:grid-cols-3 gap-4 pt-8 pb-8 pr-11 sm:pl-20">
             <div class="col-span-2 ...">

                <h2 className={styles.header}>Why do you trust Korgroups Blockers</h2>
                
                <h3 className={styles.title}>
                <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                <BsCheckLg />
                </div>
                    Best Price
                    
                </h3>
                <p className={styles.body}>We make sure both buyer and seller agree on the best price.</p>
                
                <h3 className={styles.title}>
                    <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                    <BsCheckLg />
                        </div>
                    Legal Docements
                </h3>
                <p className={styles.body}>Our loyers prove the documents with titled </p>
                
                <h3 className={styles.title}>
                <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                <BsCheckLg />
                        </div>
                    Instant Cash
                </h3>
                <p className={styles.body}>Instant Cash on your preferred mode of payment</p>

                    <div className={styles.title}>
                        <div className="icons1 w-5 h-8 mr-2 fill-current text-lg pt-2">
                        <BsCheckLg />
                        </div>
                            Kenya
                               
                        </div>
                        <p className={styles.body}>Instant Cash on your preferred mode of payment</p>


            </div>
            <div className='cach'>
                <img src={ys} class="p-2 rounded-t-l pt-28 w-30" alt="" />
            </div>
            </div>
            </div>

        </section>

        <section className='caerd2 pt-20 pb-20'>
        <h1
          className=" lg:text-3xl md:mb-0 mb-6  font-extrabold lg:leading-normal text-center
         "
        >
          <span className="text-teal-400">Korgroups</span> is the First and Largest Online Brokerage Petrol Stations Experts
        </h1>
        </section>
        </>
    )
}

export default Trust;
