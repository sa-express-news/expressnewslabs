import React from 'react';
import { Toolbar } from 'material-ui/Toolbar';

const getStyles = () => {
	return {
		main: {
			background: '#333',
			marginBottom: 40,
		}
	};
};

export default props => {
	const styles = getStyles();

	return (
		<Toolbar style={styles.main}></Toolbar>
	);
}