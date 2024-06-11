import React from "react";

const PageHead = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="pt-24 md:pt-44   flex flex-col ">
      <header className=" p-5 max-w-7xl m-auto md:p-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-8xl">
          {title}
        </h1>

        <article className="prose md:prose-lg ">{children}</article>
      </header>
    </section>
  );
};

export default PageHead;
