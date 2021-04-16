import React from 'react';
import './AboutMain.css';
import team from '../../../../pictures/team-doctors-standing-together-hospital-premises.jpg';
const AboutMain = () => {
    return (
        <section className="main-container" id="about">
            <div class="container mb-3" >
                <div className="text-center">
                    <h2 className="text-uppercase">About us</h2>
                </div>
            <div class="row g-4 mt-3">
                <div class="col-md-4">
                    <img className="img-fluid" src={team} alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body pt-4">
                        <h3 class="card-title">Something about us...</h3>
                        <p class="card-text para-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos [...] </p>
                        <button type="button" className="btn btn-primary mt-3">Learn more</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default AboutMain;