function HeaderMain({ project }) {
  if (!project) return null;

  return (
    <header className="w-full row-span-1 col-start-2 col-span-1 flex items-center px-10 border-b border-border">
      <h1 className="text-4xl font-semibold tracking-wider">{project.title}</h1>
    </header>
  );
}

export default HeaderMain;
