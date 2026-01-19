interface PageTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function PageTitle({ children, icon }: PageTitleProps) {
  return (
    <div className="page-title group mb-8 sm:mb-10">
      <div className="page-title-inner group">
        <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide flex items-center gap-3 border-l-4 border-[#333] pl-[30px]">
          {icon}
          {children}
        </h2>
      </div>
    </div>
  );
}
