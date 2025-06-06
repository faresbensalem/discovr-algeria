"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Villedz from "@/components/pageville";
import Culturedz from "@/components/culturedz";
import Activpage from "@/components/activpage"; 

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [currentPage, setCurrentPage] = useState("accueil");

    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header changePage={setCurrentPage} />
                <main className="flex-1">
                    {currentPage === "accueil" ? (
                        children
                    ) : currentPage === "villes" ? (
                        <Villedz />
                    ) : currentPage === "culture" ? (
                        <Culturedz />
                    ) : currentPage === "activite" ? (
                        <Activpage />
                    ) : (
                        <div>404 : Page introuvable</div>
                    )}
                </main>
                <Footer />
            </body>
        </html>
    );
}