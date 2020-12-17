import React from 'react';

import { SearchInput } from './Search/Search';
import { FilterRegion } from './FitlerRegion/FilterRegion';

const Main = ({ darkMode }) => {
	return (
		<div>
			<SearchInput darkMode={darkMode} />
			<FilterRegion darkMode={darkMode} />
		</div>
	);
};

export default Main;
