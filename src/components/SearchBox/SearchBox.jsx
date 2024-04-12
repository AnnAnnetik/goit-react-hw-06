import style from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  return (
    <div className={style.searchBox}>
      <label>
        Finde contacts by name
        <input type="text" className={style.input} onChange={onChange} />
      </label>
    </div>
  );
};
export default SearchBox;
