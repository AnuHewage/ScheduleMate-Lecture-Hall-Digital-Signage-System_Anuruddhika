import { useEffect, useState } from "react";

import PageHeader from "../../components/admin/PageHeader";

import CancelledTable from "../../components/admin/CancelledTable";
import RescheduledTable from "../../components/admin/RescheduledTable";

export default function CancellationReschedule() {
  const [cancelledSessions, setCancelledSessions] = useState([]);

  const [rescheduledSessions, setRescheduledSessions] = useState([]);

  useEffect(() => {
    const cancelled =
      JSON.parse(localStorage.getItem("cancelledSessions")) || [];

    const rescheduled =
      JSON.parse(localStorage.getItem("rescheduledSessions")) || [];

    setCancelledSessions(cancelled);

    setRescheduledSessions(rescheduled);
  }, []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cancellation & Reschedule"
        description="Manage cancelled and rescheduled lecture sessions"
      />

      <CancelledTable sessions={cancelledSessions} />

      <RescheduledTable sessions={rescheduledSessions} />
    </div>
  );
}
