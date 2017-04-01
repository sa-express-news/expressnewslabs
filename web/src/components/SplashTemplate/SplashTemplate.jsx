import React from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';

const getStyles = (vw) => {
	return {
		main: {
			maxHeight: '90vh',
			minHeight: '70vh',
			minWidth: '100vw',
			overflow: 'hidden',
			background: 'white',
		},
		outerImageWrap: {
			width: vw,
			maxHeight: '90vh',
			margin: '0 auto',
			overflow: 'hidden',
		},
		innerImageWrap: {
			display: 'inline-block',
			position: 'relative',
			right: '-50%',
		},
		image: {
			height: 'auto',
			minWidth: '100vw',
			minHeight: '70vh',
			position: 'relative',
    	left: '-50%',
		},
		overlayContentStyle: {
			background: 'none',
		},
		cardTitle: {
			padding: '4% 2%',
		},
		titleStyle: {
			fontSize: vw < 500 ? '4em' : '4.5em',
			lineHeight: '40px',
			paddingBottom: '20px',
			color: 'rgba(0, 0, 0, 0.9)'
		},
		subtitleStyle: {
			fontSize: vw < 500 ? '1.2em' : '1.7em',
			paddingRight: '20%',
			color: 'rgba(0, 0, 0, 0.65)'
		}
	};
};

export default props => {
	const { post } = props,
				styles 	 = getStyles(window.innerWidth);

	return (
		<CardMedia
			style={styles.main}
      overlay={<CardTitle 
      	style={styles.cardTitle}
      	title={post.title}
      	titleStyle={styles.titleStyle}
      	subtitle={post.description}
      	subtitleStyle={styles.subtitleStyle}
      />}
      overlayContentStyle={styles.overlayContentStyle}
    >
    	<div style={styles.outerImageWrap}>
    		<div style={styles.innerImageWrap}>
      		<img src={post.main_img_url} style={styles.image} alt={post.title} />
      	</div>
      </div>
    </CardMedia>
	);
}
