import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import { DateRange } from 'react-date-range';

import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import formatDate from 'utils/formatDate';
import iconCalendar from 'assets/images/ic_calendar.svg';

export default function Date(props) {
	const { value, placeholder, name } = props;
	const { isShowed, setIsShowed } = useState(false);

	const datePickerChange = (value) => {
		const target = {
			target: {
				value: value.selection,
				name: name,
			},
		};
		props.onChange(target);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.addEventListener('mousedown', handleClickOutside);
		};
	});

	// TODO
	const refDate = useRef(null);

	return <div></div>;
}

Date.propTypes = {
	value: propTypes.object,
	onChange: propTypes.func,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
