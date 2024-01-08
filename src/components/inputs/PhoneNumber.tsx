import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneNumber() {
  return (
    <div className='form-group'>
      <PhoneInput  country='tz' />
    </div>
  );
}

export default PhoneNumber;
