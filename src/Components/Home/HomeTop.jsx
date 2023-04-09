import React from 'react'
import { Box, border } from '@chakra-ui/react'
const HomeTop = () => {
  return (
    <div >
      <Box className="promo-section" style={{ borderRadius: "20px", }}>
        <div className="container" >
          <div className="row justify-content-center"  >
            <div className="col-md-10 col-lg-6" >
              <div className="section-heading text-center aos-init aos-animate" data-aos="fade-up" style={{ color: "white", borderRadius: "20px", }}>
                <h2>Quality at the greatest value for money!</h2>
                <p>Social Media Marketing is the best technique to boost and increase your brand value. </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pro-b">
              <div className="pica-re" data-aos="fade-up" data-aos-delay="100">
                <div className="promo-card">
                  <h3 className="display-5 fw-bold mb-4"><i className="fa-solid fa-user text-warning me-2"></i> 12K+
                  </h3>
                  <h3>Active Users</h3>
                  <p>More than 12,000+ customers, businesses including the world's most valuable brands, fastest growing companies and largest enterprises use the Indiansmmservices to improve their reach on social media.</p>
                </div>

              </div>
            </div>
            <div className="pro-b">
              <div className="pica-re" data-aos="fade-up" data-aos-delay="150">
                <div className="promo-card">
                  <h3 className="display-5 fw-bold mb-4"><i className="fa-solid fa-conveyor-belt-boxes text-warning me-2"></i> 100K+
                  </h3>
                  <h3> Orders Completed</h3>
                  <p>We are the best Smm service provider in India for the past 8 years. Indiansmmservices provide specialized service delivery platform. Our services such as cheap followers, likes, subscribers, views and many more help people to gain fame on social media.</p>
                </div>

              </div>
            </div>
            <div className="pro-b">
              <div className="pica-re" data-aos="fade-up" data-aos-delay="200">
                <div className="promo-card">
                  <h3 className="display-5 fw-bold mb-4"><i className="fa-solid fa-circle-dollar text-warning me-2"></i>
                    $0.01/1K</h3>
                  <h3>Prices Starting From </h3>
                  <p>Indian Smm Services provider offers all types of social media marketing services at very competitive prices to users. We offer reliable, fast and cost effective smm services all over the world with spectacular features.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Box>
    </div>
  )
}

export default HomeTop