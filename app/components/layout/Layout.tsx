import { FC, ReactNode } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

interface ILayout {
	isScrollView?: boolean;
	children: ReactNode;
}
const Container = styled.view`
	height: 100%;
	width: 100%;
	padding-top: 16rem;
	background-color: #fff;
`;

export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
	return (
		<Container>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</Container>
	);
};
