const Home = () => {
  return (
    <div className={"flex flex-col min-h-screen bg-blue-50"}>
      <header className={"max-w-md mx-auto w-full text-amber-50"}>
        <nav className={"bg-gray-900 px-4 py-2"}>Navigation</nav>
      </header>
      <main className={"flex-grow"}>Content</main>
      <footer
        className={
          "max-w-md mx-auto w-full bg-gray-900 text-amber-50 px-4 py-2"
        }
      >
        footer
      </footer>
    </div>
  );
};

export default Home;
