import PageHeader from "../../components/admin/PageHeader";

import CancelledTable from "../../components/admin/CancelledTable";
import RescheduledTable from "../../components/admin/RescheduledTable";

import { cancelledSessions } from "../../data/cancellationData";
import { rescheduledSessions } from "../../data/rescheduleData";


export default function CancellationReschedule() {
  return (
    <div
      className="
      space-y-6
      "
    >
      <PageHeader
        title="Cancellation & Reschedule"
        description="Manage cancelled and rescheduled lecture sessions"
      />

      {/* Cancelled Sessions */}

      <CancelledTable sessions={cancelledSessions} />

      {/* Rescheduled Sessions */}

      <RescheduledTable sessions={rescheduledSessions} />
    </div>
  );
}
