const Backgroun = () => {
  return (
    <section className="grid grid-cols-4 [&>*]:w-full">
      <article>
        <div className="min-w-md bg-red-100"></div>
        <div className="w-full" ></div>
        <div className="w-full"></div>
        <div className="w-full"></div>
      </article>
      <article>
        <div></div>
        <div></div>
        <div></div>
      </article>
      <article>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
      <article>
        <div></div>
        <div></div>
      </article>
    </section>
  );
};

export default Backgroun;
