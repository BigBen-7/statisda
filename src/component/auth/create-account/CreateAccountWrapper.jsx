import CreateAccountPageone from './CreateAccountPageone';
import CreateAccountPagetwo from './CreateAccountPagetwo';
import CreateAccountPagethree from './CreateAccountPagethree';
import { useSelector } from 'react-redux';

function CreateAccountWrapper() {
  const count = useSelector((state) => state.accountAuth);
  return (
    <div>
      {count.pageCount === 1 && <CreateAccountPageone />}
      {count.pageCount === 2 && <CreateAccountPagetwo />}
      {count.pageCount === 3 && <CreateAccountPagethree />}
    </div>
  );
}

export default CreateAccountWrapper;
