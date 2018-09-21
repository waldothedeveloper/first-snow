import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import image from '../../images/pascal_rain_couple_2.jpg';

const Welcome = () => {
	const welcomeImg = {
		background: image,
		title: 'Pascal image',
		author: 'Pascal image'
	};
	return (
		<Grid className={welcomeImg} container spacing={40}>
			<Grid justify="center" item>
				<Typography variant="display1" gutterBottom>
					Let the Rain Kiss You
				</Typography>
				<Typography variant="display1" gutterBottom>
					Let the Rain Sing You a Lullaby
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Welcome;
