import styled from 'styled-components';
import grey from '../images/grey_wave.png';
import respect from '../images/respect1.png';

const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    background-image: url(${grey});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
`;

const Box = styled.div`
    flex: 5;
    padding-top: 220px;
`;

const Img = styled.img`
    display: block;
    width: 750px;
    height: 600px;
    align-self: flex-end;
`;

const Box2 = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
`;

const Text_box = styled.div`
    width: 634px;
    height: 690px;
    background: rgba(0, 0, 0, 0.37);
    margin-top: 140px;
    padding-top: 200px;
    padding-left: 80px;
`;

const Text = styled.p`
    font-family: prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: left;
    color: white;
`;

export default () => {
    return (
        <Bg>
            <Box>
                <Img src={respect} />
            </Box>
            <Box2>
                <Text_box>
                    <Text>
                        ในวันที่ 13 สิงหาคมซึ่งเป็นวันเริ่มเทศกาลโอบ้ง <br /> จะมีการหักก้านกัญชากองสุมกันเรียกว่า “โองาระ” <br />
                    แล้วก็จุดไฟ ว่ากันว่าบรรพบุรุษจะขี่ควันจากดวงไฟ <br></br>
                    นี้กลับมายังโลกโดยไม่หลงทาง <br /> ผู้คนมากมายจะไปเคารพหลุมศพพร้อมหน้ากันทั้งครอบครัว
                    </Text>
                </Text_box>
            </Box2>
        </Bg>
    )
}