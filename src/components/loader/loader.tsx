import MoonLoader from 'react-spinners/MoonLoader';

export default function Loader(): JSX.Element {
  return (
    <MoonLoader
      className='loader'
      color="#3fdc62"
      size={130}
      speedMultiplier={0.3}
    />

  );
}
