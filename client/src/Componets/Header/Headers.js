import React, { useEffect, useState } from 'react'
import "./headerss.css"



function Headerrs () {
    
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
  return (
    <div>
        <nav class='navone'>
          <a>LIVRAISON GRATUITE À PARTIR DE 89€ ( FRANCE, BELGIQUE ET LUXEMBOURG EN MONDIAL RELAY )</a>
        </nav>
        <nav class='navtwo'>
          <div class='nav-two'>
          <a>ÇA HABILLE AVEC DU STYLE !</a>
            <ul class="navbar-nav d-flex flex-row" >
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.facebook.com/brahim.kharmachi.92/">
                        <i class="fab fa-facebook-f text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.instagram.com/brahim_kharmachi/">
                        <i class="fab fa-instagram text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.linkedin.com/in/brahim-kharmachi-1993kb/">
                        <i class="fab fa-linkedin text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-whatsapp text-blue"></i>
                    </a>
                </li>
                </ul>
          </div>
        </nav>
        <div class="flexcenter">
        <nav class={isSticky ? 'sticky' : ''}>
          <div class="navthree">
          <div>
            <a href='/'> <img  src='./brahimkharmachi-logo.gif' alt='logonavthree'  /> </a>
          </div>
          <div class='linknav' >
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/addproduit'>Ajouter un produit</a>
              </li>
            </ul>
          </div>  
          </div>
        </nav>
        </div>
    </div>
  )
}

export default Headerrs