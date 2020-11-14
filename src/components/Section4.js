import styled from 'styled-components';
import temple_background from '../images/temple_1.png';
import chromfire from '../images/Chromfire.png';

const Temple = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${temple_background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: black;
    padding: 100px 100px 100px 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text1 = styled.div`
    font-family: Josefin Sans;
    letter-spacing: 1px;
    font-size: 64px;
    font-style: normal;
    font-weight: bold;
    color: white;
    padding-top: 16px;
`;

const Divider = styled.div`
    width: 70px;
    height: 6px;
    background-color: white;
`;

const BoxRight = styled.div`
    align-self: flex-start;
    margin-top: 180px;
    width: 384px;
    height: 413px;
    background-color: #C2BF64;
`;

const BoxLeft = styled.div`
    position: relative;
    transform: translateX(-30px) translateY(-30px);
    background-color: white;
    width: 384px;
    height: 413px;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    padding-top: 30px;
    padding-left: 13px;
`;

const SubColumn1 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    font-family: Josefin Sans;
    color: black;

`;

const SubColumn1Left = styled.p`
    margin-bottom: 0;
    flex: 3;
    text-transform: uppercase;
    text-align: left;
    font-size: 24px;
    font-weight: bold;
`;

const SubColumn1Right = styled.img`
    flex: 1;
`;

const SubColumn2 = styled.p`
    font-size: 24px;
    text-align: left;
    padding-left: 30px;
`;

export default () => {
    return (
        <Temple id="section4">
            <Divider></Divider>
            <Text1>DATE OF FESTIVAL</Text1>
            <Divider></Divider>
            <BoxRight>
                <BoxLeft>
                    <SubColumn1>
                        <SubColumn1Left>date of obon <br />festival</SubColumn1Left>
                        <SubColumn1Right src={chromfire} />
                    </SubColumn1>
                    <SubColumn2>
                        August of 13th - 16th <br></br> every year.
                    </SubColumn2>
                </BoxLeft>
            </BoxRight>
        </Temple>
    )
}