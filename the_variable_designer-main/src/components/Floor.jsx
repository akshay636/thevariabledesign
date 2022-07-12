import React from 'react'
import '../styles/floor.css'
const Floor = () => {
  return (
    <section className='container mt-5' >
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-xl-8 text-center">
        <h3 class=" text-light mt-4">What our clinet says</h3>
      </div>
    </div>
  
    <div class="row text-center d-flex align-items-stretch">
      <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
        <div class="card testimonial-card">
          <div class="card-up" style={{backgroundColor: "#9d789b"}}></div>
          <div class="avatar mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              class="rounded-circle img-fluid" />
          </div>
          <div class="card-body">
            <h4 class="mb-4">Rudransh chouksey</h4>
            <hr />
            <p class="dark-grey-text mt-4">
              <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci,
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
        <div class="card testimonial-card">
          <div class="card-up" style={{backgroundColor: "#7a81a8"}}></div>
          <div class="avatar mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              class="rounded-circle img-fluid" />
          </div>
          <div class="card-body">
            <h4 class="mb-4">Vedant Kumar</h4>
            <hr />
            <p class="dark-grey-text mt-4">
              <i class="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
              repudi mollitia architecto.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-0 d-flex align-items-stretch">
        <div class="card testimonial-card">
          <div class="card-up" style={{backgroundColor: "#6d5b98"}}></div>
          <div class="avatar mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              class="rounded-circle img-fluid" />
          </div>
          <div class="card-body">
            <h4 class="mb-4">Vaibhav Kumar</h4>
            <hr />
            <p class="dark-grey-text mt-4">
              <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
              aliquam repellat rem unde ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Floor