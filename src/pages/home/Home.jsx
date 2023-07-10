import GenarateSection from "./genarateSection/GenarateSection";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <header className="py-14">
                <div className="text-center space-y-7 pt-20">
                    <h2 className="text-6xl font-bold">
                        AI Image Generator
                    </h2>
                    <p>Get AI generated images from text straight from your browser</p>
                </div>
            </header>
            <section>
                <GenarateSection />
            </section>
        </div>
    );
};

export default Home;