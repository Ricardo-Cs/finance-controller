import useAuth from "../../hooks/useAuth";

function Home() {
    const { signOut }: any = useAuth();

    const handleSignOut = async () => {
        await signOut();
    }


    return (
        <div>
            <h1 className="text-3xl font-bold underline">Home</h1>
            <hr />
            <span onClick={handleSignOut}>Sair</span>
        </div>
    )
}

export default Home;