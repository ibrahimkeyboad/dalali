import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneNumber() {
  return (
    <div className='form-group'>
      <PhoneInput
        inputStyle={{ color: '#2de', backgroundColor: '#222', border: 'none' }}
        onlyCountries={['tz']}
        country='tz'
        // containerStyle={{ backgroundColor: '#222' }}
        buttonStyle={{ backgroundColor: '#222' }}
        searchStyle={{ backgroundColor: 'red' }}
        dropdownStyle={{ backgroundColor: '#222' }}
      />
    </div>
  );
}

export default PhoneNumber;
