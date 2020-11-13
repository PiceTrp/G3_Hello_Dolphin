import styled from 'styled-components';
import logo from '../images/logo.svg';

const Nav = styled.div`
	position: absolute;
	width: 100vw;
	height: 80px;
	padding: 0 360px 0 360px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: transparent;
`;

const NavLogo = styled.div`
	position: absolute;
	left: 200px;
	top: 40px;
	height: 80px;
	width: 80px;
	background-color: white;
	border-radius: 40px;
	padding: 10px;
`;

const NavLogoImg = styled.img`
	max-height: 100%;
`;

const NavItem = styled.div`
	flex: 2;
	max-width: 150px;
	height: 100%;
	margin-left: 10px;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;

	&:hover {
		background-color: #555;
	}
`;

const NavItemText = styled.p`
	font-size: 16px;
	margin-bottom: 0;
	text-transform: uppercase;
	font-family: Josefin Sans;
`;

export default () => {
	return (
		<>
			<NavLogo>
				<NavLogoImg src={logo} />
			</NavLogo>
			<Nav>
				<NavItem>
					<NavItemText>Home</NavItemText>
				</NavItem>
				<NavItem>
					<NavItemText>About</NavItemText>
				</NavItem>
				<NavItem>
					<NavItemText>Activities</NavItemText>
				</NavItem>
				<NavItem>
					<NavItemText>Date</NavItemText>
				</NavItem>
			</Nav >
		</>
	);
}