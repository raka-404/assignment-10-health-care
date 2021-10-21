import React from 'react';
import { Card, } from 'react-bootstrap';
import './Service.css'

const services = () => {
    return (
        <div className="services">
   <Card style={{ width: '18rem' }}>
   <div style={{height:'300px',width:'285px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://images.unsplash.com/photo-1623261887059-49fccbd4ee7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" /> 
   </div>
  <Card.Body>
    <Card.Title>Ambulance service</Card.Title>
    <h5>Time: 24/7 
       <p>Call: 017283408</p></h5>
    <Card.Text>
     Always fast and save services
    </Card.Text>
  </Card.Body>
</Card>
   <Card style={{ width: '18rem' }}>
   <div style={{height:'300px',width:'285px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://garanicardiac.ca/wp-content/uploads/2018/10/AdobeStock_202309162-small.jpg" alt="" /> </div>
  <Card.Body>
    <Card.Title>Eco test</Card.Title>
    <h5>Time: 12/7
        <p>Call: 01723805</p>
    </h5>
    <Card.Text>
    The heart is a two-stage electrical pump that circulates blood throughout the body.
    </Card.Text>
  </Card.Body>
</Card>
   <Card style={{ width: '18rem' }}>
   <div style={{height:'300px',width:'285px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://5.imimg.com/data5/FU/PE/GLADMIN-19729611/digital-x-ray-500x500.jpg" alt="" /> </div>
  <Card.Body>
    <Card.Title>X-ray Test</Card.Title>
    <h5>Time: 12/6
        <p>Call: 092398749</p>
    </h5>
    <Card.Text>
    X-rays are a form of electromagnetic radiation with wavelengths ranging from 0.01 to 10 nanometers. In the setting of diagnostic radiology,
    </Card.Text>
  </Card.Body>
</Card>
   <Card style={{ width: '18rem' }}>
   <div style={{height:'300px',width:'285px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://media.healthdirect.org.au/images/inline/original/ecg-electrodes-attached-chest-dc55ff.jpg" alt="" /> </div>
  <Card.Body>
    <Card.Title>E.C.G Test</Card.Title>
    <h5>Time : 6/12
        <p>call: 10293840</p>
    </h5>
    <Card.Text>
    The ECG electrodes must be placed on clean, dry, skin. Sometimes, it is also necessary to shave the area to ensure good skin contact.
    </Card.Text>
  </Card.Body>
</Card>
   <Card style={{ width: '18rem' }}>
   <div style={{height:'300px',width:'285px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doppelherz.com/fileadmin/_processed_/1/b/csm_health-knowledge_blood-pressure_doppelherz_f71c184abd.jpg" alt="" /> </div>
  <Card.Body>
    <Card.Title>Blood Pressure Test</Card.Title>
    <h5>Time: 6/12
        <p>Call: 102938340</p>
    </h5>
    <Card.Text>
    White blood cells are an integral component of your blood. They are a vital part of your immune system,
    </Card.Text>
  </Card.Body>
</Card>
   <Card style={{ width: '18rem' }}>
   <div style={{height:'300px',width:'285px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://static.diffen.com/uploadz/e/eb/Ultrasound-1.jpg" alt="" /> </div>
  <Card.Body>
    <Card.Title>Ultrasound</Card.Title>
    <Card.Text>
    Whales and Dolphins: Use ultrasonic sounds to capture their prey.
Bats: As bats can detect frequencies between 100-200 kHz, they use the ultrasound technique to find their food.
    </Card.Text>
  </Card.Body>
</Card>

        </div>
    );
};

export default services;