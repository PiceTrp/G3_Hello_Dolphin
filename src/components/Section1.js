import styled from 'styled-components';
import Sc1_background from '../images/section1_bg.png';

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: #383737;
	background-image: url(${Sc1_background});
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: 100vw auto;
`;

const Text1 = styled.h1`
	font-size: 50px;
	letter-spacing: 4px;
	color: white;
	text-transform: uppercase;
	font-family: Josefin Sans;
`;

const Text2 = styled.h1`
	font-size: 25px;
	letter-spacing: 8px;
	color: #EEE;
	text-transform: uppercase;
	font-family: Josefin Sans;
`;

export default () => {
	return (
		<Section>
			<>
				<Text1>Obon</Text1>
				<Text2>Festival</Text2>
			</>
		</Section>
	)
}