export const DropdownItem = ({ item, state }) => {
  return (
    <>
      <li className={state === true ? 'active' : ''}>
        <a href="#">{item}</a>
      </li>
    </>
  );
};
