export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-800 text-gray-200 ">
                {/* Copyright */}
                <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Mohammad Mirzaei. All Rights Reserved.
                </div>
        </footer>
    );
}
