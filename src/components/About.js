import styled from 'styled-components';
import line from '../images/Line.png';
import bg from '../images/bg_mascot.png';
import mc from '../images/mascot.png';
import conner from '../images/conner bottom-left.png';

const Text1 = styled.h1`
	font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    color: black;
    padding-right: 550px;
    padding-top : 90px;
`;

const Line = styled.img`
    color: gray;
    padding-top: 90px;
    padding-right: 550px;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 140vh;
	background: rgba(56, 55, 55, 0.67);
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: 100vw auto;
`;

const Text2 = styled.p`
    color: white;
    padding-top: 50px;
    padding-right: 300px;
    font-family: Athiti;
    font-size: 24px;
    text-align: left;
    
`;

const Background = styled.img`
    position: absolute;
    width: 550px;
    height: 900px;
    left: 824px;
    margin-left: 120px;
    
`;

const Mascot = styled.img`
    position: absolute;
    filter: drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left: 450px;
`;

const Conner = styled.img`
    position: absolute; 
    padding-right: 1200px;
    padding-top: 815px;
`;

export default () => {
    return (
        <Section>
            <Text1>ABOUT OBON</Text1>
            <Line src={line} />
            <Background src={bg} />
            <Mascot src={mc} />
                <Text2>
                เทศกาลโคมไฟ หรือ โอบ้ง<br></br>
                เป็นเทศกาลของญี่ปุ่นจัดขึ้นในช่วงฤดูร้อนเพื่อทำการเซ่นไหว้ถึง<br></br>
                บรรพบุรุษที่ได้ล่วงลับไปแล้วเชื่อกันว่าวิญญาณของท่านจะกลับ<br></br>
                มายังโลก<br></br>
                คนญี่ปุ่นจึงพากันกลับมาเยี่ยมญาติพี่น้องที่บ้านของตนเอง<br></br>
                และจัดเตรียมอาหารเพื่อไหว้บรรพบุรุษ อีกทั้งยังมีการจุดไฟ<br></br>
                โอคุริบิ ซึ่งเป็นตะเกียงลอยในแม่น้ำเพื่อส่งดวงวิญญาณกลับ<br></br>
                ไปยังภพภูมิที่ดี
                </Text2>
            <Conner src={conner} />
        
        </Section>
        
    )
}
