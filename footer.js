import React, { useEffect, useState } from 'react';
import "./footer.css";
import { BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';
const Footer=()=>{
    const d=new Date()
const year=d.getFullYear()
console.log(year)
    const[time,setTime]=new useState(year)
    useEffect(()=>{setInterval(()=>setTime(year),1000)},[])
    return(
        <div className='footer'>
            <div className='footer_padding'>
<div className='footer_link'>
    <div className='footer_link_div'>
<h4 >
    Product
</h4>
<a>
Paints
<div class="dropdown-menu">
   <ul><a>-UnderCoats</a></ul>
   <ul><a>-Primer</a></ul>
</div>
</a>
<a>
TillingSolutioons
<div class="dropdown-menu">
   <ul><a>-Tile Adhesives</a></ul>
   <ul><a>-Tile Grout</a></ul>
   <ul><a>-Tile Cleaner</a></ul>

</div>
</a>
<a>
Construction Chemicals
<div class="dropdown-menu">
   <ul><a>-Water Proofing</a></ul>
   <ul><a>-Bonding Agents</a></ul>
   <ul><a>-Admixture</a></ul>
</div>
</a>
<a>
    Kitchen Sinks
    <div class="dropdown-menu">
   <ul><a>-Glossy Finish</a></ul>
   <ul><a>-Matt Finish</a></ul>
   <ul><a>-Handmade Sinks</a></ul>
</div>
</a>
    </div>
   
    <div className='footer_link_div'>
        <h4>
            Address
        </h4>
        <p>
            8/A,Natesan Nagar,
        </p>
        <p>27th Street,Ashtalakshmi Nagar</p>
        <p>Alapakkam</p>
        <p>Chennai-600116</p>
    </div>
    <div className='footer_link_div'>
        <h4>
            Contact
        </h4>
        <p>Phone:9875547347</p>
        <p>Whatsapp:9776735253</p>
        <p>Email:tiopaints@gmail.com</p>
    </div>
    <div className='footer_link_div'>
        <h4>Social Media</h4>
        <div className='socialmedia'>
       <p><BsFacebook /></p> 
        <p><BsInstagram  /></p>
        <p><BsTwitter  /></p>
        </div>
    </div>
</div>
<hr></hr>
<div className='footer_below'>
    <div className='footer_copyright'>
    <p>{time} All rights are reserved</p>
    </div>
    <div className='footer_below_links'>
    <p>Privacy</p>

    <p>Cookie Declaration</p>
    </div>
</div>
</div>
        </div>
    )
}
export default Footer;