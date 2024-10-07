import React from "react";

import Header from '../header/header.js'
import Footer from '../footer/footer.js'

const Blogs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>

            <main className="flex-grow">
                <h1 className="bg-yellow-400">This page is under construction. Thank you for visiting! <br /> Integrating chatbot soon!
                Add blogs + reviews </h1>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Blogs;
