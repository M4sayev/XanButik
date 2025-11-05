import { useState, useEffect } from "react";
import CountUp from "react-countup";

function ClientSideCountUp({ end, suffix }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <span>0</span>;

  return (
    <h2>
      <CountUp start={0} end={end} duration={2.75} suffix={suffix} />
    </h2>
  );
}

export default ClientSideCountUp;
