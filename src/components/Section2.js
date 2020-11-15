import styled from 'styled-components';
import mascotGroup from '../images/Mascot_group.png';
import bird from '../images/Bird_tran.png';
import corner from '../images/Vector.png';

const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(56, 55, 55, 0.67);
    display: flex;
    flex-direction: row;

`;

const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 6;
    justify-content: space-between;
    align-items: center;
`;

const BoxBird = styled.div`

`;

const Bird = styled.img`
    width: 300px;
    height: 300px;
    position: relative;
    transform: translateY(90px);
`;

const TextHead = styled.p`
    font-family: Josefin Sans;
    color: black;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
`;

const Divider = styled.div`
    width: 75px;
    height: 7px;
    background: black;
`;

const Text = styled.p`
    font-family: prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: white;
    text-align: left;
    margin-top: 20px;
`;

const BoxCorner = styled.div`
    text-align: left;
    align-self: flex-start;
`;

const Corner = styled.img`
    width: 500px;
    height: 200px;
    position: relative;
`;

const BoxRight = styled.div`
    flex: 4;
    background-color: rgba(132, 79, 73, 0.9);

`;

const Mascot = styled.img`
    width: 575px;
    height: 959px;
`;

export default () => {
    return (
        <Bg id="section2">
            <BoxLeft>
                <BoxBird>
                    <Bird src={bird} />
                </BoxBird>
                <TextHead>
                    ABOUT OBON
                </TextHead>
                <Divider>&nbsp;</Divider>
                <Text>
                    เทศกาลโคมไฟ หรือ โอบ้ง <br></br> เป็นเทศกาลของญี่ปุ่นจัดขึ้นในช่วงฤดูร้อนเพื่อทำการเซ่นไหว้ถึง <br></br>บรรพบุรุษที่ได้ล่วงลับไปแล้วเชื่อกันว่าวิญญาณของท่านจะกลับมายังโลก <br></br>
                คนญี่ปุ่นจึงพากันกลับมาเยี่ยมญาติพี่น้องที่บ้านของตนเอง <br></br>
                และจัดเตรียมอาหารเพื่อไหว้บรรพบุรุษ อีกทั้งยังมีการจุดไฟ <br></br>
                โอคุริบิ ซึ่งเป็นตะเกียงลอยในแม่น้ำเพื่อส่งดวงวิญญาณกลับ <br></br>
                ไปยังภพภูมิที่ดี
                </Text>
                <BoxCorner>
                    <Corner src={corner} />
                </BoxCorner>
            </BoxLeft>
            <BoxRight>
                <Mascot src={mascotGroup} />
            </BoxRight>
        </Bg>
    )
}