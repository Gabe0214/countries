import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchInput } from './Search/Search';
import { FilterRegion } from './FitlerRegion/FilterRegion';
import Countries from './Countries/Countries';

const Main = ({ darkMode }) => {
	return (
		<div>
			<SearchInput darkMode={darkMode} />
			<FilterRegion darkMode={darkMode} />
			<Countries darkMode={darkMode} />
		</div>
	);
};

export default Main;
