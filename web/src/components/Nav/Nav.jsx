import React from 'react';
import AppBar from 'material-ui/AppBar';

const getStyles = (background) => {
	return {
		main: {
			background: background,
			boxShadow: 'none',
			position: 'fixed',
		},
		titleStyle: {
			fontSize: 20,
			fontWeight: 300,
			textAlign: 'center',
		},
		iconStyleLeft: {
			marginTop: 7,
		},
	};
};

export default props => {
	const styles = getStyles(props.background);

	return (
		 <AppBar
		 	style={styles.main}
	    title="Express News Labs"
	    titleStyle={styles.titleStyle}
	    iconStyleLeft={styles.iconStyleLeft}
	  />
	);
}