import { useUserContext } from "../context/userContext";

const Profile = () => {

    const { logoutUser }: any = useUserContext();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => logoutUser()}
        >
            Logout
        </button>
    )
}

export default Profile;