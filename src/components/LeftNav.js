import './LeftNav.scss';

function LeftNav(props) {
  const lenArray = [...Array(props.len || 8).keys()];
  const lis = lenArray.slice(1).map((num) =>
    <li key={num}>Menu {num}</li>
  );
  return (
    <ul className="left-nav">
      {lis}
    </ul>
  );
}

export default LeftNav;
