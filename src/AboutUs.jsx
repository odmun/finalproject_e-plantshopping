import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <p className="about-us-description">Where Nature Nurtures Community</p>
      
      <p className="about-us-content">
        Born from a love of urban gardening, EcoUrban reimagines plant shopping as an eco-conscious experience. 
        We curate resilient plants that thrive in modern living spaces while actively restoring urban biodiversity. 
        Our collection includes rare heirloom varieties alongside smart-tech planters that help even novice plant parents 
        cultivate their personal jungles with confidence.
      </p>

      <p className="about-us-content">
        What makes us different? Our Plant Concierge service. Share your space's light conditions and lifestyle through 
        our digital consultation tool, and receive tailor-made plant recommendations. Join our monthly "Grow Together" 
        workshops where city dwellers exchange propagation tips and combat plant parenthood challenges as a community.
      </p>

      <p className="about-us-content">
        Beyond commerce, we operate a Plant Amnesty program - adopt rescued plants or donate ones needing rehabilitation. 
        Every purchase funds our Urban Canopy Initiative, planting trees in food desert neighborhoods. Together, we're 
        growing more than plants - we're cultivating connected, greener communities.
      </p>
    </div>
  );
}

export default AboutUs;