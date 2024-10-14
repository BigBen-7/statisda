import { useDispatch } from 'react-redux';
import { setPageCount } from '@store/accountSlice';
function CreateAccountPagetwo() {
  const dispatch = useDispatch();
  function nextPage() {
    dispatch(setPageCount(3));
  }
  return (
    <div>
      <p>page 2!</p>
      <button onClick={nextPage}>next</button>
    </div>
  );
}

export default CreateAccountPagetwo;
