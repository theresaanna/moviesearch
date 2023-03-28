import './LeftNav.scss';

function LeftNav(props) {
  const lenArray = [...Array(props.len || 8).keys()];
  const lis = lenArray.slice(1).map((num) =>
    <li><a href="#">Menu {num}</a></li>
  );
  return (
    <ul className="left-nav">
      {lis}
    </ul>
  );
}

export default LeftNav;
