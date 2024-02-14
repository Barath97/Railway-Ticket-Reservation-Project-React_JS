import React from 'react';
import footer1 from '../image/footer1.png';
import F2 from "../image/F2.png"

function Footer() {
  return (
    <div className='footerClass'>
        <footer>
            <img src={footer1} style={{ width: '100%' }} />
            <img src={F2} style={{ width: '100%' }} />
        </footer>
        
    </div>
  )
}

export default Footer