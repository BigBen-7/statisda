import { useDispatch } from 'react-redux';
import { setPageCount, setSchoolDetails } from '@store/accountSlice';
import { useState } from 'react';
function CreateAccountPageone() {
  const [schoolName, setSchoolName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setSchoolDetails(schoolName, address));
    if (!schoolName || !address || !email) return;
    dispatch(setPageCount(2));
  }
  console.log(schoolName, address);
  return (
    <div>
      <p>page 1!</p>
      <div>
        <label>SchoolName:</label>
        <input
          type="text"
          width="200"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
      </div>
      <div>
        <label>School Address:</label>
        <input
          type="text"
          width="200"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>School Email:</label>
        <input
          type="email"
          width="200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        onClick={handleClick}
        disabled={!schoolName || !address || !email}
      >
        next
      </button>
    </div>
  );
}

export default CreateAccountPageone;
