import React from 'react'
import styles from './Expansion.module.css'
import Image from 'next/image';
import Map from '../../assets/images/Expansion/map.png'
import { FaArrowRight } from "react-icons/fa6";


const components = () => {
  return (
    <section className={`${styles.Expansionsection}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className={`${styles.Expansionsectionleft}`}>
              <h3>Now Epanding To Multiple <br />
                Cities Across USA, GCC Region & Asia</h3>
              <Image src={Map} alt='example' />
              <div className={`${styles.CitiesInfo}`}>
                <div className={`${styles.USAIH5}`}>
                  <Image alt='example' />
                  <h5> USA </h5>
                  <div className={`${styles.USAContent}`}>
                    <span>+191 038 40703</span>
                    <p>832 via Palermo, San Ramon, CA, 94583, USA </p>
                  </div>
                </div>
                <div className={`${styles.UAEIH5}`}>
                  <Image alt='example' />
                  <h5> UAE </h5>
                  <div className={`${styles.UAEContent}`}>
                    <span>+971 4 242 1375 <br /> +971 4 242 1375</span>
                    <p>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE  </p>
                  </div>
                </div>
                <div className={`${styles.PAKISTANIH5}`}>
                  <Image alt='example' />
                  <h5> Pakistan </h5>
                  <div className={`${styles.PAKISTANContent}`}>
                    <span>+92 335 549 2225</span>
                    <p>Office Nos: 101, 102 & 103, NASTP Sierra, Shahrah-e-Faisal Rd, Faisal Cantonment, Karachi, Pakistan </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 mt-5 p-5 ${styles.Expansionsectionright}`}>
            <div className={styles.FormContainer}>
              <form action="" className={styles.ContactForm}>
                <h2>Got an Idea? <br /> Let’s get started </h2>
                <h3> Fill out the From </h3>
                <div className={`row ${styles.row}`}>
                  <div className={styles.Formgroup}>
                    <label htmlFor="" className={styles.label}>Your Name*</label>
                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className={styles.Formgroup}>
                      <label htmlFor="" className={styles.label}>Your Email*</label>
                      <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                </div>
                <div className={`row ${styles.row}`}>
                  <div className={styles.Formgroup}>
                    <label htmlFor="" className={styles.label}>Phone Number*</label>
                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className={styles.Formgroup}>
                    <label htmlFor="" className={styles.label}>Phone Number</label>
                    <select name="" id="" className={` ${styles.Input}`}>
                      <option value="">0 - 3000 AED</option>
                      <option value="">3000 AED - 6000 AED</option>
                      <option value="">6000 AED - 8000 AED</option>
                    </select>
                  </div>
                </div>
                <div className={styles.Formgrouptextarea}>
                  <label htmlFor="" className={styles.label}>Message</label>
                  <textarea name="" id="" cols="118" rows="5" className={styles.textarea} />
                </div>
                <div className={styles.button}>
                  <span className={styles.sendtext}>Send</span>
                  <span className={styles.sendIcon}>
                    <FaArrowRight className={styles.sIcon} />
                  </span>
                  <p className={styles.formpara}>if you have any RFP requirement please share with us at discover@digitalgravity.ae and if you are looking for a career related enquiry please check our Career section.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default components