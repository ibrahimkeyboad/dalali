import {} from 'react-select';
export const styleControl = {
  option: (styles: any) => ({
    ...styles,
    backgroundColor: '#112240',
    '&:hover': {
      backgroundColor: '#64ffda',
      color: '#112240',
    },
  }),
  control: (base: any, state: { isFocused: any }) => ({
    ...base,
    background: '#112240',
    borderColor: state.isFocused ? 'white' : 'gray',
    '&:hover': {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? 'white' : 'gray',
      backgroundColor: state.isFocused ? '#112240' : '#0A192F',
    },
  }),
};
