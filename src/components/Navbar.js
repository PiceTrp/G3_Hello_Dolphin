import styled from 'styled-components';
import logo from '../images/logo.svg';

const Nav = styled.div`
	position: fixed;
	width: 100vw;
	height: 80px;
	padding: 0 360px 0 360px;
	display: flex;
	align-item: center;
	justify-content: space-around;
	background-color: black;
	-webkit-box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.75);
	z-index: 2000;
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
	z-index: 2001;
`;

const NavLogoImg = styled.img`
	max-height: 100%;
`;

const NavItem = styled.a`
	flex: 2;
	max-width: 150px;
	height: 100%;
	margin-left: 10px;
	color: white;
	display: flex;
	flex-direction: column;
	align-item: center;
	justify-content: center;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	transition: .5s;
	color: #FFF;
	text-decoration: none;

	&:hover {
		background-color: #555;
		color: #FFF;
		text-decoration: none;
		font-weight: bold;
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
			<Nav>
				<NavItem href="#section1">
					<NavItemText>Home</NavItemText>
				</NavItem>
				<NavItem href="#section2">
					<NavItemText >About</NavItemText>
				</NavItem>
				<NavItem href="#section3" >
					<NavItemText >Activities</NavItemText>
				</NavItem>
				<NavItem href="#section4">
					<NavItemText >Date</NavItemText>
				</NavItem>
			</Nav >
			<NavLogo>
				<NavLogoImg src={logo} />
			</NavLogo>
		</>
	);
}