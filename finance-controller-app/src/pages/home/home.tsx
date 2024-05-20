import useAuth from "../../hooks/useAuth";

function Home() {
    const { signOut }: any = useAuth();

    const handleSignOut = async () => {
        await signOut();
    }


    return (
        <div>
            <span>Home</span>
            <hr />
            <span onClick={handleSignOut}>Sair</span>
        </div>
    )
}

export default Home;