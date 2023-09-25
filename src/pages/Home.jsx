import React from 'react'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
      <div>
          <div className="headerImage">
              <img src="https://blogstudio.s3.theshoppad.net/thousand-helmets/d14c0d7a4ace1baffaa4b14890d80b27.jpg" alt="three people on bikes" />
          </div>
          <div className="bikeMenu">
              <div class="rowOne">
                  <div class="bikeSales">
                      <h1>NEW BIKES</h1>
                  <div className="buttonSales">
                          <Link to={"/bikes"}>
                              <button>Shop Now</button>
                          </Link>
                  </div>
                  </div>
                  <div class="bikeRepairs">
                      <h1>REPAIRS</h1>
                <div className="buttonRepairs">
                          <Link to={"https://calendly.com/kevcook11/repair-service-appointments?month=2023-09"}>
                              <button>Schedule Repair</button>
                          </Link>
                </div>      
                  </div>
              </div>
              <div class="rowTwo">
                  <div class="bikeParts">
                      <h1>PARTS</h1>
                      <Link to={"/parts"}>
                      <button className="shopButton">Shop Now</button>
                      </Link>
                  </div>
                  <div class="bikeAccessories centerButton">
                      <h1>ACCESSORIES</h1>
                      <Link to={"/accessories"}>
                      <button className='learnMoreButton'>Learn More</button>
                      </Link>
                  </div>
              </div>
          </div>
          <div className='bikesImage'>
          <img src="https://assets.nationbuilder.com/ciclavia/pages/3768/meta_images/original/49594062862_118065eed4_k_closeup.jpg?1622048916" alt="kid riding bike" />
          </div>
          <div className="storeInfo">
            <div className="storeHeader">
            <h1>Visit Our Store</h1>
            </div>
            <div className="storeDetails">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/QeX2SxjrBUDQSyWNgk9kvA/o.jpg" alt="One Stop Cycles Store Front" />
              <div className="contactInfo">
                  <div className="address">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                      </svg>
                      <h2>Address</h2>
                      <h4>14922 Hawthorne Blvd</h4>
                      <h4>Lawndale, CA 90260</h4>
                  </div>
                  <div className="phoneNumber">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      <h2>Phone Number</h2>
                      <h4>(310) 676-1458</h4>
                  </div>
                  <div className="hours">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <h2>Hours</h2>
                      <table className='table'>
                        <tbody className='tableBody'>
                            <tr className='tableMon'>
                                <td>MONDAY</td>
                                <td>9 AM–3 PM, 4–6:30 PM</td>
                            </tr>
                            <tr className='tableTues'>
                                <td>TUESDAY</td>
                                <td>9 AM–3 PM, 4–6:30 PM</td>
                            </tr>
                            <tr className='tableWed'>
                                <td>WEDNESDAY</td>
                                <td>9 AM–3 PM, 4–6:30 PM</td>
                            </tr>
                            <tr className='tableThurs'>
                                <td>THURSDAY</td>
                                <td>9 AM–3 PM, 4–6:30 PM</td>
                            </tr>
                            <tr className='tableFri'>
                                <td>FRIDAY</td>
                                <td>9 AM–3 PM, 4–6:30 PM</td>
                            </tr>
                            <tr className='tableSat'>
                                <td>SATURDAY</td>
                                <td>9 AM–3 PM, 4–6:30 PM</td>
                            </tr>
                            <tr className='tableSun'>
                                <td>SUNDAY</td>
                                <td>CLOSED</td>
                            </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
              </div> 
          </div>
      </div>
  )
}

export default Home;
