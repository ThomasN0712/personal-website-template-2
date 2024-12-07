const Tooltip = ({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) => (
  <div className="group relative">
    {children}
    <div className="absolute bottom-full whitespace-nowrap mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
      {content}
    </div>
  </div>
);

export default Tooltip;
