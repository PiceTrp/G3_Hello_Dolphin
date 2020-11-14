import styled from 'styled-components';
import mountain from '../images/mountain.png';
import girl from '../images/girls.png';

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

const Box = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    background-color: white;
    width: 680px;
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

export default () => {
    return (
        <Group_mountain>
            <Pic src={girl} />
            <Box>
                <Text_1>Bon Odori Dance</Text_1>
                <Text_2>Bon Odori หรือ Bon dance <br /> เป็นการเต้นรำแบบหนึ่งที่แสดงในช่วงฤดูร้อนของญี่ปุ่น <br />
                เทศกาลเต้นรำ Bon Odori ที่ยิ่งใหญ่ทั้งสามของญี่ปุ่นกลับเป็น
ตัวแทนของการผสมผสานท่าเต้นแบบดั้งเดิมเข้ากับความรื่นเริง</Text_2>
            </Box>
        </Group_mountain>
    )
}
