import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function Feedback() {
  return (
    <div>
      <Header />
      <div className="container" id="mainTitleArea">
        <div className="row">
          <div className="col">
            <h1 id="articleTitle" style={{ fontSize: "xxx-large" }}>Leave Feedback</h1>
            <br />
          </div>
        </div>
        <svg height="12" id="articleBreak" width="100%" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>

      <div className="container mt-5">
        <p>We appreciate your feedback on DolFin. Please take a moment to answer the following questions:</p>

        <form action="/feedback" method="post">
          {/* Question 1 */}
          <div className="mb-3">
            <label htmlFor="features">1. On a scale of 1 to 5, how would you rate the ease of use of DolFin?</label>
            <select className="form-select" id="features" name="features">
              <option value="1">1 - Very Difficult</option>
              <option value="2">2 - Difficult</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - Easy</option>
              <option value="5">5 - Very Easy</option>
            </select>
          </div>

          {/* Question 2 */}
          <div className="mb-3">
            <label htmlFor="security">2. How satisfied are you with the security features of DolFin? (1 - Not Satisfied, 5 - Very Satisfied)</label>
            <select className="form-select" id="security" name="security">
              <option value="1">1 - Not Satisfied</option>
              <option value="2">2 - Somewhat Satisfied</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - Satisfied</option>
              <option value="5">5 - Very Satisfied</option>
            </select>
          </div>

          {/* Question 3 */}
          <div className="mb-3">
            <label htmlFor="recommend">3. How likely are you to recommend DolFin to others? (1 - Not Likely, 5 - Very Likely)</label>
            <select className="form-select" id="recommend" name="recommend">
              <option value="1">1 - Not Likely</option>
              <option value="2">2 - Somewhat Likely</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - Likely</option>
              <option value="5">5 - Very Likely</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="features_valuable">1. What features of DolFin do you find most valuable?</label>
            <select className="form-select" id="features_valuable" name="features_valuable">
              <option value="ease-of-use">Ease of Use</option>
              <option value="security">Security Features</option>
              <option value="transactions">Transaction Management</option>
              <option value="others">Other (please specify)</option>
            </select>
          </div>

          {/* Question 2 */}
          <div className="mb-3">
            <label htmlFor="competitors_do_well">2. What do competitors' products do well in comparison to DolFin?</label>
            <textarea className="form-control" id="competitors_do_well" name="competitors_do_well" rows="3"></textarea>
          </div>

          {/* Question 3 */}
          <div className="mb-3">
            <label htmlFor="similarities">3. What aspects do you find similar between competitors' products and DolFin?</label>
            <textarea className="form-control" id="similarities" name="similarities" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit Feedback</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Feedback;
