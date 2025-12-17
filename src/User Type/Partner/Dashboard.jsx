import {
  CalendarCheck,
  IndianRupee,
  ListCheck,
  Plus,
  Truck,
  TruckIcon,
} from "lucide-react";

const stats = [
  { label: "Total Vehicles", value: 6, icon: <Truck/>, color: "blue" },
  { label: "Active Bookings", value: 1, icon: <CalendarCheck />, color: "orange" },
  { label: "Total Earnings", value: "₹1050", icon: <IndianRupee />, color: "green" },
  { label: "Completed Trips", value: 1, icon: <ListCheck />, color: "purple" },
];

const bookings = [
  {
    vehicle: "Pickup Truck",
    route: "Andheri → Vashi",
    date: "15/12/2025",
    status: "Confirmed",
    amount: 450,
    badge: "blue",
  },
  {
    vehicle: "Large Truck",
    route: "Whitefield → Electronic City",
    date: "12/12/2025",
    status: "Completed",
    amount: 1050,
    badge: "green",
  },
  {
    vehicle: "Mini Truck",
    route: "Connaught Place → Gurgaon",
    date: "20/12/2025",
    status: "Pending",
    amount: 540,
    badge: "yellow",
  },
];

const vehicles = [
  { name: "Pickup Truck", model: "Tata Ace", status: "Available" },
  { name: "Mini Truck", model: "Bolero", status: "Available" },
  { name: "Large Truck", model: "Ashok Leyland", status: "Available" },
  { name: "Tempo", model: "Mahindra Supro", status: "In Use" },
];

export default function PartnerDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold">Transporter Dashboard 🚚</h1>
      <p className="text-gray-500 mb-6">
        Welcome back, Shreyash Transport!
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4"
          >
            <div
              className={`p-3 rounded-lg bg-${s.color}-100 text-${s.color}-600`}
            >
              {s.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{s.label}</p>
              <h2 className="text-xl font-bold">{s.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Action icon={<Plus />} label="Add New Vehicle" />
          <Action icon={<Truck />} label="Manage Vehicles" />
          <Action icon={<ListCheck />} label="View Bookings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {bookings.map((b, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{b.vehicle}</h3>
                  <p className="text-sm text-gray-500">{b.route}</p>
                  <p className="text-xs text-gray-400">{b.date}</p>
                </div>

                <div className="flex items-center gap-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm bg-${b.badge}-100 text-${b.badge}-600`}
                  >
                    {b.status}
                  </span>
                  <p className="font-semibold">₹{b.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Status */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Vehicle Status</h2>
          <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
            {vehicles.map((v, i) => (
              <div
                key={i}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{v.name}</p>
                  <p className="text-sm text-gray-500">{v.model}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    v.status === "Available"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {v.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Action({ icon, label }) {
  return (
    <button className="flex items-center gap-2 px-5 py-3 bg-white border rounded-xl shadow-sm hover:bg-blue-50 hover:text-blue-600 transition">
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}