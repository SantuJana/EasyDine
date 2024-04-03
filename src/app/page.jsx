"use client"

import Image from "next/image";
import backgroundGif from '@/assets/banner.gif';
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();

  const gotoHome = () =>{
    if(mobile === '7063357560' && password === '12345'){
      router.replace('/home');
    } else {
      alert('Invalid Credential');
    }
  }

  return (
    <>
      <div style={{...styles.background, }}>
        <div style={styles.card}>
          <h3 style={styles.title} className="mb-5">Easy Dine</h3>
          <label htmlFor="mobile" className="form-label">Mobile No</label>
          <input type="number" name="mobile" className="form-control mb-2" id="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="container text-center">
            <button type="button" className="btn btn-warning mt-5" onClick={ gotoHome }>Signin</button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  "background": {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${backgroundGif.src})`,
    backgroundAttachment:'fixed', 
    backgroundRepeat:"no-repeat", 
    backgroundSize:"cover", 
    backgroundPosition:'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 400,
    minHeight: 500,
    // border: '1px solid #333333',
    borderRadius: 10,
    boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, .5)',
    backgroundColor: 'white',
    padding: 30
    // position: 'absolute',
    // right: 50,
    // top: 50
  },
  title: {
    color: '#009688',
    textAlign: 'center',
  }
}
