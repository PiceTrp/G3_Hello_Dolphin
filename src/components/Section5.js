import styled from 'styled-components';
import beans from '../images/GreenBeans.png';
import prop from '../images/GroupBG_sec5.png';

const Bg = styled.div`
    width: 100vw;
    height: 135vh;
    background: rgba(56, 55, 55, 0.67);
    background-image: url(${prop});
    background-size: cover;
`;

const Text = styled.div`
    font-family: Josefin Sans;
    font-style: normal;
    color: black;
    font-weight: bold;
    font-size: 64px;
    text-transform: uppercase;
    text-align: left;
    padding-top: 100px;
    padding-left: 200px;
    margin-bottom: 35px;
`;

const Divider = styled.div`
    width: 100px;
    height: 7px;
    background-color: black;
    margin-left: 390px;
`;

const Box = styled.div`
    width: 700px;
    height: 400px;
    padding-left: 70px;
`;

const Bean = styled.img`
    position: relative;
    transform: translateY(-90px);
`;

const Box2 = styled.div`
    width: 500px;
    height: 100px;
    margin-left: 200px;
`;

const Text2 = styled.p`
    font-family: Prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: white;
    text-align: left ;
`;


export default () => {
    return (
        <Bg>
            <Text>
                Obon Symbol
            </Text>
            <Divider></Divider>
            <Box>
                <Bean src={beans} />
            </Box>
            <Box2>
                <Text2>
                    “โชเรียวอุมะ” เป็นชื่อของมะเขือม่วงและแตงกวา ที่ใช้ตะเกียบหรือไม้ไผ่เอามาเหลาให้เล็กแล้วนำไปเสียบให้เป็นขาสี่ขา เพื่อเปรียบเสมือนว่าเป็นยานพาหนะของวิญญาณกลับไป
                </Text2>
            </Box2>
        </Bg>
    )
}