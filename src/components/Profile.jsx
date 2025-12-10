import { useAuthStore } from "../store/useAuthStore";
import EditProfile from "../pages/EditProfile";

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;
  return (
    <>
      <EditProfile user={user} />
    </>
  );
};

export default Profile;
