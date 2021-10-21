import React from 'react';
import { Container } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="py-3" style={{fontSize:"4rem",textAlign:'center'}}>Specialist Doctor </h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-start">
                            <h4>Best Doctor Award</h4>
                            <div style={{height:'260px',width:'260px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.laparoscopyhospital.com/bestdoctoraward.jpg" alt="" /></div>
                            Dr R K Mishra has received the best doctor award by lions club of Annamalainagar. Lions Best Doctor recognize Doctor for their community service. For nearly 100 years, lions members have worked on projects designed to prevent diseases of community.
                            <p></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="stuffGrid mx-auto w-100">
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://mayfair.com.bd/wp-content/uploads/2021/06/Dr.-Mokbul-Ahmed.jpg" alt="" />
                            <p>Dr. Mokbul</p></div>
                            
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://mayfair.com.bd/wp-content/uploads/2021/04/Dr-Jamila-Sultana.jpg" alt="" />
                            <p>Dr.Sultana</p></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://mayfair.com.bd/wp-content/uploads/2021/04/Dr-Debika-Dhar.jpg" alt="" />
                            <p>Dr.Debika</p></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://mayfair.com.bd/wp-content/uploads/2019/12/sp1.jpg" alt="" />
                            <p>Dr.Murad</p></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Stuff;

