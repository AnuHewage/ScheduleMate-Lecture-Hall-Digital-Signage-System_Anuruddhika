import { useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import DisplayCard from "../../components/admin/DisplayCard";
import ConfigureDisplayModal from "../../components/admin/ConfigureDisplayModal";
import RegisterDisplayModal from "../../components/admin/RegisterDisplayModal";

import { displayDevices } from "../../data/displayData";

export default function DisplayConfiguration() {
  const [devices, setDevices] = useState(displayDevices);

  const [building, setBuilding] = useState("All Buildings");

  const [selectedDevice, setSelectedDevice] = useState(null);

  const [showConfigure, setShowConfigure] = useState(false);

  const [showRegister, setShowRegister] = useState(false);

  const filteredDevices =
    building === "All Buildings"
      ? devices
      : devices.filter((device) => device.building === building);

  // Register New Display

  const addNewDisplay = (newDevice) => {
    setDevices([...devices, newDevice]);
  };

  // Update Display Configuration

  const updateDisplay = (updatedDevice) => {
    setDevices(
      devices.map((device) =>
        device.id === selectedDevice.id
          ? {
              ...device,
              ...updatedDevice,
            }
          : device,
      ),
    );
  };

  // Restart Device

  const restartDevice = (id) => {
    const confirmRestart = window.confirm("Restart this display device?");

    if (confirmRestart) {
      alert("Display restarted successfully");
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Display Configuration"
        description="Manage digital signage displays and monitor synchronization"
      />

      {/* Filter + Register */}

      <div
        className="
bg-white
rounded-xl
border
p-4
flex
justify-between
items-center
"
      >
        <select
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          className="
border
rounded-lg
px-4
py-2
text-sm
"
        >
          <option>All Buildings</option>

          <option>Main Building</option>

          <option>New Building</option>
        </select>

        <button
          onClick={() => setShowRegister(true)}
          className="
bg-[#0b1220]
text-white
px-4
py-2
rounded-lg
text-sm
font-semibold
"
        >
          + Register Display
        </button>
      </div>

      {/* Display Cards */}

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
"
      >
        {filteredDevices.map((device) => (
          <DisplayCard
            key={device.id}
            device={device}
            onConfigure={() => {
              setSelectedDevice(device);

              setShowConfigure(true);
            }}
            onRestart={() => restartDevice(device.id)}
          />
        ))}

        {filteredDevices.length === 0 && (
          <p
            className="
text-slate-400
text-center
col-span-full
py-10
"
          >
            No display devices found.
          </p>
        )}
      </div>

      {/* Configure Modal */}

      {showConfigure && selectedDevice && (
        <ConfigureDisplayModal
          device={selectedDevice}
          onClose={() => {
            setShowConfigure(false);

            setSelectedDevice(null);
          }}
          onSave={updateDisplay}
        />
      )}

      {/* Register Modal */}

      {showRegister && (
        <RegisterDisplayModal
          onClose={() => setShowRegister(false)}
          onSave={addNewDisplay}
        />
      )}
    </div>
  );
}
