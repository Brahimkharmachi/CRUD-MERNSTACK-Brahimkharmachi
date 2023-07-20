import React from 'react'
import {MDBFooter, MDBContainer,  MDBIcon,MDBBtn} from 'mdb-react-ui-kit';



function Footerrs() {
 
  return (
    
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/brahim.kharmachi.92/'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/brahim_kharmachi/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/brahim-kharmachi-1993kb/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          
         
        </section>
      

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Brahim Kharmachi
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footerrs