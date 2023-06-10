import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [data, setData] = useState({ loading: true });

  const onChange = (e) => {
    console.log(e);
    setData({
      latitude: e.coords.latitude,
      longitude: e.coords.longitude,
      timestamp: e.timestamp,
      loading: false
    });
  };

  const onError = (e) => {
    setData({
      error: "Error loading details",
      loading: false
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onChange, onError);
    const id = navigator.geolocation.watchPosition(onChange, onError);
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);

  return data;
};
export default useGeolocation;
