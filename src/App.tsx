import "./styles.css";
import useGeolocation from "./useGeolocation";

export default function App() {
  const data = useGeolocation();

  return (
    <div className="App">
      {data?.loading ? (
        "Loading...."
      ) : (
        <>
          <div>Longitude: {data?.longitude}</div>
          <div>Latitude: {data?.latitude}</div>
        </>
      )}

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
