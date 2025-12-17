import {
  Truck,
  Search,
  IndianRupee,
  MapPin,
  Calendar,
} from "lucide-react";

const stats = [
  { title: "Active Bookings", value: 1, color: "bg-blue-100 text-blue-600" },
  { title: "Completed Trips", value: 1, color: "bg-green-100 text-green-600" },
  { title: "Total Spent", value: "₹1050", color: "bg-yellow-100 text-yellow-600" },
  { title: "Total Bookings", value: 3, color: "bg-purple-100 text-purple-600" },
];

const bookings = [
  {
    vehicle: "Pickup Truck",
    route: "Andheri → Vashi",
    date: "15/12/2025",
    status: "Confirmed",
    amount: 450,
    statusColor: "bg-blue-100 text-blue-600",
  },
  {
    vehicle: "Large Truck",
    route: "Whitefield → Electronic City",
    date: "12/12/2025",
    status: "Completed",
    amount: 1050,
    statusColor: "bg-green-100 text-green-600",
  },
  {
    vehicle: "Mini Truck",
    route: "Connaught Place → Gurgaon",
    date: "20/12/2025",
    status: "Pending",
    amount: 540,
    statusColor: "bg-yellow-100 text-yellow-600",
  },
];

export default function EnterpriseDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-1">Welcome back, Puneet Contractor 👋</h1>
      <p className="text-gray-500 mb-6">
        Manage your logistics and track your shipments
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl shadow-sm ${item.color}`}
          >
            <p className="text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold mt-1">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <ActionButton icon={<Search />} label="Search Vehicles" />
          <ActionButton icon={<Truck />} label="View Bookings" />
          <ActionButton icon={<MapPin />} label="Track Shipment" />
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Bookings</h2>
          <button className="text-blue-600 hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {bookings.map((b, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <Truck /> {b.vehicle}
                </h3>
                <p className="text-sm text-gray-500">{b.route}</p>
                <p className="text-sm flex items-center gap-2 text-gray-400">
                  <Calendar /> {b.date}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${b.statusColor}`}
                >
                  {b.status}
                </span>
                <p className="font-semibold flex items-center gap-1">
                  <IndianRupee /> {b.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 px-5 py-3 bg-white border rounded-xl shadow-sm hover:bg-blue-50 hover:text-blue-600 transition">
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
