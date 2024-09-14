import { useStore } from "./../UserContextStore/Store.js";

const Homepage = () => {
    const { userData, setUserData } = useStore();
    // setUserData({ ...userData, name: "Vishnu Vardhan" });
    console.log(userData);
    return (
        <div>
            <div>This is the Homepage</div>
        </div>
    )
}
export default Homepage;