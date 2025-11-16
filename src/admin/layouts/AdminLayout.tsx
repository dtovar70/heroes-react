import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
  return (
    <div className="bg-blue-500">
        <Outlet />
    </div>
  )
}
