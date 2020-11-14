import styled from 'styled-components';
import mountain from '../images/mountain.png';
import girl from '../images/girls.png';
import { Link } from 'react-router-dom';

const Group_mountain = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(56, 55, 55, 0.67);
    background-image: url(${mountain});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    padding: 50px;
`;

const Pic = styled.img`
    flex: 5;
    align-self: flex-end;
`;

const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 486px;
    margin-top: 70px;
`;

const Text_1 = styled.p`
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    margin-top: 50px;
    margin-left: 90px;
    text-align: left;
`;

const Text_2 = styled.p`
    font-family: prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 90px;
    margin-right: 200px;
    text-align: left;
`;

const BoxButton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    margin-right: 4px;
    margin-buttom: 2px;
`;

const Button = styled.div`
    width: 182px;
    height: 74px;
    background: rgba(18, 27, 34, 0.87);
    font-size: 30px;
    color: white;
    padding-top: 10px;
    text-decoration: none;
`;

export default () => {
    return (
        <Group_mountain>
            <Pic src={girl} />
            <BigBox>
                <Box>
                    <Text_1>Bon Odori Dance</Text_1>
                    <Text_2>
                        Bon Odori หรือ Bon dance <br /> เป็นการเต้นรำแบบหนึ่งที่แสดงในช่วงฤดูร้อนของญี่ปุ่น <br />
                        เทศกาลเต้นรำ Bon Odori ที่ยิ่งใหญ่ทั้งสามของญี่ปุ่นกลับเป็น
                        ตัวแทนของการผสมผสานท่าเต้นแบบดั้งเดิมเข้ากับความรื่นเริง
                    </Text_2>
                </Box>
                <Link to="/">
                    <BoxButton>
                        <Button>
                            Back
                        </Button>
                    </BoxButton>
                </Link>
            </BigBox>

        </Group_mountain>
    )
}
