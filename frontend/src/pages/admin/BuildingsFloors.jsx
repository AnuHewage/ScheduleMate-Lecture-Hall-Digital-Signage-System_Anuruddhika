import { useState } from "react";

import PageHeader from "../../components/admin/PageHeader";

import BuildingCard from "../../components/admin/BuildingCard";

import FloorTable from "../../components/admin/FloorTable";

import { buildings } from "../../data/buildingData";

export default function BuildingsFloors() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <div
      className="
      space-y-6
      "
    >
      <PageHeader
        title="Buildings & Floors"
        description="Manage academy buildings, floors and floor-side locations"
        actionText="Add Building"
      />

      {/* Building Cards */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
        w-full
        "
      >
        {buildings.map((building) => (
          <BuildingCard
            key={building.id}
            building={building}
            expanded={selectedBuilding === building.id}
            onView={() => {
              setSelectedBuilding(
                selectedBuilding === building.id ? null : building.id,
              );
            }}
            onEdit={() => alert("Edit Building")}
          />
        ))}
      </div>

      {/* Floor Table */}

      {selectedBuilding && (
        <div
          className="
            w-full
            "
        >
          <FloorTable
            building={buildings.find((item) => item.id === selectedBuilding)}
          />
        </div>
      )}
    </div>
  );
}
