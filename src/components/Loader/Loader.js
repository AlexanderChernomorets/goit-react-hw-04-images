import { Bars } from 'react-loader-spinner';
function Loader() {
  return (
    <div>
      <Bars
        height="80"
        width="80"
        color="lightblue"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
