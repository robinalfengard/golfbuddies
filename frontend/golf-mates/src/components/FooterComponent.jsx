import { useContext } from "react";
import { AuthContext } from "../security/AuthContext";

function FooterComponent() {
    const authContext = useContext(AuthContext)

    console.log(`Footer component - ${authContext.number}`);

    return (
        <footer >
            <div >
                Your Footer
            </div>
        </footer>
    )
}

export default FooterComponent