import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleChangeFilter}
        ></input>
      </label>
    </>
  );
};
