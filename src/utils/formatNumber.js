// const formatNumber = (number) => {
//   return number.toLocaleString();
// };

// export default formatNumber;

export default (number) => {
	const formatNumbering = new Intl.NumberFormat('id-ID');
	return formatNumbering.format(number);
};
