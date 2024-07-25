import './LeftNav.scss';

function LeftNav(props) {
	const yearArray = [2024, 2023, 2022, 2021, 2020, 2019];
  const lis = yearArray.slice().map((year) =>
    <li key={year}><a href="#" name="year" onClick={props.handleCatClick}>{year}</a></li>
  );
  return (
    <ul className="left-nav">
      {lis}
    </ul>
  );
}

export default LeftNav;
