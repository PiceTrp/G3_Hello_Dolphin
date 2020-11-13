import styled from 'styled-components';
import mascot from '../images/mascot.png';

const Cover = styled.div`
    position: absolute;
    width: 575px;
    height: 971px;
    left: 824px;
    top: 1046px;
    background: rgba(132, 79, 73, 0.9);
`;

const Mascot = styled.div`
    position: absolute;
    width: 705px;
    height: 672px;
    left: 775px;
    top: 1250px;
    background: url(${mascot.png});
    filter: drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default () => {
	return (
        <Cover>
			<>
				<Mascot src={mascot} />
			</>
		</Cover>
    );
}