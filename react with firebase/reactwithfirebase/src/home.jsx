import React from 'react'

const home = () => {
  return (
    <div><>
  {/* Spinner Start */}
  <div
    id="spinner"
    className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
  >
    <div className="spinner-grow text-primary" role="status" />
  </div>
  {/* Spinner End */}
  {/* Navbar start */}
  <div className="container-fluid fixed-top px-0">
    <div className="container px-0">
      <div className="topbar">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div className="topbar-info d-flex flex-wrap">
              <a href="#" className="text-light me-4">
                <i className="fas fa-envelope text-white me-2" />
                Example@gmail.com
              </a>
              <a href="#" className="text-light">
                <i className="fas fa-phone-alt text-white me-2" />
                +01234567890
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="topbar-icon d-flex align-items-center justify-content-end">
              <a href="#" className="btn-square text-white me-2">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="btn-square text-white me-2">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="btn-square text-white me-2">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="btn-square text-white me-2">
                <i className="fab fa-pinterest" />
              </a>
              <a href="#" className="btn-square text-white me-0">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-light bg-light navbar-expand-xl">
        <a href="index.html" className="navbar-brand ms-3">
          <h1 className="text-primary display-5">Environs</h1>
        </a>
        <button
          className="navbar-toggler py-2 px-3 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars text-primary" />
        </button>
        <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
            <a href="causes.html" className="nav-item nav-link">
              Causes
            </a>
            <a href="events.html" className="nav-item nav-link">
              Events
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0 bg-secondary rounded-0">
                <a href="blog.html" className="dropdown-item">
                  Blog
                </a>
                <a href="gallery.html" className="dropdown-item">
                  Gallery
                </a>
                <a href="volunteer.html" className="dropdown-item">
                  Volunteers
                </a>
                <a href="donation.html" className="dropdown-item">
                  Donation
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div
            className="d-flex align-items-center flex-nowrap pt-xl-0"
            style={{ marginLeft: 15 }}
          >
            <a
              href=""
              className="btn-hover-bg btn btn-primary text-white py-2 px-4 me-3"
            >
              Donate Now
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Carousel Start */}
  <div className="container-fluid carousel-header vh-100 px-0">
    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to={0}
          className="active"
        />
        <li data-bs-target="#carouselId" data-bs-slide-to={1} />
        <li data-bs-target="#carouselId" data-bs-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img src="assets/img/carousel-1.jpg" className="img-fluid" alt="Image" />
          <div className="carousel-caption">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4
                className="text-white text-uppercase fw-bold mb-4"
                style={{ letterSpacing: 3 }}
              >
                WE'll Save Our Planet
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
                Protect Environment
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                  href="#"
                >
                  Join With Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/img/carousel-2.jpg" className="img-fluid" alt="Image" />
          <div className="carousel-caption">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4
                className="text-white text-uppercase fw-bold mb-4"
                style={{ letterSpacing: 3 }}
              >
                WE'll Save Our Planet
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
                Protect Environment
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                  href="#"
                >
                  Join With Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/img/carousel-3.jpg" className="img-fluid" alt="Image" />
          <div className="carousel-caption">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4
                className="text-white text-uppercase fw-bold mb-4"
                style={{ letterSpacing: 3 }}
              >
                WE'll Save Our Planet
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
                Protect Environment
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                  href="#"
                >
                  Join With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* About Start */}
  <div className="container-fluid about  py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-xl-5">
          <div className="h-100">
            <img
              src="assets/img/about-1.jpg"
              className="img-fluid w-100 h-100"
              alt="Image"
            />
          </div>
        </div>
        <div className="col-xl-7">
          <h5 className="text-uppercase text-primary">About Us</h5>
          <h1 className="mb-4">Our main goal is to protect environment</h1>
          <p className="fs-5 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
          <div className="tab-class bg-secondary p-4">
            <ul className="nav d-flex mb-2">
              <li className="nav-item mb-3">
                <a
                  className="d-flex py-2 text-center bg-white active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    About
                  </span>
                </a>
              </li>
              <li className="nav-item mb-3">
                <a
                  className="d-flex py-2 mx-3 text-center bg-white"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Mission
                  </span>
                </a>
              </li>
              <li className="nav-item mb-3">
                <a
                  className="d-flex py-2 text-center bg-white"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Vision
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3">Lorem Ipsum 1</h5>
                        <p className="mb-4">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                        </p>
                        <div className="d-flex align-items-center justify-content-start">
                          <a
                            className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                            href="#"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3">Lorem Ipsum 2</h5>
                        <p className="mb-4">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                        </p>
                        <div className="d-flex align-items-center justify-content-start">
                          <a
                            className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                            href="#"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3">Lorem Ipsum 3</h5>
                        <p className="mb-4">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                        </p>
                        <div className="d-flex align-items-center justify-content-start">
                          <a
                            className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                            href="#"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Services Start */}
  <div className="container-fluid service py-5 bg-light">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">What we do</h5>
        <h1 className="mb-0">What we do to protect environment</h1>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="service-item">
            <img
              src="assets/img/service-1.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="service-link">
              <a href="#" className="h4 mb-0">
                Raising money to help
              </a>
            </div>
          </div>
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="service-item">
            <img
              src="assets/img/service-2.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="service-link">
              <a href="#" className="h4 mb-0">
                {" "}
                close work with services
              </a>
            </div>
          </div>
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="service-item">
            <img
              src="assets/img/service-3.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="service-link">
              <a href="#" className="h4 mb-0">
                Pro Guided tours only
              </a>
            </div>
          </div>
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="service-item">
            <img
              src="assets/img/service-4.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="service-link">
              <a href="#" className="h4 mb-0">
                Protecting animal area
              </a>
            </div>
          </div>
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center">
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* Donation Start */}
  <div className="container-fluid donation py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">Donation</h5>
        <h1 className="mb-0">Your money will save our life</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="donation-item">
            <img
              src="assets/img/donation-1.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="donation-content d-flex flex-column">
              <h5 className="text-uppercase text-primary mb-4">Organic</h5>
              <a href="#" className="btn-hover-color display-6 text-white">
                Help Us More
              </a>
              <h4 className="text-white mb-4">Protect Environments</h4>
              <p className="text-white mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <div className="donation-btn d-flex align-items-center justify-content-start">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Donate !
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="donation-item">
            <img
              src="assets/img/service-2.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="donation-content d-flex flex-column">
              <h5 className="text-uppercase text-primary mb-4">Ecosystem</h5>
              <a href="#" className="btn-hover-color display-6 text-white">
                Help Us More
              </a>
              <h4 className="text-white mb-4">Protect Environments</h4>
              <p className="text-white mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <div className="donation-btn d-flex align-items-center justify-content-start">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Donate !
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="donation-item">
            <img
              src="assets/img/donation-3.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="donation-content d-flex flex-column">
              <h5 className="text-uppercase text-primary mb-4">Recycling</h5>
              <a href="#" className="btn-hover-color display-6 text-white">
                Help Us More
              </a>
              <h4 className="text-white mb-4">Protect Environments</h4>
              <p className="text-white mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <div className="donation-btn d-flex align-items-center justify-content-start">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Donate !
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center">
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              All Donation
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Donation End */}
  {/* Counter Start */}
  <div
    className="container-fluid counter py-5"
    style={{
      background:
        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(img/volunteers-bg.jpg) center center",
      backgroundSize: "cover"
    }}
  >
    <div className="container py-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">Achievements</h5>
        <p className="text-white mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter-item text-center border p-5">
            <i className="fas fa-thumbs-up fa-4x text-white" />
            <h3 className="text-white my-4">Beavers Saved</h3>
            <div className="counter-counting">
              <span
                className="text-primary fs-2 fw-bold"
                data-toggle="counter-up"
              >
                3600
              </span>
              <span className="h1 fw-bold text-primary">+</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter-item text-center border p-5">
            <i className="fas fa-file-invoice-dollar fa-4x text-white" />
            <h3 className="text-white my-4">Funds Collected</h3>
            <div
              className="counter-counting text-center border-white w-100"
              style={{ borderStyle: "dotted", fontSize: 30 }}
            >
              <span
                className="text-primary fs-2 fw-bold"
                data-toggle="counter-up"
              >
                513
              </span>
              <span className="h1 fw-bold text-primary">$</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter-item text-center border p-5">
            <i className="fas fa-user fa-4x text-white" />
            <h3 className="text-white my-4">Volunteer</h3>
            <div
              className="counter-counting text-center border-white w-100"
              style={{ borderStyle: "dotted", fontSize: 30 }}
            >
              <span
                className="text-primary fs-2 fw-bold"
                data-toggle="counter-up"
              >
                713
              </span>
              <span className="h1 fw-bold text-primary">+</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter-item text-center border p-5">
            <i className="fas fa-heart fa-4x text-white" />
            <h3 className="text-white my-4">Days of Help</h3>
            <div
              className="counter-counting text-center border-white w-100"
              style={{ borderStyle: "dotted", fontSize: 30 }}
            >
              <span
                className="text-primary fs-2 fw-bold"
                data-toggle="counter-up"
              >
                487
              </span>
              <span className="h1 fw-bold text-primary">+</span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center">
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              Join With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Counter End */}
  {/* Causes Start */}
  <div className="container-fluid causes py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">Recent Causes</h5>
        <h1 className="mb-4">The environment needs our protection</h1>
        <p className="mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="assets/img/causes-4.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="causes-link pb-2 px-3">
                <small className="text-white">
                  <i className="fas fa-chart-bar text-primary me-2" />
                  Goal: $3600
                </small>
                <small className="text-white">
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  Raised: $4000
                </small>
              </div>
              <div className="causes-dination p-2">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                  href="#"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span>65%</span>
              </div>
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">First environments activity of</h4>
              <p className="mb-4">
                Help today because tomorrow you may be the one who needs more
                helping!
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="assets/img/causes-2.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="causes-link pb-2 px-3">
                <small className="text-white">
                  <i className="fas fa-chart-bar text-primary me-2" />
                  Goal: $3600
                </small>
                <small className="text-white">
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  Raised: $4000
                </small>
              </div>
              <div className="causes-dination p-2">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                  href="#"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span>75%</span>
              </div>
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">Build school for poor children.</h4>
              <p className="mb-4">
                Help today because tomorrow you may be the one who needs more
                helping!
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="assets/img/causes-3.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="causes-link pb-2 px-3">
                <small className="text-white">
                  <i className="fas fa-chart-bar text-primary me-2" />
                  Goal: $3600
                </small>
                <small className="text-white">
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  Raised: $4000
                </small>
              </div>
              <div className="causes-dination p-2">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                  href="#"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span>85%</span>
              </div>
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">
                Building clean-water system for rural poor.
              </h4>
              <p className="mb-4">
                Help today because tomorrow you may be the one who needs more
                helping!
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="assets/img/causes-1.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="causes-link pb-2 px-3">
                <small className="text-white">
                  <i className="fas fa-chart-bar text-primary me-2" />
                  Goal: $3600
                </small>
                <small className="text-white">
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  Raised: $4000
                </small>
              </div>
              <div className="causes-dination p-2">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                  href="#"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span>95%</span>
              </div>
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">
                First environments activity of this summer.
              </h4>
              <p className="mb-4">
                Help today because tomorrow you may be the one who needs more
                helping!
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Causes End */}
  {/* Events Start */}
  <div className="container-fluid event py-5">
    <div className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">Upcoming Events</h5>
        <h1 className="mb-0">
          Help today because tomorrow you may be the one who needs more helping!
        </h1>
      </div>
      <div className="event-carousel owl-carousel">
        <div className="event-item">
          <img src="assets/img/events-1.jpg" className="img-fluid w-100" alt="Image" />
          <div className="event-content p-4">
            <div className="d-flex justify-content-between mb-4">
              <span className="text-body">
                <i className="fas fa-map-marker-alt me-2" />
                Grand Mahal, Dubai 2100.
              </span>
              <span className="text-body">
                <i className="fas fa-calendar-alt me-2" />
                10 Feb, 2023
              </span>
            </div>
            <h4 className="mb-4">How To Build A Cleaning Plan</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
              consectur adip sed eiusmod tempor.
            </p>
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="event-item">
          <img src="assets/img/events-2.jpg" className="img-fluid w-100" alt="Image" />
          <div className="event-content p-4">
            <div className="d-flex justify-content-between mb-4">
              <span className="text-body">
                <i className="fas fa-map-marker-alt me-2" />
                Grand Mahal, Dubai 2100.
              </span>
              <span className="text-body">
                <i className="fas fa-calendar-alt me-2" />
                10 Feb, 2023
              </span>
            </div>
            <h4 className="mb-4">How To Build A Cleaning Plan</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
              consectur adip sed eiusmod tempor.
            </p>
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="event-item">
          <img src="assets/img/events-3.jpg" className="img-fluid w-100" alt="Image" />
          <div className="event-content p-4">
            <div className="d-flex justify-content-between mb-4">
              <span className="text-body">
                <i className="fas fa-map-marker-alt me-2" />
                Grand Mahal, Dubai 2100.
              </span>
              <span className="text-body">
                <i className="fas fa-calendar-alt me-2" />
                10 Feb, 2023
              </span>
            </div>
            <h4 className="mb-4">How To Build A Cleaning Plan</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
              consectur adip sed eiusmod tempor.
            </p>
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="event-item">
          <img src="assets/img/events-4.jpg" className="img-fluid w-100" alt="Image" />
          <div className="event-content p-4">
            <div className="d-flex justify-content-between mb-4">
              <span className="text-body">
                <i className="fas fa-map-marker-alt me-2" />
                Grand Mahal, Dubai 2100.
              </span>
              <span className="text-body">
                <i className="fas fa-calendar-alt me-2" />
                10 Feb, 2023
              </span>
            </div>
            <h4 className="mb-4">How To Build A Cleaning Plan</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
              consectur adip sed eiusmod tempor.
            </p>
            <a
              className="btn-hover-bg btn btn-primary text-white py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Events End */}
  {/* Blog Start */}
  <div className="container-fluid blog py-5 mb-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">Latest News</h5>
        <h1 className="mb-0">
          Help today because tomorrow you may be the one who needs more helping!
        </h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-xl-3">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/img/blog-1.jpg" className="img-fluid w-100" alt="" />
              <div className="blog-info">
                <span>
                  <i className="fa fa-clock" /> Dec 01.2024
                </span>
                <div className="d-flex">
                  <span className="me-3">
                    {" "}
                    3 <i className="fa fa-heart" />
                  </span>
                  <a href="#" className="text-white">
                    0 <i className="fa fa-comment" />
                  </a>
                </div>
              </div>
              <div className="search-icon">
                <a
                  href="assets/img/blog-1.jpg"
                  data-lightbox="Blog-1"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-primary text-white p-3" />
                </a>
              </div>
            </div>
            <div className="text-dark border p-4 ">
              <h4 className="mb-4">Save The Topic Forests</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/img/blog-2.jpg" className="img-fluid w-100" alt="" />
              <div className="blog-info">
                <span>
                  <i className="fa fa-clock" /> Dec 01.2024
                </span>
                <div className="d-flex">
                  <span className="me-3">
                    {" "}
                    3 <i className="fa fa-heart" />
                  </span>
                  <a href="#" className="text-white">
                    0 <i className="fa fa-comment" />
                  </a>
                </div>
              </div>
              <div className="search-icon">
                <a
                  href="assets/img/blog-2.jpg"
                  data-lightbox="Blog-2"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-primary text-white p-3" />
                </a>
              </div>
            </div>
            <div className="text-dark border p-4 ">
              <h4 className="mb-4">Save The Topic Forests</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/img/blog-3.jpg" className="img-fluid w-100" alt="" />
              <div className="blog-info">
                <span>
                  <i className="fa fa-clock" /> Dec 01.2024
                </span>
                <div className="d-flex">
                  <span className="me-3">
                    {" "}
                    3 <i className="fa fa-heart" />
                  </span>
                  <a href="#" className="text-white">
                    0 <i className="fa fa-comment" />
                  </a>
                </div>
              </div>
              <div className="search-icon">
                <a
                  href="assets/img/blog-3.jpg"
                  data-lightbox="Blog-3"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-primary text-white p-3" />
                </a>
              </div>
            </div>
            <div className="text-dark border p-4 ">
              <h4 className="mb-4">Save The Topic Forests</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="blog-item">
            <div className="blog-img">
              <img src="assets/img/blog-4.jpg" className="img-fluid w-100" alt="" />
              <div className="blog-info">
                <span>
                  <i className="fa fa-clock" /> Dec 01.2024
                </span>
                <div className="d-flex">
                  <span className="me-3">
                    {" "}
                    3 <i className="fa fa-heart" />
                  </span>
                  <a href="#" className="text-white">
                    0 <i className="fa fa-comment" />
                  </a>
                </div>
              </div>
              <div className="search-icon">
                <a
                  href="assets/img/blog-4.jpg"
                  data-lightbox="Blog-4"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-primary text-white p-3" />
                </a>
              </div>
            </div>
            <div className="text-dark border p-4 ">
              <h4 className="mb-4">Save The Topic Forests</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Gallery Start */}
  <div className="container-fluid gallery py-5 px-0">
    <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
      <h5 className="text-uppercase text-primary">Our work</h5>
      <h1 className="mb-4">We consider environment welfare</h1>
      <p className="mb-0">
        Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur
        adip sed eiusmod tempor ipsum dolor sit amet consectur adip sed eiusmod
        amet consectur adip sed eiusmod tempor.
      </p>
    </div>
    <div className="row g-0">
      <div className="col-lg-4">
        <div className="gallery-item">
          <img src="assets/img/gallery-2.jpg" className="img-fluid w-100" alt="" />
          <div className="search-icon">
            <a
              href="assets/img/gallery-2.jpg"
              data-lightbox="gallery-2"
              className="my-auto"
            >
              <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3" />
            </a>
          </div>
          <div className="gallery-content">
            <div className="gallery-inner pb-5">
              <a href="#" className="h4 text-white">
                Beauty Of Life
              </a>
              <a href="#" className="text-white">
                <p className="mb-0">Gallery Name</p>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <img src="assets/img/gallery-3.jpg" className="img-fluid w-100" alt="" />
          <div className="search-icon">
            <a
              href="assets/img/gallery-3.jpg"
              data-lightbox="gallery-3"
              className="my-auto"
            >
              <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3" />
            </a>
          </div>
          <div className="gallery-content">
            <div className="gallery-inner pb-5">
              <a href="#" className="h4 text-white">
                Beauty Of Life
              </a>
              <a href="#" className="text-white">
                <p className="mb-0">Gallery Name</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="gallery-item">
          <img src="assets/img/gallery-1.jpg" className="img-fluid w-100" alt="" />
          <div className="search-icon">
            <a
              href="assets/img/gallery-1.jpg"
              data-lightbox="gallery-1"
              className="my-auto"
            >
              <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3" />
            </a>
          </div>
          <div className="gallery-content">
            <div className="gallery-inner pb-5">
              <a href="#" className="h4 text-white">
                Beauty Of Life
              </a>
              <a href="#" className="text-white">
                <p className="mb-0">Gallery Name</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="gallery-item">
          <img src="assets/img/gallery-4.jpg" className="img-fluid w-100" alt="" />
          <div className="search-icon">
            <a
              href="vimg/gallery-4.jpg"
              data-lightbox="gallery-4"
              className="my-auto"
            >
              <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3" />
            </a>
          </div>
          <div className="gallery-content">
            <div className="gallery-inner pb-5">
              <a href="#" className="h4 text-white">
                Beauty Of Life
              </a>
              <a href="#" className="text-white">
                <p className="mb-0">Gallery Name</p>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <img src="assets/img/gallery-5.jpg" className="img-fluid w-100" alt="" />
          <div className="search-icon">
            <a
              href="assets/img/gallery-5.jpg"
              data-lightbox="gallery-5"
              className="my-auto"
            >
              <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3" />
            </a>
          </div>
          <div className="gallery-content">
            <div className="gallery-inner pb-5">
              <a href="#" className="h4 text-white">
                Beauty Of Life
              </a>
              <a href="#" className="text-white">
                <p className="mb-0">Gallery Name</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery End */}
  {/* Volunteers Start */}
  <div className="container-fluid volunteer py-5 mt-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="assets/img/volunteers-1.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                  <p className="mb-0 text-white">Communicator</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="assets/img/volunteers-3.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                  <p className="mb-0 text-white">Communicator</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="assets/img/volunteers-2.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                  <p className="mb-0 text-white">Communicator</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="assets/img/volunteers-4.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                  <p className="mb-0 text-white">Communicator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <h5 className="text-uppercase text-primary">Become a Volunteer?</h5>
          <h1 className="mb-4">
            Join your hand with us for a better life and beautiful future.
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur
            adip sed eiusmod tempor amet consectur adip sed eiusmod amet
            consectur adip sed eiusmod tempor amet consectur adip sed eiusmod
            amet consectur adip sed eiusmod tempor.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> We are friendly to
            each other.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> If you join with
            us,We will give you free training.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> Its an opportunity
            to help poor Environments.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> No goal
            requirements.
          </p>
          <p className="text-dark mb-5">
            <i className=" fa fa-check text-primary me-2" /> Joining is tottaly
            free. We dont need any money from you.
          </p>
          <a
            className="btn-hover-bg btn btn-primary text-white py-2 px-4"
            href="#"
          >
            Join With Us
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Volunteers End */}
  {/* Footer Start */}
  <div className="container-fluid footer bg-dark text-body py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item">
            <h4 className="mb-4 text-white">Newsletter</h4>
            <p className="mb-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur adipiscing
              elit.
            </p>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-0 bg-secondary w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Enter your email"
              />
              <button
                type="button"
                className="btn-hover-bg btn btn-primary position-absolute top-0 end-0 py-2 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Our Services</h4>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Ocean Turtle
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> White Tiger
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Social Ecology
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Loneliness
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Beauty of Life
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Present for You
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Volunteer</h4>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Karen Dawson
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Jack Simmons
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Michael Linden
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Simon Green
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Natalie Channing
            </a>
            <a href="">
              <i className="fas fa-angle-right me-2" /> Caroline Gerwig
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item">
            <h4 className="mb-4 text-white">Our Gallery</h4>
            <div className="row g-2">
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="assets/img/gallery-footer-1.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="vimg/gallery-footer-1.jpg"
                      data-lightbox="footerGallery-1"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="assets/img/gallery-footer-2.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="assets/img/gallery-footer-2.jpg"
                      data-lightbox="footerGallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="assets/img/gallery-footer-3.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="assets/img/gallery-footer-3.jpg"
                      data-lightbox="footerGallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="assets/img/gallery-footer-4.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="assets/img/gallery-footer-4.jpg"
                      data-lightbox="footerGallery-4"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="assets/img/gallery-footer-5.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="assets/img/gallery-footer-5.jpg"
                      data-lightbox="footerGallery-5"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="assets/img/gallery-footer-6.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="img/gallery-footer-6.jpg"
                      data-lightbox="footerGallery-6"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-4 text-center text-md-start mb-md-0">
          <span className="text-body">
            <a href="#">
              <i className="fas fa-copyright text-light me-2" />
              Your Site Name
            </a>
            , All right reserved.
          </span>
        </div>
        <div className="col-md-4 text-center">
          <div className="d-flex align-items-center justify-content-center">
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-pinterest" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-0">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center text-md-end text-body">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>{" "}
          Distributed By{" "}
          <a className="border-bottom" href="https://themewagon.com">
            ThemeWagon
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
  >
    <i className="fa fa-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>
</div>
  )
}

export default home