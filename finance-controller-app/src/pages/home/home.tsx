import getUserData from "../../api/getUser";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import getUserToken from "../../utils/getUserToken";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

interface User {
    id: number;
    full_name: string;
    email: string;
    password: string;
    balance: number
}

function Home() {
    const { signOut }: any = useAuth();
    const [data, setData] = useState<User | null>(null);

    useEffect(() => {
        async function userProfile() {
            const token = getUserToken();
            const userData = await getUserData(token);
            if (userData) {
                setData(userData.user);
            }
        }

        userProfile();
    }, []);

    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <span className="underline" onClick={handleSignOut}>sair</span>
            <span>
                {data ? ( // Conditionally render user data
                    <>
                        <p>Id: {data.id}</p>
                        <p>Full Name: {data.full_name}</p>
                        <p>Email: {data.email}</p>
                        <p>balance: {data.balance}</p>
                    </>
                ) : (
                    <p>Loading user data...</p> // Or display a suitable message
                )}
            </span>
            <Footer />
        </div>
    )
}

export default Home;