import { useMemo } from "react";
import type { Activity } from "../types";
import { categories } from "../data/categories";

type ActivityListProps = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
  //   const categoryName = useMemo(
  //     () => (category: Activity["category"]) => categories.map((cat) => (cat.id === category ? cat.name : "")),
  //     [activities]
  //   );

  const categoryName = useMemo(
    () => (id: Activity["category"]) => {
      return categories.find((category) => category.id === id)?.name;
    },
    []
  );

  return (
    <>
      <h2 className="font-bold text-4xl text-center p-10 text-slate-600">Comida y Actividades</h2>
      {activities.map((activity) => (
        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
          <div className="space-y-2 relative ">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                        ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}
            >
              {categoryName(+activity.category)}
            </p>
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500">{activity.calories}</p>
          </div>
          <div>
            <p>Texto</p>
          </div>
        </div>
      ))}
    </>
  );
}
