import { useEffect } from "react";
import Events from "components/events/Events";
import { getEventsFx } from "store/events/effects";

const DashboardPage = () => {
  useEffect(() => {
    getEventsFx({
      searchTerm: "",
    });
  }, []);

  return <Events />;
};

export default DashboardPage;
