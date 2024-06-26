import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
// import useAuth from "../../hooks/useAuth";

function Home() {
    // const { signOut }: any = useAuth();

    // const handleSignOut = async () => {
    //     await signOut();
    // }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* <span onClick={handleSignOut}>Sair</span> */}
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem adipisci minus incidunt perspiciatis ut accusantium iste, quo qui laboriosam eligendi blanditiis molestiae amet omnis! Maxime, eos? Doloribus deleniti aspernatur praesentium.</span>
            <Footer />
        </div>
    )
}

export default Home;