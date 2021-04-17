import React from 'react';
import ambulance from '../../../pictures/ambulance.png';
import equipment from '../../../pictures/blood-pressure.png';
import prodoctor from '../../../pictures/doctor.png';
import bestservice from '../../../pictures/health-care.png';
import SpecialCare from '../SpecialCare/SpecialCare';

import './SpecialMediCare.css';

const specialData = [
    {
        name: 'Fastest Ambulance',
        describe: 'Ambulance services are the primary providers of a 24/7 response to medical and trauma related emergencies. They provide a disciplined and organized system, allowing a timely response of appropriately qualified health care workers – often to potential or confirmed medical emergencies.',
        img: ambulance

    },
    {
        name: 'Newest Equipment',
        describe: 'Technology and medicine have gone hand and hand for many years. Consistent advances in pharmaceuticals and the medical field have saved millions of lives and improved many others. As the years pass by and technology continues to improve, there is no telling what medical advances will come next. Here are the top 5 new medical technologies in 2019: 1.  CRISPR, 2.  Telehealth, 3.  Virtual reality, 4.  Precision medicine, 5.  Health wearables',
        img: equipment
    },
    {
        name: 'Profesional Doctors',
        describe: 'Assess symptoms, Diagnose conditions.Prescribe and administer treatment, Provide followup care of patients refer them to other providers and interpret their laboratory results. Collaborate with physician assistants. Nurse practitioners. registered nurses and other health professionals.',
        img: prodoctor
    },
    {
        name: 'Best Service',
        describe: 'Medical services means medical and health care services provided to a Person, including, but not limited to, medical and health care services provided to a Person which are covered by a policy of insurance, and includes, without limitation, physician services, nurse and therapist services, dental services, hospital services, skilled nursing facility services.',
        img: bestservice
    }
]
const SpecialMediCare = () => {
    return (
        <section class="medicare-container">
            <div className="text-center">
                <h1 className="pt-5">What Special In Medicare</h1>
                
                <p className="text-white"><small>We provide the best services for your health</small></p>
            </div>

            <div className="container row cols-md-4 g-3 m-auto">
                {
                    specialData.map(special => <SpecialCare special={special} />)
                }
            </div>
        </section>
    );
};

export default SpecialMediCare;